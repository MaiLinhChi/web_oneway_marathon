import env from '@/env';
import AuthorizedInstance from '@/services/authorized-api';

const RegistersService = AuthorizedInstance(env.api.baseUrl.registersService);

export default RegistersService;
export * from './register-group';
