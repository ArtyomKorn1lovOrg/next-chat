'use client';
import { createContext, useState, type ReactNode, useContext} from 'react';
import { useStore } from 'zustand';
import createChatStore from '@app/chat/entities/chat/store';
import type ChatStore from "@app/chat/entities/chat/store/type";

type ChatStoreApi = ReturnType<typeof createChatStore>;

const ChatStoreContext = createContext<ChatStoreApi | null>(null);

type ChatStoreProviderProps = {
  children: ReactNode;
};

export const ChatStoreProvider = ({ children }: ChatStoreProviderProps) => {
  const [store] = useState(() => createChatStore());

  return (
    <ChatStoreContext.Provider value={store}>
      {children}
    </ChatStoreContext.Provider>
  )
};

export const useChatStore = <T,>(selector: (store: ChatStore) => T): T => {
  const store = useContext(ChatStoreContext);
  if (!store) {
    throw new Error(
      'useChatStore не может использоваться без ChatStoreProvider',
    );
  }
  return useStore(store, selector);
}
