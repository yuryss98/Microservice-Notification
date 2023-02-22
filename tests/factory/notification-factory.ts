import Content from '../../src/domain/entities/Content';
import Notification from '../../src/domain/entities/Notification';

interface NotificationProps {
  recipientId: string,
  content?: Content,
  category?: string,
  createdAt?: Date,
  id?: string,
}

export default function makeNotification(props: NotificationProps) {
  return new Notification(
    {
      recipientId: props.recipientId,
      category: props.category ?? 'social',
      content: props.content ?? new Content('Você tem uma nova solicitação de amizade'),
    },
    props.createdAt,
    props.id,
  );
}
