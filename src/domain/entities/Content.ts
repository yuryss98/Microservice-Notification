import CustomError from '../error/CustomError';

export default class Content {
  private readonly content: string;

  constructor(content: string) {
    this.content = content ?? '';
    this.validatecontentLength();
  }

  get value(): string {
    return this.content;
  }

  private validatecontentLength() {
    const isContentValid = this.content.length >= 5 && this.content.length <= 240;

    if (!isContentValid) {
      throw new CustomError('Length Required', 'Content length error');
    }
  }
}
