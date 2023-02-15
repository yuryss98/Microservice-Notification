import Notification from '../../src/domain/entities/Notification';
import NotificationRepository from '../../src/domain/repositories/NotificationRepository';

export default class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
