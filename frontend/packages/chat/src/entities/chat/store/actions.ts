import type { StoreApi } from 'zustand';
import { DependencyContainer, PaginationFactory } from '@app/shared';
import type { MessagesResponse } from '@app/chat/entities/message/models';
import type { MessageRepositoryInterface } from '@app/chat/entities/message/interfaces';
import { MessageRepositoryServiceId } from '@app/chat/entities/message/service-ids';
import { MessageFactory } from '@app/chat/entities/message/factories';
import type { ChatStoreActions } from '@app/chat/entities/chat/interfaces';
import type ChatStore from '@app/chat/entities/chat/store/type';

const messageRepository: MessageRepositoryInterface = DependencyContainer.get(MessageRepositoryServiceId);

type SetState = StoreApi<ChatStore>['setState'];
type GetState = StoreApi<ChatStore>['getState'];

const createActions = (set: SetState, _: GetState): ChatStoreActions => ({
  selectChat(this: ChatStore, chatId: number): void {
    set(_ => ({
      chat: {
        id: chatId,
        name: 'Зелёный чат',
        userIds: [1, 2],
      },
    }));
  },
  async findMessages(this: ChatStore, refresh: boolean = false): Promise<void> {
    try {
      if (!this.pagination || !this.chat) {
        return;
      }
      set(_ => ({
        isLoadingChat: true,
      }));
      const response: MessagesResponse = await messageRepository.findMessages(MessageFactory.createFindPayload(this.chat.id, this.pagination));
      set(state => ({
        messages: refresh ? response.items : [...state.messages, ... response.items],
        pagination: PaginationFactory.createFromResponse(response.pagination),
        isLoadingChat: false,
      }));
    } catch (exception: unknown) {
      set(_ => ({
        isLoadingChat: false,
      }));
    }
  },
  addMessage(this: ChatStore): void {
  },
  removeMessage(this: ChatStore): void {
  },
});

export default createActions;
