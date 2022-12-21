import env from '@/env';
import AuthorizedInstance from '@/services/authorized-api';

const ApiService = AuthorizedInstance(env.api.baseUrl.service);

export default ApiService;
export * from './auth';
