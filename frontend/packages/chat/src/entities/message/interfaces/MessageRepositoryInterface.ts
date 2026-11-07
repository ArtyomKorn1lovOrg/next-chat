import type { MessagesResponse, FindMessagePayload } from '@app/chat/entities/message/models';

interface MessageRepositoryInterface {
  findMessages(payload: FindMessagePayload): Promise<MessagesResponse>
}

export default MessageRepositoryInterface;
