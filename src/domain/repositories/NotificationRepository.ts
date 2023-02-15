import Notification from '../entities/Notification';

export default abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: number): Promise<Notification | undefined>;
  abstract save(notification: Notification): Promise<void>;
}
