import type { Pagination } from '@app/shared';
import type { FindMessagePayload } from '@app/chat/entities/message/models';

export const createFindPayload = (chatId: number, pagination: Pagination): FindMessagePayload => {
  return {
    chatId: chatId,
    pagination: pagination,
  };
};
