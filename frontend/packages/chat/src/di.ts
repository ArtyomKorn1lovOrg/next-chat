import { DependencyContainer } from '@app/shared';
import { MessageRepositoryServiceId, MessageRepository } from '@app/chat/entities';

DependencyContainer.bind(MessageRepositoryServiceId).to(MessageRepository);
