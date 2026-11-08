import { createStore } from 'zustand/vanilla';
import type ChatStore from '@app/chat/entities/chat/store/type';
import { ChatFactory } from '@app/chat/entities/chat/factories';
import createActions from '@app/chat/entities/chat/store/actions';

const createChatStore = () =>
  createStore<ChatStore>()((set, get) => ({
    ...ChatFactory.createInitialState(),
    ...createActions(set, get),
  }));

export default createChatStore;
