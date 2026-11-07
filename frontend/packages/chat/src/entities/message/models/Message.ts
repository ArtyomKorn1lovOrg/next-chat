interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  chatId: number;
  text: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

export default Message;
