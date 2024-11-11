import { Notify } from 'quasar';
import { NotifierTypes } from 'src/lib/types/types';

export function useNotify({
  type = 'positive',
  message,
}: {
  type?: NotifierTypes,
  message?: string;
} = {}) {
  Notify.create({
    message:
      type === 'negative'
        ? 'Process failed'
        : message || 'Process was successful',
    type,
    timeout: type === 'positive' ? 300 : 5000,
  });
}
