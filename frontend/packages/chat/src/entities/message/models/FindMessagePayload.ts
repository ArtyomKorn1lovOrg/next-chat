import type { Pagination } from '@app/shared';

interface FindMessagePayload {
  chatId: number;
  pagination: Pagination;
}

export default FindMessagePayload;
