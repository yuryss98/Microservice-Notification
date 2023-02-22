import CustomError from '../error/CustomError';
import NotificationsRepository from '../repositories/NotificationRepository';

interface ReadNotificationRequest {
  notificationId: string;
}

export default class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: ReadNotificationRequest) {
    const notification = await this.notificationsRepository.findById(
      request.notificationId,
    );

    if (!notification) {
      throw new CustomError('NOT_FOUND', 'Notification Not Found');
    }

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
