import type { ChatStoreActions } from '@app/chat/entities/chat/interfaces';
import type { ChatState } from '@app/chat/entities/chat/models';

type ChatStore = ChatStoreActions & ChatState;

export default ChatStore;
