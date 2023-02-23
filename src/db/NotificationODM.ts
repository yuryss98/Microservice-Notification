import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import Notification from '../domain/entities/Notification';
import Content from '../domain/entities/Content';

export interface INotification {
  recipientId: string;

  content: Content;

  category: string;

  readAt: Date | null;

  canceledAt: Date | null;

  createdAt: Date;

  id: string;
}

export default class NotificationODM {
  protected model: Model<INotification>;

  private schema: Schema;

  constructor() {
    this.schema = new Schema<INotification>({
      recipientId: { type: String, required: true },
      content: { type: String, required: true },
      category: { type: String, required: true },
      readAt: { type: Date },
      canceledAt: { type: Date },
      createdAt: { type: Date },
    });

    this.model = models.Notification || model('Notification', this.schema);
  }

  async create(notification: Notification): Promise<string> {
    const notificationCreated = await this.model.create({
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
    });

    return notificationCreated.id;
  }

  async findById(notificationId: string): Promise<Notification | undefined> {
    const notification = await this.model.findOne({ _id: notificationId });

    if (!notification) return undefined;

    return new Notification(
      {
        category: notification.category,
        content: notification.content,
        recipientId: notification.recipientId,
        canceledAt: notification.canceledAt,
        readAt: notification.readAt,
      },
      notification.createdAt,
      notification.id,
    );
  }

  async save(notification: Notification): Promise<void> {
    await this.model.updateOne({ _id: notification.id }, {
      recipientId: notification.recipientId,
      content: notification.content,
      category: notification.category,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
    });
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.model.countDocuments({ recipientId });

    return count;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.model.find({ recipientId });

    return notifications.map((notification) => new Notification(
      {
        category: notification.category,
        content: notification.content,
        recipientId: notification.recipientId,
        canceledAt: notification.canceledAt,
        readAt: notification.readAt,
      },
      notification.createdAt,
      notification.id,
    ));
  }
}
