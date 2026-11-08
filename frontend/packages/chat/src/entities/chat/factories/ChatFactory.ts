import type { ChatState } from '@app/chat/entities/chat/models';

export const createInitialState = (): ChatState => {
  return {
    isLoadingChat: false,
    isLoadingMessages: false,
    canLoadingMessages: true,
    chat: null,
    messages: [],
    pagination: {
      page: 1,
      perPage: 10,
    },
  };
};
