import { Notify } from 'quasar';

export function useNotify({
  type = 'postive',
  message,
}: {
  type?: 'postive' | 'negative' | 'warning' | 'info';
  message?: string;
} = {}) {
  Notify.create({
    message:
      message || type === 'negative'
        ? 'Process failed'
        : 'Process was successful',
    type,
    timeout: type === 'postive' ? 300 : 5000,
  });
}
