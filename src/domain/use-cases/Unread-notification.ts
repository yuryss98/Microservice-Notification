import CustomError from '../error/CustomError';
import NotificationRepository from '../repositories/NotificationRepository';

interface UnreadNotificationRequest {
  notificationId: number;
}

export default class UnreadNotification {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(request: UnreadNotificationRequest) {
    const notification = await this.notificationsRepository.findById(
      request.notificationId,
    );

    if (!notification) {
      throw new CustomError('Not Found', 'Notification Not Found');
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
