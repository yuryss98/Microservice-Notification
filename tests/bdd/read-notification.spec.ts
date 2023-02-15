import * as chai from 'chai';
import { ReadNotification } from '../../src/domain/use-cases';
import InMemoryNotificationsRepository from '../repository/InMemoryNotificationsRepository';
import makeNotification from '../factory/notification-factory';
import CustomError from '../../src/domain/error/CustomError';

const { expect } = chai;

describe('Read notification', function () {
  const notificationRepository = new InMemoryNotificationsRepository();
  const readNotification = new ReadNotification(notificationRepository);

  it('Should be able to read notificaiton', async function () {
    const recipientId = 10;
    const newNotifiaction = makeNotification(recipientId);

    await notificationRepository.create(newNotifiaction);

    await readNotification.execute({ notificationId: newNotifiaction.id });

    expect(notificationRepository.notifications[0].readAt).to.instanceOf(Date);
  });

  it('Should throw an error when not finding a notification', async function () {
    const recipientId = 10;
    const newNotifiaction = makeNotification(recipientId);

    await notificationRepository.create(newNotifiaction);

    try {
      const invalidId = 9999;
      await readNotification.execute({ notificationId: invalidId });
    } catch (error) {
      expect((error as CustomError).name).to.equal('Not Found');
      expect((error as CustomError).message).to.equal('Notification Not Found');
    }
  });
});
