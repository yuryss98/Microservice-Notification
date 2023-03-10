import NotificationRepository from '../repositories/NotificationRepository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

export default class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(request: GetRecipientNotificationsRequest) {
    const notifications = await this.notificationsRepository.findManyByRecipientId(
      request.recipientId,
    );

    return notifications;
  }
}
