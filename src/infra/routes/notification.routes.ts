import { Router } from 'express';
import ExpressAdapter from '../adapter/express';
import {
  makeCancelNotificationController,
  makeCountRecipientNotificationsController,
  makeGetRecipientNotificationsController,
  makeReadNotificationController,
  makeUnreadNotificationController,
  makeSendNotificationController,
} from '../factory';

const route = Router();

route.get(
  '/from/:recipientId/count',
  ExpressAdapter.adapt(makeCountRecipientNotificationsController()),
);

route.get(
  '/from/:recipientId',
  ExpressAdapter.adapt(makeGetRecipientNotificationsController()),
);

route.post(
  '/send/:recipientId',
  ExpressAdapter.adapt(makeSendNotificationController()),
);

route.patch(
  '/:id/cancel',
  ExpressAdapter.adapt(makeCancelNotificationController()),
);

route.patch(
  '/:id/read',
  ExpressAdapter.adapt(makeReadNotificationController()),
);

route.patch(
  '/:id/unread',
  ExpressAdapter.adapt(makeUnreadNotificationController()),
);

export default route;
