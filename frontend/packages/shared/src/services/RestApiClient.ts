import { injectable } from 'inversify';
import type { RequestConfig } from '@app/shared/models';
import { RequestTypes } from '@app/shared/enums';
import BaseApiClient from '@app/shared/services/BaseApiClient';
import type { ApiClientInterface } from '@app/shared/interfaces';

@injectable()
export default class RestApiClient extends BaseApiClient implements ApiClientInterface {
  public constructor(apiUrl: string) {
    super(apiUrl);
  }

  public async post<T, K>(url: string, config: RequestConfig<T> = {}): Promise<K | null | undefined> {
    return await this.executeRequest<T, K>(url, {
      ...config,
      requestType: RequestTypes.post,
    });
  }

  public async put<T, K>(url: string, config: RequestConfig<T> = {}): Promise<K | null | undefined> {
    return await this.executeRequest<T, K>(url, {
      ...config,
      requestType: RequestTypes.put,
    });
  }

  public async delete<T, K>(url: string, config: RequestConfig<T> = {}): Promise<K | null | undefined> {
    return await this.executeRequest(url, {
      ...config,
      requestType: RequestTypes.delete,
    });
  }

  public async get<T, K>(url: string, config: RequestConfig<T> = {}): Promise<K | null | undefined> {
    return await this.executeRequest(url, {
      ...config,
      requestType: RequestTypes.get,
    });
  }
}
