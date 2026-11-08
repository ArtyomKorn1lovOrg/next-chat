import type { ResponseError } from '@app/shared/models';

export default class ResponseException extends Error implements ResponseError {
  public status?: number;

  public constructor(data: ResponseError | null = null) {
    super(data?.message);
    this.status = data?.status;
  }
}
