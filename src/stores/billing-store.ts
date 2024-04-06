import { forageGetItem } from 'src/boot/storeforage';
import { StorageNamesEnum } from '.';
import { defineStore } from 'pinia';
import { BillingDetail } from 'src/lib/types/types';

export type BillingStore = {
  billingDetails?: BillingDetail[];
};

const billingStore =
  (await forageGetItem<BillingStore>(StorageNamesEnum.LGA_WARD_STREET)) || {};

const useBillingStore = defineStore('billingStore', {
  state: (): { billingDetails?: BillingDetail[] } => {
    return {
      billingDetails: billingStore.billingDetails,
    };
  },
  getters: {
    //
  },
  actions: {
    //
    async updateBilling({
      type,
      data,
    }: {
      type: 'billingDetail' | 'defaulters';
      data: unknown;
    }) {
      const actionHandlers: { [handlerType: string]: () => void } = {
        billingDetail: () => {
          this.billingDetails = data as BillingDetail[];
        },
      };

      actionHandlers[type]?.();
    },
  },
});

export default useBillingStore;
