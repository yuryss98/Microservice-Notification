import CustomError from '../error/CustomError';
import Content from './Content';

export default class Notification {
  private _recipientId: number;

  private _content: Content;

  private _category: string;

  private _readAt?: Date | null;

  private _canceledAt?: Date | null;

  private _createdAt: Date;

  private _id: number;

  constructor(content: Content, category: string, recipientId: number) {
    this._content = content;
    this._category = category;
    this._recipientId = recipientId;
    this._readAt = null;
    this._canceledAt = null;
    this._createdAt = new Date();
    this._id = 0;
    this.validateInputsValues();
  }

  validateInputsValues() {
    if (!this._category.length || !this._recipientId) {
      throw new CustomError('Bad Request', 'Missing category or recipientId fields');
    }
  }

  public cancel() {
    this._canceledAt = new Date();
  }

  public read() {
    this._readAt = new Date();
  }

  public unread() {
    this._readAt = null;
  }

  get recipientId() {
    return this._recipientId;
  }

  get id() {
    return this._id;
  }

  get readAt() {
    return this._readAt;
  }

  get canceledAt() {
    return this._canceledAt;
  }
}
