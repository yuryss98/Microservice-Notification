import * as chai from 'chai';
import { CancelNotification } from '../../src/domain/use-cases';
import InMemoryNotificationsRepository from '../repository/InMemoryNotificationsRepository';
import makeNotification from '../factory/notification-factory';
import CustomError from '../../src/domain/error/CustomError';

const { expect } = chai;

describe('Cancel notification', function () {
  const notificationRepository = new InMemoryNotificationsRepository();
  const cancelNotification = new CancelNotification(notificationRepository);

  it('Should be able to cancel notificaiton', async function () {
    const recipientId = '10';
    const newNotifiaction = makeNotification(recipientId);

    await notificationRepository.create(newNotifiaction);

    await cancelNotification.execute({ notificationId: newNotifiaction.id });

    expect(notificationRepository.notifications[0].canceledAt).to.instanceOf(Date);
  });

  it('Should throw an error when not finding a notification', async function () {
    const recipientId = '10';
    const newNotifiaction = makeNotification(recipientId);

    await notificationRepository.create(newNotifiaction);

    try {
      const invalidId = '9999';
      await cancelNotification.execute({ notificationId: invalidId });
    } catch (error) {
      expect((error as CustomError).name).to.equal('NOT_FOUND');
      expect((error as CustomError).message).to.equal('Notification Not Found');
    }
  });
});
