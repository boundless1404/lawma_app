<template>
  <!-- <dialog-card> -->
  <!-- title Area -->
  <q-card-section class="row justify-between">
    <div :style="{ color: `${$getColor('primary')}` }">
      <title-badge header-text-size="h5">{{ printGenerateTitle }}</title-badge>
    </div>
    <div>
      <span :class="[printGeneratToggle === 'print' ? 'text-primary' : '']"
        >Print Bill</span
      ><q-toggle
        :toggle-indeterminate="false"
        toggle-order="tf"
        true-value="generate"
        false-value="print"
        v-model="printGeneratToggle"
        keep-color
      /><span :class="[printGeneratToggle !== 'print' ? 'text-primary' : '']"
        >Generate Bill</span
      >
    </div>
  </q-card-section>
  <!-- form area -->
  <q-card-section>
    <form
      class="q-pa-md"
      :style="{ height: '100%' }"
      @submit.prevent=""
      ref="billingModelForm"
    >
      <div class="row justify-between q-my-lg">
        <!-- left side -->
        <div class="q-gutter-xl" :style="{ width: '40%' }">
          <q-select
            label="Street"
            v-model="billingModel.streetId"
            filled
            outlined
            color="secondary"
            label-color="dark"
            :options="streetOptionsFiltered"
            emit-value
            map-options
            use-input
            @filter="filterStreets"
            clearable
          />
          <q-select
            v-model="billingModel.month"
            label="Month"
            type="text"
            filled
            outlined
            color="secondary"
            label-color="dark"
            :options="currentBillingMonthsOptions"
          />
        </div>
        <!-- right side -->
        <div class="q-gutter-xl" :style="{ width: '50%' }">
          <q-select
            v-model="billingModel.propertySuscriptionId"
            label="Property Subscription Id"
            type="text"
            filled
            outlined
            color="secondary"
            label-color="dark"
            :options="propertySubscriptionOptionsFiltered"
            emit-value
            map-options
            use-input
            @filter="filterProperties"
            clearable
          />
          <q-select
            v-model="billingModel.year"
            label="Year"
            type="text"
            filled
            outlined
            :options="yearsOptions"
            color="secondary"
            label-color="dark"
            emit-value
            map-options
          />
        </div>
      </div>
      <div class="row justify-between q-mt-md" :style="{ height: '7rem' }">
        <div class="column">
          <q-checkbox
            :label="`${printGenerateToggleCapitalize} for properties on street.`"
            v-model="billingModel.forPropertiesOnStreet"
            :disable="billingModel.forAllProperties"
          /><q-checkbox
            :label="`${printGenerateToggleCapitalize} all bills.`"
            v-model="billingModel.forAllProperties"
          />
        </div>
        <div class="column justify-end" :style="{ height: '100%' }">
          <q-btn rounded color="primary" @click="submit">{{
            printGeneratToggle === 'print' ? 'Print' : 'Generate'
          }}</q-btn>
        </div>
      </div>
    </form>
  </q-card-section>
  <!-- </dialog-card> -->
</template>
<script setup lang="ts">
import { computed, defineComponent, onBeforeUnmount, ref } from 'vue';
import TitleBadge from './TitleBadge.vue';
import { BillingModel } from 'src/models/GenerateBill.model';
import { reactive } from 'vue';
import { loadingTimeout, months, years } from 'src/lib/projectConstants';
import { onMounted } from 'vue';
import useLgaWardStreetStore from 'src/stores/lga-ward-street';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { PropertySubscriptionHandler } from 'src/lib/eventHandlers/PropertySubscription.handler';
import { PropertySubscription } from 'src/lib/types/types';
import { BillingHandler } from 'src/lib/eventHandlers/Billing.handler';
import { inject } from 'vue';
import { EventBus, QForm, useQuasar } from 'quasar';
import { EventNamesEnum } from 'src/lib/enums/events.enum';
import { clearUIEffects } from 'src/lib/utils';
import { BillingAccountHandler } from 'src/lib/eventHandlers/BillingAccount.handler';
import { useRouter } from 'vue-router';

