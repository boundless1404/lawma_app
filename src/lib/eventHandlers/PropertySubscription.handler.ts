import { EventBus } from 'quasar';
import { EventNamesEnum } from '../enums/events.enum';
import { PropertySubscriptionModel } from '../../models/PropertySubscription.model';

export class PropertySubscriptionHandler {
  static async postSubscription(eventSource: EventBus) {
    eventSource.on(
      EventNamesEnum.NEW_PROPERTY_SUBSCRIPTION,
      async (newPropertySubscription: PropertySubscriptionModel) => {
        // TODO: handle newPropertySubscription post
        console.log('handled new subscription post: ', newPropertySubscription);
      }
    );
  }
}
