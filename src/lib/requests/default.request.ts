import { api } from 'src/boot/axios';
import { UrlPathsEnum } from '../enums/urlPaths.enum';

export async function requestApi(
  url: UrlPathsEnum | string,
  method: 'get' | 'post' | 'put' = 'get',
  payload: {
    body?: Record<string, unknown> | any;
    params?: Record<string, unknown>;
  } = {}
) {
  const serverResponse = await api[method](
    url,
    payload?.body ? payload.body : { params: payload?.params }
  );
  const status = serverResponse.status;

  if (![200, 201, 204].includes(status)) {
    throw new Error('Request failed', {
      cause: serverResponse.data,
    });
  }

  const responseBody = serverResponse.data;
  return responseBody;
}
