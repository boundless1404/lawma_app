<template>
  <q-page :style-fn="pageStyleFunc">
    <div :style="{
      backgroundColor: `${$getColor('light-page')}`,
      padding: '10rem 1rem 0 1rem',
      height: '100vh',
      width: '100%',
    }">
      <!-- Payment History -->
      <div>
        <h5>{{ paymentTableTitle }}</h5>
      </div>
      <!-- Month Selection Component -->
      <!-- Button  -->
      <div class="q-my-lg flex row justify-between">
        <q-select v-model="paymentMonth" label="Month" filled outlined label-color="dark"
          :options="paymentMonthsOptions" clearable map-options emit-value></q-select>
        <q-btn label="Post Payment" color="primary" rounded @click="showPaymentFormDialog = true" />
      </div>
      <!-- Table -->
      <div>
        <q-card rounded class="bg-accent"
          :style="{ maxHeight: '50vh', paddingBottom: '3rem', overflowY: 'scroll', marginBottom: '3rem' }">
          <q-card-section>
            <q-table ref="paymentTableRef" :rows="paymentTableRows" bordered :columns="paymentColumns"
              :table-header-style="{
                backgroundColor: `${$getColor('secondary')}`,
              }">
              <template v-slot:top-right>
                <div class="flex row" style="gap: 0.5rem;">
                  <div class="q-mb-lg" style="width: 18rem;">
                    <q-select label="Street" v-model="tableStreetId" dense outlined color="secondary" label-color="dark"
                      clearable :options="streetOptionsFiltered" emit-value map-options use-input
                      @filter="filterStreets">
                      <template v-slot:selected-item="scope">
                        <div class="ellipsis" style="max-width: 14rem">
                          {{ addElipsis(scope.opt.label, 20)  }}
                        </div>
                      </template>
                    </q-select>
                  </div>
                  <div style="width: 18rem;">
                    <q-select v-model="tablePropertySubscriptionId" label="Property Name" label-color="dark" dense
                      outlined color="secondary" clearable :options="propertyOptionsFiltered" map-options emit-value
                      use-input @filter="filterProperties">
                      <template v-slot:selected-item="scope">
                        <div class="ellipsis" style="max-width: 14rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          {{ addElipsis(scope.opt.label, 20) }}
                        </div>
                      </template>
                    </q-select>
                  </div>
                  <div><q-btn style="height: 2.4rem;" icon="search" @click="getPayments" /></div>
                  <div><q-btn style="height: 2.4rem;" :icon="isOnFullScreen ? 'fullscreen_exit' : 'fullscreen' " @click="togglePaymentTableToFullscreen"  /></div>
                </div>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>

      <q-dialog v-model="showPaymentFormDialog" style="min-width: 20rem">
        <dialog-card height="auto">
          <q-card-section class="text-center">
            <title-badge>Post Payment</title-badge>
          </q-card-section>
          <q-card-section class="q-px-lg flex column justify-between">
            <q-form ref="paymentFormRef" @submit.prevent="">
              <div class="flext row justify-between">
                <div class="flex column justify-around" style="width: 40%">
                  <div class="q-mb-lg">
                    <q-select label="Street" v-model="paymentModel.streetId" filled outlined color="secondary"
                      label-color="dark" clearable :options="streetOptionsFiltered" emit-value use-input
                      @filter="filterStreets" map-options />
                  </div>
                  <div>
                    <q-select v-model="paymentModel.propertySubscriptionId" label="Property Name" label-color="dark"
                      filled outlined color="secondary" clearable :rules="[
                        () =>
                          $validateField(
                            paymentModel,
                            'propertySubscriptionId'
                          ),
                      ]" :options="propertyOptionsFiltered" map-options emit-value use-input
                      @filter="filterProperties"></q-select>
                  </div>
                  <div>
                    <q-input v-model="paymentModel.payerName" label="Payer Name" label-color="dark" filled outlined
                      color="secondary" clearable :rules="[() => $validateField(paymentModel, 'payerName')]" />
                  </div>
                </div>
                <div class="flex column justify-between" style="width: 40%">
                  <div class="q-mb-lg">
                    <q-input filled v-model="paymentModel.paymentDate" mask="date" label="Payment Date"
                      label-color="dark" outlined :rules="[
                        () => $validateField(paymentModel, 'paymentDate'),
                      ]">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="paymentModel.paymentDate" title="Select Date" today-btn mask="YYYY-MM-DD">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                  <div>
                    <q-input v-model="paymentModel.amount" label="Amount" outlined filled label-color="dark"
                      color="secondary" :rules="[() => $validateField(paymentModel, 'amount')]" />
                  </div>
                </div>
              </div>
              <div class="flex row justify-center q-mt-lg">
                <q-btn :style="{
                  width: '40%',
                }" label="Submit" color="primary" rounded @click="onSubmit" />
              </div>
            </q-form>
          </q-card-section>
        </dialog-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { EventBus, QForm, QTable, QTableColumn, useQuasar } from 'quasar';
