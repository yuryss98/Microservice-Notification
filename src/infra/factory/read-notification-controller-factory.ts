import NotificationODM from '../../db/NotificationODM';
import IController from '../../presentation/interfaces/IController';
import { ReadNotification } from '../../domain/use-cases';
import { ReadNotificationController } from '../../presentation/controllers';

function makeReadNotificationController(): IController {
  const notificationsRepository = new NotificationODM();
  const readNotification = new ReadNotification(notificationsRepository);
  return new ReadNotificationController(readNotification);
}

export default makeReadNotificationController;
