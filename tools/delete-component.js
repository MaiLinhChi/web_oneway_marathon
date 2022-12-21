#!/usr/bin/env node

const fs = require('fs');
const exec = require('child_process').exec;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// CONSTANTS ------------------------------------------------------------------------------------------

const COMMANDS = {
  PROVIDE_PERMISSION: 'chmod +x ./tools/delete-component.js',
  FORMAT: 'prettier --write src/**/*.{ts,tsx}',
};

const MESSAGES = {
  ERRORS: {
    WRONG_COMPONENT_NAME: 'Please provide correct component name!',
    WRONG_PARENT_NAME: 'Please provide correct parent name!',
    WRONG_YES_NO: 'Please provide correct answer!',
  },
  LOADING: {
    DELETE_COMPONENT: 'Deleting component...',
  },
  SUCCESS: {
    DELETE_COMPONENT: 'Delete component done!',
  },
};

// UTILS ------------------------------------------------------------------------------------------

const upperCase = (str) => str.toUpperCase();

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// HELPERS ----------------------------------------------------------------------------------

const throwError = (errMessage) => {
  console.log(`🛑 ${errMessage} 🛑`);
  process.exit();
};

const fileOrDirectoryAlreadyExist = (path) => fs.existsSync(path);

const writeFile = (path, content) => fs.writeFileSync(path, content);

const readFile = (path, cb) => {
  fs.readFile(path, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      cb?.(data);
    } else {
      console.log(MESSAGES.ERRORS.CANNOT_READ_FILE);
      process.exit();
    }
  });
};

const deleteFolder = async (dir) => await fs.rmSync(dir, { recursive: true, force: true });

const deleteFile = async (dir) => await fs.unlinkSync(dir);

// MAIN ACTIONS

const deleteWrapperDir = async (args) => {
  const [compName, dir] = args;
  const wrapperSrcPath = `./src/${dir}/${compName}`;
  const wrapperSrcExisted = fileOrDirectoryAlreadyExist(wrapperSrcPath);
  const wrapperStoriesPath = `./stories/${dir}`;
  const wrapperStoriesExisted = fileOrDirectoryAlreadyExist(wrapperStoriesPath);
  const fileStoriesPath = `${wrapperStoriesPath}/${compName}.stories.tsx`;
  const fileStoriesExisted = fileOrDirectoryAlreadyExist(fileStoriesPath);

  wrapperSrcExisted && (await deleteFolder(wrapperSrcPath));
  wrapperStoriesExisted && fileStoriesExisted && (await deleteFile(fileStoriesPath));
};

// MAIN FLOW ------------------------------------------------------------------------------------------

exec(COMMANDS.PROVIDE_PERMISSION);

rl.question('⚡️  Component name (PascalCase. Example: PaymentCard): ', (compName) => {
  (!compName || compName.includes('_') || compName.includes('-') || compName[0] !== upperCase(compName[0])) &&
    throwError(MESSAGES.ERRORS.WRONG_COMPONENT_NAME);
  rl.question(`⚡️  Parent name: (components/containers): `, (dir) => {
    !dir && throwError(MESSAGES.ERRORS.WRONG_PARENT_NAME);
    const args = [compName, dir];

    deleteWrapperDir(args);

    console.log('✨  Done!');
    rl.close();
  });
});
