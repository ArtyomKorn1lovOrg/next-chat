import { injectable, inject } from 'inversify';
import { RestApiClientServiceId } from '@app/shared';
import type { ApiClientInterface } from '@app/shared';
import type { MessageRepositoryInterface } from '@app/chat/entities/message/interfaces';
import type { MessagesResponse, FindMessagePayload } from '@app/chat/entities/message/models';

@injectable()
export default class MessageRepository implements MessageRepositoryInterface {
  public constructor(
    @inject(RestApiClientServiceId)
    private apiClient: ApiClientInterface
  ) {}

  public async findMessages(payload: FindMessagePayload): Promise<MessagesResponse> {
    const response = await this.apiClient.post<FindMessagePayload, MessagesResponse>('api/v1/chat/messages', {
      data: payload
    });
    return response as MessagesResponse;
  }
}
