import type { ServiceIdentifier } from 'inversify';
import type { MessageRepositoryInterface } from '@app/chat/entities/message/interfaces';

const MessageRepositoryServiceId: ServiceIdentifier<MessageRepositoryInterface> = Symbol.for('MessageRepositoryServiceId');

export default MessageRepositoryServiceId;
