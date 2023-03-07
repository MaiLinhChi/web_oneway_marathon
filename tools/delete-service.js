#!/usr/bin/env node

// GET: path, params
// POST: path, params, body
// PATCH: path, body
// PUT: path, body
// DELETE: path, params

// command: ./tools/create-service.js <service> <endpoint> <ACTION_NAME> <METHOD> <group-name>
const fs = require('fs');
const exec = require('child_process').exec;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// CONSTANTS ------------------------------------------------------------------------------------------

const COMMANDS = {
  PROVIDE_PERMISSION: 'chmod +x ./tools/create-service.js',
  FORMAT:
    'prettier --write src/services/**/**/*.ts && prettier --write src/services/**/*.ts && prettier --write src/redux/**/**/*.ts && prettier --write src/redux/**/*.ts',
};

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const API_MATERIALS = {
  PATHS: 'paths',
  PARAMS: 'params',
  BODY: 'body',
};

const MESSAGES = {
  ERRORS: {
    MISSING_MATERIALS: 'Please provide all the materials!',
    METHOD_NOT_VALID: 'Method is not valid',
    MISSING_SERVICE: 'Please provide correct service name!',
    MISSING_ENDPOINT: 'Please provide endpoint url!',
    MISSING_ACTION_NAME: 'Please provide correct action name!',
    MISSING_METHOD: 'Please provide correct method!',
    MISSING_GROUP: 'Please provide correct group name!',
    CANNOT_READ_FILE: 'Cannot read file!',
  },
  LOADING: {
    DELETE_ACTION: 'Deleting action...',
    DELETE_SERVICE: 'Deleting service...',
    DELETE_SAGA: 'Deleting saga...',
    DELETE_REDUCER: 'Deleting reducer...',
  },
  SUCCESS: {
    DELETE_ACTION: 'Delete action done!',
    DELETE_SERVICE: 'Delete service done!',
    DELETE_SAGA: 'Delete saga done!',
    DELETE_REDUCER: 'Delete reducer done!',
  },
};

const ROOT_PATHS = {
  SERVICES: './src/services',
  ACTIONS: './src/redux/actions',
  SAGAS: './src/redux/sagas',
  REDUCERS: './src/redux/reducers',
};

const EXPORTS_AROUND_TYPES = {
  DEFAULT: 'DEFAULT',
  SAGA_GROUP: 'SAGA_GROUP',
  SAGA_ROOT: 'SAGA_ROOT',
  REDUCER_GROUP: 'REDUCER_GROUP',
  REDUCER_ROOT: 'REDUCER_ROOT',
};

// UTILS ------------------------------------------------------------------------------------------

const arrayIsEmpty = (arr) => arr.length === 0;

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const upperCase = (str) => str.toUpperCase();

const lowerCase = (str) => str.toLowerCase();

const fromKebabToCamelCase = (str) =>
  str
    .split('-')
    .map((c, i) => (i === 0 ? c : capitalize(c)))
    .join('');

const fromKebabToPascalCase = (str) =>
  str
    .split('-')
    .map((c) => capitalize(c))
    .join('');

const kebabCaseAction = (actionName) => actionName.toLowerCase().replace(/_/g, '-');

const pascalCaseAction = (actionName) =>
  actionName
    .split('_')
    .map((word) => capitalize(lowerCase(word)))
    .join('');

const camelCaseAction = (actionName) =>
  actionName
    .split('_')
    .map((word, i) => (i === 0 ? lowerCase(word) : capitalize(lowerCase(word))))
    .join('');

const removeFirstAndLastCharater = (str) => str.substring(1, str.length - 1);

// HELPERS ----------------------------------------------------------------------------------

const throwError = (errMessage) => {
  console.log(`🛑 ${errMessage} 🛑`);
  process.exit();
};

const getApiAttachmentMaterials = (method, hasPath) => {
  const methodUppercase = upperCase(method);

  switch (methodUppercase) {
    case METHODS.GET:
    case METHODS.DELETE:
      return hasPath ? [API_MATERIALS.PATHS, API_MATERIALS.PARAMS] : [API_MATERIALS.PARAMS];
    case METHODS.POST:
      return hasPath
        ? [API_MATERIALS.PATHS, API_MATERIALS.PARAMS, API_MATERIALS.BODY]
        : [API_MATERIALS.PARAMS, API_MATERIALS.BODY];
    case METHODS.PUT:
    case METHODS.PATCH:
      return hasPath ? [API_MATERIALS.PATHS, API_MATERIALS.BODY] : [API_MATERIALS.BODY];
    default:
      console.log(MESSAGES.ERRORS.METHOD_NOT_VALID);
      process.exit();
  }
};

