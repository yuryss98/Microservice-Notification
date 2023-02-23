import NotificationODM from '../../db/NotificationODM';
import IController from '../../presentation/interfaces/IController';
import { CancelNotification } from '../../domain/use-cases';
import { CancelNotificationController } from '../../presentation/controllers';

function makeCancelNotificationController(): IController {
  const notificationsRepository = new NotificationODM();
  const cancelNotification = new CancelNotification(notificationsRepository);
  return new CancelNotificationController(cancelNotification);
}

export default makeCancelNotificationController;
