import NotificationODM from '../../db/NotificationODM';
import IController from '../../presentation/interfaces/IController';
import { UnreadNotification } from '../../domain/use-cases';
import { UnreadNotificationController } from '../../presentation/controllers';

function makeUnreadNotificationController(): IController {
  const notificationsRepository = new NotificationODM();
  const unreadNotification = new UnreadNotification(notificationsRepository);
  return new UnreadNotificationController(unreadNotification);
}

export default makeUnreadNotificationController;
