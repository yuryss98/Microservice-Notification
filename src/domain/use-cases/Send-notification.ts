import Content from '../entities/Content';
import Notification from '../entities/Notification';
import NotificationsRepository from '../repositories/NotificationRepository';

interface SendNotificationRequest {
  recipientId: number;
  content: string;
  category: string;
}

export default class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: SendNotificationRequest) {
    const content = new Content(request.content);
    const notification = new Notification(content, request.category, request.recipientId);

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
