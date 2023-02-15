import NotificationRepository from '../repositories/NotificationRepository';

interface CountNotificationsRequest {
  recipientId: number;
}

export default class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(request: CountNotificationsRequest) {
    const count = await this.notificationsRepository.countManyByRecipientId(
      request.recipientId,
    );

    return count;
  }
}
