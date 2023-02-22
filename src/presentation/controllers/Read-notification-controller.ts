import { ReadNotification } from '../../domain/use-cases';
import { IRequest } from '../interfaces/IRequest';
import { IResponse } from '../interfaces/IResponse';

export default class ReadNotificationController {
  constructor(private _usecase: ReadNotification) { }

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
