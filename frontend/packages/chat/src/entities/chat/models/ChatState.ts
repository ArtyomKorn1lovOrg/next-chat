import type { Pagination } from '@app/shared';
import type { Message } from '@app/chat/entities/message/models';
import type Chat from '@app/chat/entities/chat/models/Chat';

interface ChatState {
  isLoadingChat: boolean;
  isLoadingMessages: boolean;
  canLoadingMessages: boolean;
  chat?: Chat | null;
  messages: Message[];
  pagination?: Pagination | null;
}

export default ChatState;
