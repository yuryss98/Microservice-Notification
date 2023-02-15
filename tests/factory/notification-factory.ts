import Content from '../../src/domain/entities/Content';
import Notification from '../../src/domain/entities/Notification';

export default function makeNotification(recipientId: number, content?: string, category?: string) {
  const newContent = new Content(content || 'Você tem uma nova solicitação de amizade');
  return new Notification(newContent, category || 'social', recipientId);
}
