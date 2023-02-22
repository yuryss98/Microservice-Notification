import * as chai from 'chai';
import { GetRecipientNotifications } from '../../src/domain/use-cases';
import InMemoryNotificationsRepository from '../repository/InMemoryNotificationsRepository';
import makeNotification from '../factory/notification-factory';

const { expect } = chai;

describe('Get All notifications by recipient id', function () {
  const notificationRepository = new InMemoryNotificationsRepository();
  const getAllRecipientNotifications = new GetRecipientNotifications(notificationRepository);

  it('Should return all notifications from a recipient', async function () {
    const recipientId = '10';
    await notificationRepository.create(makeNotification(recipientId));
    await notificationRepository.create(
      makeNotification(recipientId, 'Você foi aceito no processo seletivo', 'profissional'),
    );

    const getNotificationsByRecipientId = await notificationRepository
      .findManyByRecipientId(recipientId);

    const notifications = await getAllRecipientNotifications.execute({ recipientId });

    expect(notifications).to.deep.equal(getNotificationsByRecipientId);
  });
});
