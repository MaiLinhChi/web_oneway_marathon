import env from '@/env';
import AuthorizedInstance from '@/services/authorized-api';

const ApiService = AuthorizedInstance(env.api.baseUrl.service);

export default ApiService;
export * from './auth';
export * from './profile';
export * from './upload';
export * from './address';
export * from './races';
export * from './orders';
export * from './promotion';
export * from './payments';
export * from './forgot-password';
export * from './marathons';
