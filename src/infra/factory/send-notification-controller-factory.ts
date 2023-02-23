import NotificationODM from '../../db/NotificationODM';
import IController from '../../presentation/interfaces/IController';
import { SendNotification } from '../../domain/use-cases';
import { SendNotificationController } from '../../presentation/controllers';

function makeSendNotificationController(): IController {
  const notificationsRepository = new NotificationODM();
  const sendNotification = new SendNotification(notificationsRepository);
  return new SendNotificationController(sendNotification);
}

export default makeSendNotificationController;
