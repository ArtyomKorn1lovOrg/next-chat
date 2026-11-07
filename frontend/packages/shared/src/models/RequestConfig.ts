import type { SimpleObject } from '@app/shared/types';
import type { RequestTypes, BodyTypes } from '@app/shared/enums';

interface RequestConfig<T> {
  dataType?: BodyTypes | null;
  requestType?: RequestTypes | null;
  data?: T | null;
  params?: SimpleObject | null;
  headers?: SimpleObject | null;
}

export default RequestConfig;
