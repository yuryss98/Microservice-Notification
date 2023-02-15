import Notification from '../entities/Notification';

export default abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
