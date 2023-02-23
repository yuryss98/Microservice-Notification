import NotificationODM from '../../db/NotificationODM';
import IController from '../../presentation/interfaces/IController';
import { CountRecipientNotifications } from '../../domain/use-cases';
import { CountRecipientNotificationController } from '../../presentation/controllers';

function makeCountRecipientNotificationsController(): IController {
  const notificationsRepository = new NotificationODM();
  const countNotification = new CountRecipientNotifications(notificationsRepository);
  return new CountRecipientNotificationController(countNotification);
}

export default makeCountRecipientNotificationsController;
