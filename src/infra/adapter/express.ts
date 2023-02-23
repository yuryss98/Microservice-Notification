import { NextFunction, Request, Response } from 'express';
import IController from '../../presentation/interfaces/IController';

export default class ExpressAdapter {
  static adapt(controller: IController) {
    return async function generic(req: Request, res: Response, next: NextFunction) {
      try {
        const httpResponse = await controller.handle({ params: req.params, body: req.body });
        return res.status(httpResponse.statusCode).json(httpResponse.body);
      } catch (error) {
        return next(error);
      }
    };
  }
}
