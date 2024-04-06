import { EventBus, Notify } from 'quasar';
import { EventNamesEnum } from '../enums/events.enum';
import { PropertySubscriptionModel } from '../../models/PropertySubscription.model';
import {
  requestGetPhoneCodes,
  requestGetPropertyTypes,
  requestGetSubscriberUser,
  requestGetSubscription,
  requestPostPropertyType,
  requestPostSubscriber,
  requestPostSubscription,
} from '../requests/propertySubscription.request';
import { PropertyTypeModel } from 'src/models/PropertyType.model';
import { SubscriberModel } from 'src/models/Subscriber.model';
import {
  PropertySubscriptionRequest,
  TableRequestEventProps,
} from '../types/types';
import { requestApi } from '../requests/default.request';
import { UrlPathsEnum } from '../enums/urlPaths.enum';

export class PropertySubscriptionHandler {
  static async handlePostSubscription(
    eventSource: EventBus,
    {
      onSuccess,
      onError,
    }: { onSuccess?: () => void; onError?: (error?: unknown) => void } = {}
  ) {
    eventSource.on(
      EventNamesEnum.NEW_PROPERTY_SUBSCRIPTION,
      async (newPropertySubscription: PropertySubscriptionModel) => {
        try {
          newPropertySubscription.propertyUnit = Number(
            newPropertySubscription.propertyUnit
          );
          await requestPostSubscription(newPropertySubscription);

          onSuccess?.();

          Notify.create({
            message: 'New property subscription created.',
            color: 'positive',
            icon: 'check',
            timeout: 5000,
          });
        } catch (error) {
          onError?.();
          Notify.create({
            message: 'Failed to create new property subscription.',
            color: 'negative',
            icon: 'warning',
            timeout: 5000,
          });
        }
      }
    );
  }

  static async handlePaginateSubscription(
    eventBus: EventBus,
    {
      onSuccess,
      onError,
    }: {
      onSuccess: (serverResponse: PropertySubscriptionRequest) => void;
      onError: (error: unknown) => void;
    }
  ) {
    eventBus.on(
      EventNamesEnum.PAGINATE_SUBSCRIPTION_TABLE,
      async (props: TableRequestEventProps) => {
        try {
          const responseData = await requestApi(
            UrlPathsEnum.SUBSCRIPTION,
            'get',
            {
              params: props,
            }
          );

          onSuccess(responseData);
        } catch (error) {
          onError(error);
        }
      }
    );
  }

  static async getSubscriptionByPages(
    props: TableRequestEventProps,
    onError?: () => void
  ) {
    try {
      const responseData = await requestApi(UrlPathsEnum.SUBSCRIPTION, 'get', {
        params: {
          rowsPerPage: props.pagination.rowsPerPage,
          page: props.pagination.page,
          descending: props.pagination.descending,
          sortBy: props.pagination.sortBy,
          filter: props.filter,
        },
      });

      return responseData as PropertySubscriptionRequest;
    } catch (error) {
      onError?.();
    }
  }

  static async getSubscriptions(
    query: { rowsPerPage?: string; page?: string; streetId?: string } = {}
  ) {
    try {
      let rowsPerPage: string | undefined;
      let page: string | undefined;
      if (query) {
        rowsPerPage = query.rowsPerPage ? query.rowsPerPage : undefined;
        page = query.page ? query.page : undefined;
      }
      const subscriptions = (await requestGetSubscription({
        rowsPerPage,
        page,
        streetId: query.streetId,
      })) as PropertySubscriptionRequest;
      return subscriptions;
    } catch (error) {
      //
      Notify.create({
        message: 'Failed to fetch subscriptions',
      });
    }
  }

  static async getSubscriberUsers(query: { query?: string } = {}) {
    try {
      return await requestGetSubscriberUser(query);
    } catch (error) {
      Notify.create({
        message: 'Failed to fetch subscriber users.',
        color: 'negative',
        icon: 'warning',
        timeout: 5000,
      });
    }
  }

  static async handlePostPropertyType(
    eventSource: EventBus,
    {
      onSuccess,
      onError,
    }: { onSuccess?: () => void; onError?: (error: unknown) => void } = {}
  ) {
    //
    eventSource.on(
      EventNamesEnum.POST_PROPERTY_TYPE,
      async (newPropertyType: PropertyTypeModel) => {
        try {
          await requestPostPropertyType(newPropertyType);

          // handle success
          onSuccess?.();

          // notify user
          Notify.create({
            message: 'Process was successful',
            color: 'positive',
          });
        } catch (error) {
          // handle failure
          onError?.(error);

          // notify user
          Notify.create({
            message: 'Post Property Type failed',
            color: 'negative',
            icon: 'warning',
            timeout: 5000,
          });
        }
      }
    );
  }

  static async handlePostSubscriberUser(
    eventSource: EventBus,
    {
      onSuccess,
      onError,
    }: { onSuccess?: () => void; onError?: (error: unknown) => void } = {}
  ) {
    eventSource.on(
      EventNamesEnum.POST_SUBSCRIBER,
      async (newSubscriber: SubscriberModel) => {
        //
        try {
          newSubscriber.password = 'default-password';
          await requestPostSubscriber(newSubscriber);

          // handle success
          onSuccess?.();

          // notify user
          Notify.create({
            message: 'Process was successful',
            color: 'positive',
          });
        } catch (error) {
          // handle failure
          onError?.(error);
          // notify user
          Notify.create({
            message: 'Post Subscriber failed',
            color: 'negative',
            icon: 'warning',
            timeout: 5000,
          });
        }
      }
    );
  }

  static async getPropertyTypes(
    query: { name?: string; unitPrice?: number } = {}
  ) {
    try {
      const propertyTypes = await requestGetPropertyTypes(query);
      return propertyTypes;
    } catch (error) {
      // Notify
      Notify.create({
        message: 'Failed to fetch property types',
        color: 'negative',
        icon: 'warning',
        timeout: 5000,
      });
    }
  }

  static async getPhoneCodes(query: { query?: string; id?: string } = {}) {
    try {
      const phoneCode = await requestGetPhoneCodes(query);
      return phoneCode;
    } catch (error) {
      Notify.create({
        message: 'Failed to fetch phone codes',
        color: 'negative',
        icon: 'warning',
        timeout: 500,
      });
    }
  }
}
