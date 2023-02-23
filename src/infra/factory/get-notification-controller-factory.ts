import NotificationODM from '../../db/NotificationODM';
import IController from '../../presentation/interfaces/IController';
import { GetRecipientNotifications } from '../../domain/use-cases';
import { GetRecipientNotificationsController } from '../../presentation/controllers';

function makeGetRecipientNotificationsController(): IController {
  const notificationsRepository = new NotificationODM();
  const getNotifications = new GetRecipientNotifications(notificationsRepository);
  return new GetRecipientNotificationsController(getNotifications);
}

export default makeGetRecipientNotificationsController;
