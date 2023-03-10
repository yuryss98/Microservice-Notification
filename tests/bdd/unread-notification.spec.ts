import * as chai from 'chai';
import { UnreadNotification } from '../../src/domain/use-cases';
import InMemoryNotificationsRepository from '../repository/InMemoryNotificationsRepository';
import makeNotification from '../factory/notification-factory';
import CustomError from '../../src/domain/error/CustomError';

const { expect } = chai;

describe('Unread notification', function () {
  const notificationRepository = new InMemoryNotificationsRepository();
  const unReadNotification = new UnreadNotification(notificationRepository);

  it('Should be able to mark notification as unread', async function () {
    const recipientId = '10';
    const notificationId = '20';
    const newNotifiaction = makeNotification({
      recipientId,
      id: notificationId,
    });

    await notificationRepository.create(newNotifiaction);

    await unReadNotification.execute({ notificationId: newNotifiaction.id });

    expect(notificationRepository.notifications[0].readAt).to.deep.equal(null);
    expect(notificationRepository.notifications[0].id).to.deep.equal(notificationId);
  });

  it('Should throw an error when not finding a notification', async function () {
    const recipientId = '10';
    const notificationId = '20';
    const newNotifiaction = makeNotification({
      recipientId,
      id: notificationId,
    });

    await notificationRepository.create(newNotifiaction);

    try {
      const invalidId = '21';
      expect(await unReadNotification.execute({ notificationId: invalidId })).to.throw(Error);
    } catch (error) {
      expect((error as CustomError).name).to.equal('NOT_FOUND');
      expect((error as CustomError).message).to.equal('Notification Not Found');
    }
  });
});