defineComponent({
  name: 'generate-bill',
});

// store
const LgaWardStreetStore = useLgaWardStreetStore();

// const
const monthNow = months[new Date().getMonth() + 1];
const eventBus = inject('eventBus') as EventBus;
const $q = useQuasar();
const $router = useRouter();

// variables
let timer: NodeJS.Timeout;

// handlers
BillingHandler.handGenerateBilling(eventBus, { onSuccess, onError });

// refs
const printGeneratToggle = ref<'generate' | 'print'>('generate');
const { streets } = storeToRefs(LgaWardStreetStore);
const propertySubscriptions = ref<PropertySubscription[]>();
const billingModelForm = ref<QForm>();
const propertySubscriptionId = ref('')

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

const printGenerateTitle = computed(() =>
  printGeneratToggle.value === 'print' ? 'Print Bill' : 'Generate Bill'
);

const yearsOptions = computed(() => years);

const currentBillingMonthsOptions = computed(() => {
  return Object.values(months).map((value) => value);
});

const printGenerateToggleCapitalize = computed(() =>
  printGeneratToggle.value === 'print' ? 'Print' : 'Generate'
);

const propertySubscriptionOptions = computed(() => {
  return propertySubscriptions.value?.map((sub) => ({
    label: sub.propertySubscriptionName,
    value: sub.propertySubscriptionId,
  }));
});

const propertySubscriptionOptionsFiltered = ref(propertySubscriptionOptions.value);

function filterProperties(val: string, update: (callback: () => void) => void) {
  if (val === '') {
    update(() => {
      propertySubscriptionOptionsFiltered.value = propertySubscriptionOptions.value;
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    propertySubscriptionOptionsFiltered.value = propertySubscriptionOptions.value?.filter(
      v => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
}

const datestring = computed(() => {
  return billingModel.month + ' ' + billingModel.year
})

// model
const billingModel = reactive(new BillingModel());

// methods
async function submit() {
  //
  $q.loading.show({ message: 'Please, wait ...' });
  if (billingModel.type === 'print') {
    // fetch billing details
    await BillingAccountHandler.getBillingsForPrinting(
      billingModel.streetId,
      billingModel.month,
      billingModel.propertySuscriptionId,
    );

    // add datestring path var
    $router.push(`/print/${datestring.value}`);
    return;
  } else {
    eventBus.emit(EventNamesEnum.GENERATE_BILLING, billingModel);
  }
  timer = setTimeout(() => {
    $q.loading.show();
  }, loadingTimeout);
}

function onSuccess() {
  //
  billingModel.clearValues();
  clearUIEffects({ loader: $q.loading, timer });
}

function onError() {
  //
  clearUIEffects({ loader: $q.loading, timer });
}

// watcher
watch(printGeneratToggle, (newValue) => {
  if (newValue) {
    billingModel.type = newValue;
  }
});

watch(
  () => billingModel.forAllProperties,
  (newVa) => {
    if (newVa) {
      billingModel.forPropertiesOnStreet = false;
    }
  }
);

watch(
  () => billingModel.streetId,
  async (newVal) => {
    console.log('this is the new val from watch on streetId', newVal);
    if (newVal) {
      billingModel.propertySuscriptionId = '';
      // re-fetch property-subscriptions
      const requestData = await PropertySubscriptionHandler.getSubscriptions({
        streetId: newVal,
      });
      propertySubscriptions.value = requestData?.data;
    }
  }
);

// life cycle hooks
onMounted(() => {
  billingModel.month = monthNow;
  billingModel.year = String(new Date().getFullYear());
  billingModel.type = printGeneratToggle.value;
});

onMounted(async () => {
  streets?.value ||
    (await LgaWardStreetStore.fetchServerData({ type: 'street' }));
});

onMounted(async () => {
  const requestData = await PropertySubscriptionHandler.getSubscriptions();
  propertySubscriptions.value = requestData?.data;
});

onBeforeUnmount(() => {
  clearUIEffects({ loader: $q.loading, timer });
});
</script>
