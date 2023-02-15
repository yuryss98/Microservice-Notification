import CustomError from '../error/CustomError';
import NotificationsRepository from '../repositories/NotificationRepository';

interface ReadNotificationRequest {
  notificationId: number;
}

export default class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: ReadNotificationRequest) {
    const notification = await this.notificationsRepository.findById(
      request.notificationId,
    );

    if (!notification) {
      throw new CustomError('Not Found', 'Notification Not Found');
    }

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
