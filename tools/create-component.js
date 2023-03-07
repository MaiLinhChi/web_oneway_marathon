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
  PROVIDE_PERMISSION: 'chmod +x ./tools/create-component.js',
  FORMAT: 'prettier --write src/**/*.{ts,tsx}',
};

const MESSAGES = {
  ERRORS: {
    WRONG_COMPONENT_NAME: 'Please provide correct component name!',
    WRONG_PARENT_NAME: 'Please provide correct parent name!',
    WRONG_YES_NO: 'Please provide correct answer!',
  },
  LOADING: {
    CREATE_COMPONENT: 'Creating component...',
  },
  SUCCESS: {
    CREATE_COMPONENT: 'Create component done!',
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

const readFile = (path) => fs.readFileSync(path).toString();

const appendFile = (path, content) => fs.appendFileSync(path, content);

const createDirectory = (dirPath, rescursive) => fs.mkdirSync(dirPath, { rescursive });

// MAIN ACTIONS

const createWrapperDir = (args) => {
  const [compName, dir, generateStorybook] = args;
  const storybookRequired = generateStorybook === 'y' || generateStorybook === 'yes';
  const wrapperSrcPath = `./src/${dir}/${compName}`;
  const wrapperSrcExisted = fileOrDirectoryAlreadyExist(wrapperSrcPath);
  const wrapperStoriesPath = `./stories/${dir}`;
  const wrapperStoriesExisted = fileOrDirectoryAlreadyExist(wrapperStoriesPath);
  !wrapperSrcExisted && createDirectory(wrapperSrcPath);
  !wrapperStoriesExisted && storybookRequired && createDirectory(wrapperStoriesPath);

  createComponentFile(args, wrapperSrcPath);
  createStyleFile(args, wrapperSrcPath);
  createTypesFile(args, wrapperSrcPath);
  createIndexFile(args, wrapperSrcPath);
  storybookRequired && createStorybook(args, wrapperStoriesPath);
};

const createComponentFile = (args, wrapperDirPath) => {
  const [compName] = args;
  const filePath = `${wrapperDirPath}/${compName}.tsx`;

  const content = `import React from 'react';

import { T${compName}Props } from './${compName}.types.d';
import './${compName}.scss';

const ${compName}: React.FC<T${compName}Props> = () => {
  return (
    <div className="${compName}">
      <span>${compName}</span>
    </div>
  );
};

export default ${compName};
`;

  writeFile(filePath, content);
};

const createStyleFile = (args, wrapperDirPath) => {
  const [compName] = args;
  const filePath = `${wrapperDirPath}/${compName}.scss`;

  const content = `.${compName} {

}
  `;

  writeFile(filePath, content);
};

const createTypesFile = (args, wrapperDirPath) => {
  const [compName] = args;
  const filePath = `${wrapperDirPath}/${compName}.types.d.ts`;

  const content = `export type T${compName}Props = unknown;
`;

  writeFile(filePath, content);
};

const createIndexFile = (args, wrapperDirPath) => {
  const [compName] = args;
  const filePath = `${wrapperDirPath}/index.ts`;

  const content = `import ${compName} from './${compName}';

export * from './${compName}.types.d';
export default ${compName};
`;

  writeFile(filePath, content);
};

const createStorybook = (args, wrapperDirPath) => {
  const [compName, dir] = args;
  const filePath = `${wrapperDirPath}/${compName}.stories.tsx`;

  const content = `import React from 'react';
import { Story, Meta } from '@storybook/react';

import ${compName}, { T${compName}Props } from '@/${dir}/${compName}';

type T${compName}StoryProps = Omit<T${compName}Props>;

export default {
  title: '${capitalize(dir)}/${compName}',
  component: ${compName},
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<T${compName}StoryProps> = ({ ...rest }) => {
  return <${compName} {...rest} />;
};

export const Primary = Template.bind({});
`;

  writeFile(filePath, content);
};

// MAIN FLOW ------------------------------------------------------------------------------------------

exec(COMMANDS.PROVIDE_PERMISSION);

rl.question('⚡️  Component name (PascalCase. Example: PaymentCard): ', (compName) => {
  (!compName || compName.includes('_') || compName.includes('-') || compName[0] !== upperCase(compName[0])) &&
    throwError(MESSAGES.ERRORS.WRONG_COMPONENT_NAME);
  rl.question(`⚡️  Parent name: (components/containers): `, (dir) => {
    !dir && throwError(MESSAGES.ERRORS.WRONG_PARENT_NAME);

    console.log('🛠   Generating...');
    const args = [compName, dir];
    createWrapperDir(args);
    console.log('✨  Done!');
    rl.close();
  });
});