const getAllFilesOrDirsInDirectory = async (dir) => await fs.readdirSync(dir);

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

const appendFile = (path, content) => fs.appendFileSync(path, content);

const createDirectory = (dirPath, rescursive) => fs.mkdirSync(dirPath, { rescursive });

const deleteFolder = async (dir) => await fs.rmSync(dir, { recursive: true, force: true });

const deleteFile = async (dir) => await fs.unlinkSync(dir);

const checkExistedFileNotImportant = async (path) => {
  const notImportantFilesOrDirs = ['.DS_Store', 'index.ts'];

  const filesOrDirInPath = await getAllFilesOrDirsInDirectory(path);
  const filesOrDirsInPathFilter = filesOrDirInPath
    .filter((fileName) => !notImportantFilesOrDirs.includes(fileName))
    .map((file) => file.split('.')[0]);

  return filesOrDirsInPathFilter.length === 0;
};

const writeExportsAround = async (service, path, exportsAroundType = EXPORTS_AROUND_TYPES.DEFAULT) => {
  const groupKebabName =
    exportsAroundType === EXPORTS_AROUND_TYPES.REDUCER_GROUP ? path.split('/')[path.split('/').length - 1] : '';
  const notImportantFilesOrDirs = ['.DS_Store', 'index.ts'];
  const getAllFilesOrDirsInPath = await getAllFilesOrDirsInDirectory(path);
  const filesOrDirsInGroup = getAllFilesOrDirsInPath
    .filter((fileName) => !notImportantFilesOrDirs.includes(fileName))
    .map((file) => file.split('.')[0]);
  const indexFilePathInGroup = `${path}/index.ts`;

  const contentForIndexFileInGroupDefault = `${filesOrDirsInGroup
    .map((file) => `export * from './${file}'`)
    .join(';')};`;

  const contentForIndexFileInGroupSaga = `
    import { all, takeLatest } from 'redux-saga/effects';

    import { ${filesOrDirsInGroup
      .map((file) => `${fromKebabToCamelCase(file)}Action`)
      .join(', ')} } from '@/redux/actions';

    ${filesOrDirsInGroup.map((file) => `import { ${fromKebabToCamelCase(file)}Saga } from './${file}'`).join(';')};

    export default function* root(): Generator {
      yield all([${filesOrDirsInGroup
        .map(
          (file) => `takeLatest(${fromKebabToCamelCase(file)}Action.request.type, ${fromKebabToCamelCase(file)}Saga)`,
        )
        .join(', ')}]);
    }
  `;

  const contentForIndexFileInRootSaga = `
    import { all, fork } from 'redux-saga/effects';

    ${filesOrDirsInGroup.map((dir) => `import ${fromKebabToCamelCase(dir)}Saga from './${dir}'`).join(';')};

    const rootSaga = function* root(): Generator {
      yield all([
        ${filesOrDirsInGroup.map((dir) => `fork(${fromKebabToCamelCase(dir)}Saga)`).join(',')}
      ]);
    };

    export default rootSaga;
  `;

  const contentForIndexFileInGroupReducer = `
    import { createReducer } from 'deox';

    import { ${filesOrDirsInGroup
      .map((file) => `T${fromKebabToPascalCase(file)}Response`)
      .join(', ')} } from '@/services/${service}/${groupKebabName}';
    import { ${filesOrDirsInGroup
      .map((file) => `${fromKebabToCamelCase(file)}Action`)
      .join(', ')} } from '@/redux/actions';
    ${filesOrDirsInGroup
      .map((file) => `import { ${fromKebabToCamelCase(file)}UpdateState } from './${file}'`)
      .join(';')};
    
    export type T${fromKebabToPascalCase(groupKebabName)}State = {
      ${filesOrDirsInGroup
        .map((file) => `${fromKebabToCamelCase(file)}Response?: T${fromKebabToPascalCase(file)}Response`)
        .join(';')};
    };

    const initialState: T${fromKebabToPascalCase(groupKebabName)}State = {
      ${filesOrDirsInGroup.map((file) => `${fromKebabToCamelCase(file)}Response: undefined`).join(',')},
    };

    const ${fromKebabToPascalCase(groupKebabName)}Reducer = createReducer(initialState, (handleAction) => [
      ${filesOrDirsInGroup
        .map(
          (file) =>
            `handleAction(${fromKebabToCamelCase(file)}Action.success, ${fromKebabToCamelCase(file)}UpdateState)`,
        )
        .join(',')},
    ]);

    export default ${fromKebabToPascalCase(groupKebabName)}Reducer;
  `;

  const contentForIndexFileInRootReducer = `
    import { combineReducers } from 'redux';

    import { loadingReducer, errorReducer, successReducer } from './status';
    ${filesOrDirsInGroup
      .filter((dir) => dir !== 'status')
      .map((dir) => `import ${fromKebabToCamelCase(dir)}Reducer from './${dir}'`)
      .join(';')};

    const rootReducer = combineReducers({
      loadingReducer,
      errorReducer,
      successReducer,
      ${filesOrDirsInGroup
        .filter((dir) => dir !== 'status')
        .map((dir) => `${fromKebabToCamelCase(dir)}Reducer`)
        .join(',')},
    });

    export default rootReducer;

    export type TRootState = ReturnType<typeof rootReducer>;
  `;

  exportsAroundType === EXPORTS_AROUND_TYPES.DEFAULT &&
    writeFile(indexFilePathInGroup, contentForIndexFileInGroupDefault);
  exportsAroundType === EXPORTS_AROUND_TYPES.SAGA_GROUP &&
    writeFile(indexFilePathInGroup, contentForIndexFileInGroupSaga);
  exportsAroundType === EXPORTS_AROUND_TYPES.SAGA_ROOT &&
    writeFile(indexFilePathInGroup, contentForIndexFileInRootSaga);
  exportsAroundType === EXPORTS_AROUND_TYPES.REDUCER_GROUP &&
    writeFile(indexFilePathInGroup, contentForIndexFileInGroupReducer);
  exportsAroundType === EXPORTS_AROUND_TYPES.REDUCER_ROOT &&
    writeFile(indexFilePathInGroup, contentForIndexFileInRootReducer);
};

