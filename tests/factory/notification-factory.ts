import Content from '../../src/domain/entities/Content';
import Notification from '../../src/domain/entities/Notification';

export default function makeNotification(recipientId: string, content?: string, category?: string) {
  return new Notification({
    recipientId,
    category: category ?? 'social',
    content: new Content(content || 'Você tem uma nova solicitação de amizade'),
  });
}
