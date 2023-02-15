import Notification from '../../src/domain/entities/Notification';
import NotificationRepository from '../../src/domain/repositories/NotificationRepository';

export default class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findById(notificationId: number) {
    const notificaiton = this.notifications.find(({ id }) => id === notificationId);

    return notificaiton;
  }

  async save(notification: Notification) {
    const notificationIndex = this.notifications.findIndex(({ id }) => id === notification.id);

    this.notifications[notificationIndex] = notification;
  }
}
