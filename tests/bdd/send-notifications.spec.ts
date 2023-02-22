import * as chai from 'chai';
import CustomError from '../../src/domain/error/CustomError';
import { SendNotification } from '../../src/domain/use-cases';
import InMemoryNotificationsRepository from '../repository/InMemoryNotificationsRepository';

const { expect } = chai;

describe('Send notification', function () {
  it('Should be able to send notificaiton', async function () {
    const notificationRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationRepository);

    const notification = await sendNotification.execute({
      recipientId: '10',
      category: 'social',
      content: 'This is a notification',
    });

    expect(notificationRepository.notifications).to.have.length(1);
    expect(notificationRepository.notifications[0]).to.deep.equal(notification);
  });

  it('Should return an error when the content size is wrong', async function () {
    const notificationRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationRepository);

    try {
      expect(await sendNotification.execute({
        recipientId: '10',
        category: 'social',
        content: 'erro',
      })).to.throw(Error);
    } catch (error) {
      expect((error as CustomError).name).to.equal('LENGTH_REQUIRED');
      expect((error as CustomError).message).to.equal('Content length error');
    }
  });

  it('Should return an error when not informing all fields', async function () {
    const notificationRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationRepository);

    try {
      expect(await sendNotification.execute({
        recipientId: '10',
        category: '',
        content: 'This is a notification',
      })).to.throw(Error);
    } catch (error) {
      expect((error as CustomError).name).to.equal('Bad Request');
      expect((error as CustomError).message).to.equal('Missing category or recipientId fields');
    }
  });
});
