import { GetRecipientNotifications } from '../../domain/use-cases';
import { IRequest } from '../interfaces/IRequest';
import { IResponse } from '../interfaces/IResponse';

export default class GetRecipientNotificationsController {
  constructor(private _usecase: GetRecipientNotifications) { }

  async handle(request: IRequest): Promise<IResponse> {
    const notifications = await this._usecase.execute({
      recipientId: request.params.recipientId,
    });

    return {
      statusCode: 200,
      body: notifications.map((notification) => ({
        id: notification.id,
        category: notification.category,
        content: notification.content,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        canceledAt: notification.canceledAt,
        readAt: notification.readAt,
      })),
    };
  }
}
