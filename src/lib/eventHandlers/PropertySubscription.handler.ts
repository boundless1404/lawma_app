import { EventBus } from 'quasar';
import { EventNamesEnum } from '../enums/events.enum';
import { NewPropertySubscriptionModel } from '../models/NewPropertySubscription.mode';

export class PropertySubscriptionHandler {
  static async postSubscription(eventSource: EventBus) {
    eventSource.on(
      EventNamesEnum.NEW_PROPERTY_SUBSCRIPTION,
      async (newPropertySubscription: NewPropertySubscriptionModel) => {
        // TODO: handle newPropertySubscription post
        console.log('handled new subscription post: ', newPropertySubscription);
      }
    );
  }
}