const common = (args, mainPath) => {
  const mainDirIsServices = mainPath === ROOT_PATHS.SERVICES;
  const [service, endpoint, actionName, method, group] = args;
  const hasPath = endpoint.includes('{') || endpoint.includes('}');
  const pascalCaseActionName = pascalCaseAction(actionName);
  const camelCaseActionName = camelCaseAction(actionName);
  const kebabCaseActionName = kebabCaseAction(actionName);
  const pascalCaseGroupName = fromKebabToPascalCase(group);
  const apiAttachmentMaterials = getApiAttachmentMaterials(method, hasPath);
  const materialsExceptPaths = apiAttachmentMaterials.filter((material) => material !== API_MATERIALS.PATHS);
  const rootPath = mainDirIsServices ? `${mainPath}/${service}/index.ts` : mainPath;
  const groupPath = mainDirIsServices ? `${mainPath}/${service}/${group}` : `${mainPath}/${group}`;
  const groupExistedInRoot = fileOrDirectoryAlreadyExist(groupPath);
  const fileName = `${kebabCaseActionName}.ts`;
  const filePath = `${groupPath}/${fileName}`;

  const rootDirectoryPath = mainDirIsServices ? `${mainPath}/${service}` : mainPath;
  const rootExisted = fileOrDirectoryAlreadyExist(rootDirectoryPath);
  if (!rootExisted) {
    createDirectory(rootDirectoryPath);
  }

  if (!groupExistedInRoot) {
    createDirectory(groupPath);

    if (mainDirIsServices) {
      if (!rootExisted) {
        appendFile(
          rootPath,
          `
          import env from '@/env';
          import AuthorizedInstance from '@/services/authorized-api';

          const ${fromKebabToPascalCase(service)}Service = AuthorizedInstance(env.api.baseUrl.${fromKebabToCamelCase(
            service,
          )}Service);

          export default ${fromKebabToPascalCase(service)}Service;
        `,
        );
      }
      appendFile(rootPath, `export * from './${group}';`);
    }
  }

  return {
    service,
    endpoint,
    actionName,
    method,
    group,
    pascalCaseActionName,
    camelCaseActionName,
    kebabCaseActionName,
    pascalCaseGroupName,
    apiAttachmentMaterials,
    materialsExceptPaths,
    rootPath,
    groupPath,
    groupExistedInRoot,
    fileName,
    filePath,
  };
};

