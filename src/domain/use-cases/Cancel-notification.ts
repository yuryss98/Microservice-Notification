import CustomError from '../error/CustomError';
import NotificationsRepository from '../repositories/NotificationRepository';

interface CancelNotificationRequest {
  notificationId: number;
}

export default class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: CancelNotificationRequest) {
    const notification = await this.notificationsRepository.findById(request.notificationId);

    if (!notification) {
      throw new CustomError('Not Found', 'Notification Not Found');
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
