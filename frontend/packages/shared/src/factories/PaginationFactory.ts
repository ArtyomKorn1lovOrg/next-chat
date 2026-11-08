import type { Pagination, PaginationResponse } from '@app/shared/models';

export const createFromResponse = (response: PaginationResponse): Pagination => {
  return {
    page: response.page,
    perPage: response.perPage,
  };
}
