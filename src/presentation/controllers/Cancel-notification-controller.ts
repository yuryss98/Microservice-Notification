import { CancelNotification } from '../../domain/use-cases';
import { IRequest } from '../interfaces/IRequest';
import { IResponse } from '../interfaces/IResponse';

export default class CancelNotificationController {
  constructor(private _usecase: CancelNotification) { }

  async handle(request: IRequest): Promise<IResponse> {
    const output = await this._usecase.execute({
      notificationId: request.params.id,
    });

    return {
      statusCode: 204,
      body: output,
    };
  }
}