import { months } from 'src/lib/projectConstants';
import { computed, inject, reactive, ref, watch } from 'vue';
import DialogCard from '../components/DialogCard.vue';
import TitleBadge from '../components/TitleBadge.vue';
import { PaymentModel } from '../models/Payment.model';
import { asyncComputed } from '@vueuse/core';
import { PaymentRecord, PropertySubscription } from 'src/lib/types/types';
import { onMounted } from 'vue';
import { PropertySubscriptionHandler } from 'src/lib/eventHandlers/PropertySubscription.handler';
import { EventNamesEnum } from 'src/lib/enums/events.enum';
import { clearUIEffects, isModelValid } from 'src/lib/utils';
import { PaymentHandler } from 'src/lib/eventHandlers/paymentHandler.handler';
import { onBeforeUnmount } from 'vue';
import useLgaWardStreetStore from 'src/stores/lga-ward-street';
import { storeToRefs } from 'pinia';

// consts
const monthNow = months[new Date().getMonth() + 1];
const eventBus = inject('eventBus') as EventBus;
const $q = useQuasar();

const LgaWardStreetStore = useLgaWardStreetStore();

// variables
let timer: NodeJS.Timeout;

// props
const paymentColumns: QTableColumn[] = [
  {
    name: 'payerName',
    required: true,
    label: 'Payer Name',
    align: 'left',
    field: 'payerName',
  },
  {
    name: 'paymentDate',
    required: true,
    label: 'PaymentDate',
    align: 'left',
    field: 'paymentDate',
  },
  {
    name: 'propertySubscriptionName',
    required: true,
    label: 'Property Subscription Name',
    align: 'left',
    field: 'propertySubscriptionName',
  },
  {
    name: 'amount',
    required: true,
    label: 'Amount',
    align: 'left',
    field: 'amount',
  },
];

const paymentModel = reactive(new PaymentModel());

//#region refs
const paymentMonth = ref(monthNow);
const paymentTableTitle = ref('Payment History');
const showPaymentFormDialog = ref(false);
const propertySubscriptions = ref<PropertySubscription[]>();
const paymentFormRef = ref<QForm>();
const payments = ref<PaymentRecord[]>([]);
const { streets } = storeToRefs(LgaWardStreetStore);
const filter = ref('');
const tableStreetId = ref('');
const tablePropertySubscriptionId = ref('');
const paymentTableRef = ref<QTable>();
const isOnFullScreen = ref(false);

//#endregion


PaymentHandler.handlePostPayment(eventBus, {
  onSuccess: onPaymentPostSuccess,
  onError: onPaymentPostError,
});

//#region computed
// computed
const streetOptions = computed(() => {
  return streets?.value?.map((street) => {
    return {
      label: street.name,
      value: street.id,
    };
  });
});

const streetOptionsFiltered = ref(streetOptions.value);

const paymentTableRows = computed(() => {
  return payments.value;
});

const propertySubscriptionOptions = computed(() => {
  return propertySubscriptions.value?.map((value) => {
    return {
      label: value.propertySubscriptionName,
      value: value.propertySubscriptionId,
    };
  });
});


