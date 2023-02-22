import * as chai from 'chai';
import { CountRecipientNotifications } from '../../src/domain/use-cases';
import InMemoryNotificationsRepository from '../repository/InMemoryNotificationsRepository';
import makeNotification from '../factory/notification-factory';

const { expect } = chai;

describe('Count notifications by recipient id', function () {
  const notificationRepository = new InMemoryNotificationsRepository();
  const countAllRecipientNotifications = new CountRecipientNotifications(notificationRepository);

  it('Should count the number of notifications from a recipient', async function () {
    const recipientId = '10';
    await notificationRepository.create(makeNotification({
      recipientId,
    }));
    await notificationRepository.create(makeNotification({
      recipientId,
    }));
    await notificationRepository.create(makeNotification({
      recipientId,
    }));

    const result = await countAllRecipientNotifications.execute({ recipientId });

    expect(result).to.equal(3);
  });
});
