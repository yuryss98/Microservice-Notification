import CustomError from '../error/CustomError';
import Content from './Content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
}

export default class Notification {
  private props: NotificationProps;

  private _createdAt: Date;

  private _id: string;

  constructor(
    props: NotificationProps,
    createdAt?: Date,
    id?: string,
  ) {
    this._id = id ?? '';
    this._createdAt = createdAt ?? new Date();
    this.props = {
      ...props,
      readAt: props.readAt ?? null,
      canceledAt: props.canceledAt ?? null,
    };
    this.validateInputsValues();
  }

  validateInputsValues() {
    if (!this.props.category.length || !this.props.recipientId) {
      throw new CustomError('BAD_REQUEST', 'Missing category or recipientId fields');
    }
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  get recipientId() {
    return this.props.recipientId;
  }

  get category() {
    return this.props.category;
  }

  get id() {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get readAt() {
    return this.props.readAt;
  }

  get canceledAt() {
    return this.props.canceledAt;
  }

  get content() {
    return this.props.content;
  }

  get createdAt() {
    return this._createdAt;
  }
}