const propertyOptionsFiltered = ref(propertySubscriptionOptions.value);

const paymentMonthsOptions = computed(() => {
  return Object.values(months).map((value) => value);
});

asyncComputed(async () => {
  await paymentModel.validate();
});
//#endregion

//#region methods
function togglePaymentTableToFullscreen() {
  paymentTableRef.value?.toggleFullscreen();
  isOnFullScreen.value = !isOnFullScreen.value;
}

function addElipsis(str: string, maxLength: number) {
  if (str?.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  }
  return str;
}
function filterStreets(val: string, update: (callback: () => void) => void) {
  if (val === '') {
    update(() => {
      streetOptionsFiltered.value = streetOptions.value;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    streetOptionsFiltered.value = streetOptions.value?.filter(
      v => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
}

function filterProperties(val: string, update: (callback: () => void) => void) {
  if (val === '') {
    update(() => {
      propertyOptionsFiltered.value = propertySubscriptionOptions.value;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    propertyOptionsFiltered.value = propertySubscriptionOptions.value?.filter(
      v => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
}

async function getPayments() {
  if (tablePropertySubscriptionId.value) {
    payments.value = await PaymentHandler.getPayments({
      month: paymentMonth.value,
      propertySubscriptionId: tablePropertySubscriptionId.value,
    });
  }
}
async function onSubmit() {
  //
  await paymentModel.validate();
  await paymentFormRef.value?.validate();
  if (!isModelValid(paymentModel)) {
    return;
  }

  $q.loading.show({
    message: 'Please, wait ...',
  });

  const date = new Date(paymentModel.paymentDate);
  paymentModel.paymentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()).toISOString();
  eventBus.emit(EventNamesEnum.POST_PAYMENT, paymentModel);
}

function onPaymentPostSuccess() {
  clearUIEffects({ loader: $q.loading, timer: timer });
}

function onPaymentPostError() {
  clearUIEffects({ loader: $q.loading, timer: timer });
}
function pageStyleFunc(offset: number) {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration

  // this is actually what the default style-fn does in Quasar
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
    paddingBottom: '2rem',
    margin: '-40px 0',
    overflowY: 'scroll',

  };
}
//#endregion

//#region  watchers
// watch(tablePropertySubscriptionId, async (newVal) => {
// if (newVal) {
//   payments.value = await PaymentHandler.getPayments({
//     month: paymentMonth.value,
//     propertySubscriptionId: newVal,
//   });
// }
// });

watch(paymentMonth, async (newValue) => {
  paymentTableTitle.value = `Payment History (${newValue})`;
  payments.value = await PaymentHandler.getPayments({
    month: newValue,
    ...(tablePropertySubscriptionId.value ? { propertySubscriptionId: tablePropertySubscriptionId.value } : {})
  });
});

watch(
  [() => paymentModel.streetId, tableStreetId],
  async (newVal) => {
    if ([newVal[0], newVal[1]].some(Boolean)) {
      // paymentModel.propertySuscriptionId = '';
      // re-fetch property-subscriptions
      const requestData = await PropertySubscriptionHandler.getSubscriptions({
        streetId: newVal[0] || newVal[1],
      });
      propertySubscriptions.value = requestData?.data;
    }
  }
);

//#endregion

//#region  life cycle hooks
onMounted(async () => {
  const requestData = await PropertySubscriptionHandler.getSubscriptions();
  propertySubscriptions.value = requestData?.data;
});

onMounted(async () => {
  streets?.value ||
    (await LgaWardStreetStore.fetchServerData({ type: 'street' }));
});

onMounted(async () => {
  payments.value = await PaymentHandler.getPayments({
    month: paymentMonth.value,
  });
});

onMounted(() => {
  paymentTableTitle.value = `Payment History (${paymentMonth.value})`;
  paymentModel.paymentDate = new Date().toISOString();
});

onBeforeUnmount(() => {
  eventBus.off(EventNamesEnum.POST_PAYMENT);
});
//#endregion
</script>
