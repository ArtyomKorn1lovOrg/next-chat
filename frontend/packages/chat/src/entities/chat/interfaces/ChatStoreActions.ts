interface ChatStoreActions {
  selectChat: (chatId: number) => void;
  findMessages: (refresh: boolean) => Promise<void>;
  addMessage: () => void;
  removeMessage: () => void;
}

export default ChatStoreActions;
