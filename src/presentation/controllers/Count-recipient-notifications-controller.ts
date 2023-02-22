import { CountRecipientNotifications } from '../../domain/use-cases';
import { IRequest } from '../interfaces/IRequest';
import { IResponse } from '../interfaces/IResponse';

export default class CountRecipientNotificationController {
  constructor(private _usecase: CountRecipientNotifications) { }

  async handle(request: IRequest): Promise<IResponse> {
    const result = await this._usecase.execute({
      recipientId: request.params.recipientId,
    });

    return {
      statusCode: 200,
      body: result,
    };
  }
}
