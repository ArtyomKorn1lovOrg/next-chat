import type { PaginationResponse } from '@app/shared';
import type { Message } from '@app/chat/entities/message/models';

interface MessagesResponse {
  items: Message[];
  pagination: PaginationResponse;
}

export default MessagesResponse;