// MAIN ACTIONS ----------------------------------------------------------------------------------

const deleteServiceFile = async (args) => {
  console.log(MESSAGES.LOADING.DELETE_SERVICE);
  const { service, rootPath, kebabCaseActionName, group, groupPath, filePath } = common(args, ROOT_PATHS.SERVICES);

  const filePathExisted = fileOrDirectoryAlreadyExist(filePath);
  if (filePathExisted) {
    filePathExisted && (await deleteFile(filePath));
    const groupFilePath = `${groupPath}/index.ts`;
    const groupFilePathExisted = fileOrDirectoryAlreadyExist(groupFilePath);

    if (groupFilePathExisted) {
      const rootFolderPath = `${ROOT_PATHS.SERVICES}/${service}`;
      const isNotExistedServicesMethods = await checkExistedFileNotImportant(groupPath);

      if (isNotExistedServicesMethods) {
        await deleteFolder(groupPath);
        const isNotExistedServicesFolder = await checkExistedFileNotImportant(rootFolderPath);
        if (isNotExistedServicesFolder) {
          deleteFolder(rootFolderPath);
        } else {
          readFile(rootPath, (data) => {
            const newFileContent = data.replace(`export * from './${group}';`, '');
            writeFile(rootPath, newFileContent);
          });
        }
      } else {
        readFile(groupFilePath, (data) => {
          const newFileContent = data.replace(`export * from './${kebabCaseActionName}';`, '');
          writeFile(groupFilePath, newFileContent);
        });
      }
    }
  }

  console.log(MESSAGES.SUCCESS.DELETE_SERVICE);
};

const deleteActionFile = async (args) => {
  console.log(MESSAGES.LOADING.DELETE_ACTION);
  const { service, rootPath, kebabCaseActionName, groupPath, filePath } = common(args, ROOT_PATHS.ACTIONS);

  const filePathExisted = fileOrDirectoryAlreadyExist(filePath);
  if (filePathExisted) {
    filePathExisted && (await deleteFile(filePath));
    const groupFilePath = `${groupPath}/index.ts`;
    const groupFilePathExisted = fileOrDirectoryAlreadyExist(groupFilePath);

    if (groupFilePathExisted) {
      const isNotExistedActionsMethods = await checkExistedFileNotImportant(groupPath);

      if (isNotExistedActionsMethods) {
        await deleteFolder(groupPath);
        await writeExportsAround(service, rootPath);
      } else {
        readFile(groupFilePath, (data) => {
          const newFileContent = data.replace(`export * from './${kebabCaseActionName}';`, '');
          writeFile(groupFilePath, newFileContent);
        });
      }

      const isNotExistedActionsFolder = await checkExistedFileNotImportant(rootPath);

      if (isNotExistedActionsFolder) {
        await deleteFile(rootPath);
      }
    }
  }
  console.log(MESSAGES.SUCCESS.DELETE_ACTION);
};

const deleteSagaFile = async (args) => {
  console.log(MESSAGES.LOADING.DELETE_SAGA);
  const { camelCaseActionName, service, rootPath, kebabCaseActionName, groupPath, filePath } = common(
    args,
    ROOT_PATHS.SAGAS,
  );

  const filePathExisted = fileOrDirectoryAlreadyExist(filePath);
  if (filePathExisted) {
    filePathExisted && (await deleteFile(filePath));
    const groupFilePath = `${groupPath}/index.ts`;
    const groupFilePathExisted = fileOrDirectoryAlreadyExist(groupFilePath);

    if (groupFilePathExisted) {
      const isNotExistedSagasMethods = await checkExistedFileNotImportant(groupPath);

      if (isNotExistedSagasMethods) {
        await deleteFolder(groupPath);
        await writeExportsAround(service, rootPath, EXPORTS_AROUND_TYPES.SAGA_ROOT);
      } else {
        readFile(groupFilePath, (data) => {
          const nameAction = `${camelCaseActionName}Action`;
          const nameSaga = `${camelCaseActionName}Saga`;

          const newFileContent = data
            .replace(`import { ${nameSaga} } from './${kebabCaseActionName}';`, '')
            .replace(`takeLatest(${nameAction}.request.type, ${nameSaga}),`, '')
            .replace(`takeLatest(${nameAction}.request.type, ${nameSaga})`, '')
            .replace(`${nameAction},`, '')
            .replace(`${nameAction}`, '');

          writeFile(groupFilePath, newFileContent);
        });
      }
    }
  }

  console.log(MESSAGES.SUCCESS.DELETE_SAGA);
};

