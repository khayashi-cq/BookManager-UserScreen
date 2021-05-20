import { Request, configureApiClient, Body } from '../common/apiClient';

interface LoginBody extends Body {
  email: string,
  password: string,
}

const PATH = '/login';
const HTTP_METHOD = 'post';

export const login = (body: LoginBody) => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
  };

  return configureApiClient(request);
}