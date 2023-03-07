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
  },
  LOADING: {
    CREATE_ACTION: 'Creating action...',
    CREATE_SERVICE: 'Creating service...',
    CREATE_SAGA: 'Creating saga...',
    CREATE_REDUCER: 'Creating reducer...',
  },
  SUCCESS: {
    CREATE_ACTION: 'Create action done!',
    CREATE_SERVICE: 'Create service done!',
    CREATE_SAGA: 'Create saga done!',
    CREATE_REDUCER: 'Create reducer done!',
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

const getAllFilesOrDirsInDirectory = (dir) => fs.readdirSync(dir);

const fileOrDirectoryAlreadyExist = (path) => fs.existsSync(path);

const writeFile = (path, content) => fs.writeFileSync(path, content);

const appendFile = (path, content) => fs.appendFileSync(path, content);

const createDirectory = (dirPath, rescursive) => fs.mkdirSync(dirPath, { rescursive });

const writeExportsAround = (service, path, exportsAroundType = EXPORTS_AROUND_TYPES.DEFAULT) => {
  const groupKebabName =
    exportsAroundType === EXPORTS_AROUND_TYPES.REDUCER_GROUP ? path.split('/')[path.split('/').length - 1] : '';
  const notImportantFilesOrDirs = ['.DS_Store', 'index.ts'];
  const filesOrDirsInGroup = getAllFilesOrDirsInDirectory(path)
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

const createServiceFile = (args) => {
  console.log(MESSAGES.LOADING.CREATE_SERVICE);
  const {
    service,
    endpoint,
    method,
    pascalCaseActionName,
    camelCaseActionName,
    apiAttachmentMaterials,
    groupPath,
    filePath,
  } = common(args, ROOT_PATHS.SERVICES);
  const endpointSplitted = endpoint.split('/');
  const rootEndpoint = endpointSplitted[1];
  const pathArgs = endpointSplitted.filter((item) => item[0] === '{' && item[item.length - 1] === '}');
  const notHaveAnyPathArgs = arrayIsEmpty(pathArgs);
  const endpointJSSyntax = notHaveAnyPathArgs
    ? endpoint
    : `/${rootEndpoint}/${pathArgs
        .map(
          (arg) =>
            `$${arg.replace(
              removeFirstAndLastCharater(arg),
              `${API_MATERIALS.PATHS}?.${removeFirstAndLastCharater(arg)}`,
            )}`,
        )
        .join('/')}`;

  const importScope = `import ${fromKebabToPascalCase(service)}Service from '@/services/${service}';`;

  const typesScope = `
    ${apiAttachmentMaterials
      .map((material) =>
        material === API_MATERIALS.PATHS && !notHaveAnyPathArgs
          ? `
          export type T${pascalCaseActionName}${capitalize(material)} = {
            ${pathArgs.map((arg) => `${removeFirstAndLastCharater(arg)}: string | number`).join(';')};
          }`
          : `export type T${pascalCaseActionName}${capitalize(material)} = unknown`,
      )
      .join(';')};

    export type T${pascalCaseActionName}Materials = {
      ${apiAttachmentMaterials
        .map((material) => `${material}?: T${pascalCaseActionName}${capitalize(material)}`)
        .join(';')};
    };

    export type T${pascalCaseActionName}Response = unknown;`;

  const functionScope = `
    export const ${camelCaseActionName} = async ({ ${apiAttachmentMaterials.join(
    ', ',
  )} }: T${pascalCaseActionName}Materials): Promise<T${pascalCaseActionName}Response> => {
      const response = await ${fromKebabToPascalCase(service)}Service.${lowerCase(
    method,
  )}(${'`'}${endpointJSSyntax}${'`'}${
    apiAttachmentMaterials.includes(API_MATERIALS.BODY) ? `, ${API_MATERIALS.BODY}` : ''
  }${apiAttachmentMaterials.includes(API_MATERIALS.PARAMS) ? `, { ${API_MATERIALS.PARAMS} }` : ''});
      return response.data;
    };
  `;

  const fileContent = `
    ${importScope}

    // TYPES
    ${typesScope}

    // FUNCTION
    ${functionScope}
  `;

  writeFile(filePath, fileContent);
  writeExportsAround(service, groupPath);
  console.log(MESSAGES.SUCCESS.CREATE_SERVICE);
};

const createActionFile = (args) => {
  console.log(MESSAGES.LOADING.CREATE_ACTION);
  const {
    service,
    actionName,
    group,
    pascalCaseActionName,
    camelCaseActionName,
    kebabCaseActionName,
    rootPath,
    groupPath,
    filePath,
  } = common(args, ROOT_PATHS.ACTIONS);

  const enumActionName = `E${pascalCaseActionName}Action`;

  const actionNameRequest = `${upperCase(actionName)}_REQUEST`;
  const actionNameSuccess = `${upperCase(actionName)}_SUCCESS`;
  const actionNameFailed = `${upperCase(actionName)}_FAILED`;

  const importScope = `
    import { createActionCreator } from 'deox';

    import { T${pascalCaseActionName}Materials, T${pascalCaseActionName}Response } from '@/services/${service}/${group}/${kebabCaseActionName}';
  `;

  const constantsScope = `
    export enum ${enumActionName} {
      ${upperCase(actionName)} = '${upperCase(actionName)}',
      ${actionNameRequest} = '${actionNameRequest}',
      ${actionNameSuccess} = '${actionNameSuccess}',
      ${actionNameFailed} = '${actionNameFailed}',
    }
  `;

  const typesScope = `
    export type T${pascalCaseActionName}Request = {
      type: ${enumActionName}.${actionNameRequest};
      payload: {
        materials: T${pascalCaseActionName}Materials;
        successCallback?: (response: T${pascalCaseActionName}Response) => void;
        failedCallback?: (err: unknown) => void;
      };
    };

    export type T${pascalCaseActionName}Success = {
      type: ${enumActionName}.${actionNameSuccess};
      payload: { response: T${pascalCaseActionName}Response };
    };

    export type T${pascalCaseActionName}Failed = { type: ${enumActionName}.${actionNameFailed} };
  `;

  const functionScope = `
    export const ${camelCaseActionName}Action = {
      request: createActionCreator(
        ${enumActionName}.${actionNameRequest},
        (resolve) =>
          (
            materials: T${pascalCaseActionName}Materials,
            successCallback?: (response: T${pascalCaseActionName}Response) => void,
            failedCallback?: (err: unknown) => void,
          ): T${pascalCaseActionName}Request => resolve({ materials, successCallback, failedCallback }),
      ),
      success: createActionCreator(
        ${enumActionName}.${actionNameSuccess},
        (resolve) =>
          (response: T${pascalCaseActionName}Response): T${pascalCaseActionName}Success => resolve({ response }),
      ),
      failure: createActionCreator(
        ${enumActionName}.${actionNameFailed},
        (resolve) =>
          (error: unknown): T${pascalCaseActionName}Failed => resolve({ error }),
      ),
    };
  `;

  const fileContent = `
    ${importScope}

    // CONSTANTS
    ${constantsScope}

    // TYPES
    ${typesScope}

    // FUNCTION
    ${functionScope}
  `;

  writeFile(filePath, fileContent);
  writeExportsAround(service, groupPath);
  writeExportsAround(service, rootPath);
  console.log(MESSAGES.SUCCESS.CREATE_ACTION);
};

const createSagaFile = (args) => {
  console.log(MESSAGES.LOADING.CREATE_SAGA);
  const { service, pascalCaseActionName, camelCaseActionName, materialsExceptPaths, rootPath, groupPath, filePath } =
    common(args, ROOT_PATHS.SAGAS);

  const importScope = `
    import { ActionType } from 'deox';
    import { call, put } from 'redux-saga/effects';

    import { ${camelCaseActionName}Action } from '@/redux/actions';
    import { ${camelCaseActionName}, T${pascalCaseActionName}Response } from '@/services/${service}';
  `;

  const functionScope = `
    export function* ${camelCaseActionName}Saga(action: ActionType<typeof ${camelCaseActionName}Action.request>): Generator {
      const { materials, successCallback, failedCallback } = action.payload;
      try {
        const response = yield call(${camelCaseActionName}, materials);
        const ${camelCaseActionName}Response: T${pascalCaseActionName}Response = response as T${pascalCaseActionName}Response;
        yield put(${camelCaseActionName}Action.success(${camelCaseActionName}Response));
        successCallback?.(${camelCaseActionName}Response);
      } catch (err) {
        yield put(${camelCaseActionName}Action.failure(err));
        failedCallback?.(err);
      }
    }
  `;

  const fileContent = `
    ${importScope}

    // FUNCTION
    ${functionScope}
  `;

  writeFile(filePath, fileContent);
  writeExportsAround(service, groupPath, EXPORTS_AROUND_TYPES.SAGA_GROUP);
  writeExportsAround(service, rootPath, EXPORTS_AROUND_TYPES.SAGA_ROOT);
  console.log(MESSAGES.SUCCESS.CREATE_SAGA);
};

const createReducerFile = (args) => {
  console.log(MESSAGES.LOADING.CREATE_REDUCER);
  const {
    service,
    group,
    pascalCaseActionName,
    camelCaseActionName,
    pascalCaseGroupName,
    rootPath,
    groupPath,
    filePath,
  } = common(args, ROOT_PATHS.REDUCERS);

  const importScope = `
    import { T${pascalCaseGroupName}State } from '@/redux/reducers/${group}';
    import { T${pascalCaseActionName}Success } from '@/redux/actions/${group}';
  `;

  const functionScope = `
    export const ${camelCaseActionName}UpdateState = (state: T${pascalCaseGroupName}State, action: T${pascalCaseActionName}Success): T${pascalCaseGroupName}State => ({
      ...state,
      ${camelCaseActionName}Response: action.payload.response,
    });
  `;

  const fileContent = `
    ${importScope}
    ${functionScope}
  `;

  writeFile(filePath, fileContent);
  writeExportsAround(service, groupPath, EXPORTS_AROUND_TYPES.REDUCER_GROUP);
  writeExportsAround(service, rootPath, EXPORTS_AROUND_TYPES.REDUCER_ROOT);
  console.log(MESSAGES.SUCCESS.CREATE_REDUCER);
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
        rl.question('⚡️  Group name (kebab-case. Example: user-controller): ', (group) => {
          (!group || group.includes('_')) && throwError(MESSAGES.ERRORS.MISSING_GROUP);

          console.log('🛠   Generating...');

          const args = [
            lowerCase(service),
            lowerCase(endpoint),
            upperCase(actionName),
            upperCase(method),
            lowerCase(group),
          ];

          createServiceFile(args);
          createActionFile(args);
          createSagaFile(args);
          createReducerFile(args);

          rl.close();

          exec(COMMANDS.FORMAT);
        });
      });
    });
  });
});
