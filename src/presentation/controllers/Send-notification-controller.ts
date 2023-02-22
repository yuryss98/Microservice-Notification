import { SendNotification } from '../../domain/use-cases';
import { IRequest } from '../interfaces/IRequest';
import { IResponse } from '../interfaces/IResponse';

export default class SendNotificationController {
  constructor(private _usecase: SendNotification) { }

  async handle(request: IRequest): Promise<IResponse> {
    const notification = await this._usecase.execute({
      recipientId: request.params.recipientId,
      content: request.body.content,
      category: request.body.category,
    });

    return {
      statusCode: 201,
      body: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
      },
    };
  }
}