const deleteReducerFile = async (args) => {
  console.log(MESSAGES.LOADING.DELETE_REDUCER);
  const { pascalCaseActionName, service, rootPath, camelCaseActionName, kebabCaseActionName, groupPath, filePath } =
    common(args, ROOT_PATHS.REDUCERS);

  const filePathExisted = fileOrDirectoryAlreadyExist(filePath);
  if (filePathExisted) {
    filePathExisted && (await deleteFile(filePath));
    const groupFilePath = `${groupPath}/index.ts`;
    const groupFilePathExisted = fileOrDirectoryAlreadyExist(groupFilePath);

    if (groupFilePathExisted) {
      const isNotExistedServicesMethods = await checkExistedFileNotImportant(groupPath);

      if (isNotExistedServicesMethods) {
        await deleteFolder(groupPath);
        await writeExportsAround(service, rootPath, EXPORTS_AROUND_TYPES.REDUCER_ROOT);
      } else {
        readFile(groupFilePath, (data) => {
          const nameAction = `${camelCaseActionName}Action`;
          const nameTypeResponse = `T${pascalCaseActionName}Response`;
          const nameResponse = `${camelCaseActionName}Response`;
          const nameUpdateState = `${camelCaseActionName}UpdateState`;

          const newFileContent = data
            .replace(`${nameResponse}?: ${nameTypeResponse};`, '')
            .replace(`${nameResponse}: undefined,`, '')
            .replace(`handleAction(${nameAction}.success, ${nameUpdateState}),`, '')
            .replace(`import { ${nameUpdateState} } from './${kebabCaseActionName}';`, '')
            .replace(`${nameTypeResponse},`, '')
            .replace(`${nameTypeResponse}`, '')
            .replace(`${nameAction},`, '')
            .replace(`${nameAction}`, '');

          writeFile(groupFilePath, newFileContent);
        });
      }
    }
  }

  console.log(MESSAGES.SUCCESS.DELETE_REDUCER);
};

// ------------------------------------------------------------------------------------------

// MAIN FLOW ------------------------------------------------------------------------------------------

exec(COMMANDS.PROVIDE_PERMISSION);

rl.question('⚡️  Service name (kebab-case. Example: sample-service): ', (service) => {
  (!service || service.includes('_')) && throwError(MESSAGES.ERRORS.MISSING_SERVICE);
  rl.question('⚡️  Endpoint URL (Example: /user/{id}): ', (endpoint) => {
    (!endpoint || !endpoint.includes('/')) && throwError(MESSAGES.ERRORS.MISSING_ENDPOINT);
    rl.question('⚡️  Action name (SNAKE_CASE. Example: GET_USERS): ', (actionName) => {
      (!actionName || actionName.includes('-')) && throwError(MESSAGES.ERRORS.MISSING_ACTION_NAME);
      rl.question('⚡️  Method (GET, POST, PUT, PATCH, DELETE): ', (method) => {
        const methods = [METHODS.GET, METHODS.POST, METHODS.PUT, METHODS.PATCH, METHODS.DELETE];
        (!method || !methods.includes(method)) && throwError(MESSAGES.ERRORS.MISSING_METHOD);
        rl.question('⚡️  Group name (kebab-case. Example: user-controller): ', async (group) => {
          (!group || group.includes('_')) && throwError(MESSAGES.ERRORS.MISSING_GROUP);

          console.log('🛠   Generating...');

          const args = [
            lowerCase(service),
            lowerCase(endpoint),
            upperCase(actionName),
            upperCase(method),
            lowerCase(group),
          ];

          deleteServiceFile(args);
          deleteActionFile(args);
          deleteSagaFile(args);
          deleteReducerFile(args);

          rl.close();

          exec(COMMANDS.FORMAT);
        });
      });
    });
  });
});
