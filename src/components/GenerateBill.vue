<template>
  <!-- <dialog-card> -->
  <!-- title Area -->
  <q-card-section class="row justify-between">
    <div>
      <title-badge header-text-size="h5">{{ printGenerateTitle }}</title-badge>
    </div>
    <div>
      <span>Print Bill</span
      ><q-toggle
        toggle-order="tf"
        truth-value="generate"
        false-value="print"
        v-model="printGeneratToggle"
        keep-color
      ></q-toggle
      ><span>Generate Bill</span>
    </div>
  </q-card-section>
  <!-- form area -->
  <q-card-section>
    <form class="q-pa-md" :style="{ height: '100%' }" @submit.prevent="">
      <div class="row justify-between q-my-lg">
        <!-- left side -->
        <div class="q-gutter-xl">
          <q-select
            label="Street"
            v-model="generateBillModel.streetId"
            filled
            outlined
            color="secondary"
            label-color="dark"
          >
          </q-select>
          <q-input
            label="Property Name"
            type="text"
            v-model="generateBillModel.propertyName"
            filled
            outlined
            color="secondary"
            label-color="dark"
          ></q-input>
        </div>
        <!-- right side -->
        <div class="q-gutter-xl">
          <q-input
            v-model="generateBillModel.propertySuscriptionId"
            label="Property Subscription Id"
            type="text"
            filled
            outlined
            color="secondary"
            label-color="dark"
          />
          <q-input
            v-model="generateBillModel.month"
            label="Month"
            type="text"
            filled
            outlined
            color="secondary"
            label-color="dark"
          />
          <q-input
            v-model="generateBillModel.year"
            label="Year"
            type="text"
            filled
            outlined
            color="secondary"
            label-color="dark"
          />
        </div>
      </div>
      <div class="row justify-between q-mt-md" :style="{ height: '7rem' }">
        <div class="column">
          <q-checkbox
            :label="`${printGenerateToggleCapitalize} for properties on street.`"
            v-model="printGenerateForPropertiesOnStreet"
          /><q-checkbox
            :label="`${printGenerateToggleCapitalize} all bills.`"
            v-model="printGenerateAllBills"
          />
        </div>
        <div class="column justify-end" :style="{ height: '100%' }">
          <q-btn rounded color="primary" @click="submit">Submit</q-btn>
        </div>
      </div>
    </form>
  </q-card-section>
  <!-- </dialog-card> -->
</template>
<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue';
import TitleBadge from './TitleBadge.vue';
import { BillingModel } from 'src/models/GenerateBill.model';
import { reactive } from 'vue';

defineComponent({
  name: 'generate-bill',
});

// refs
const printGeneratToggle = ref<'generate' | 'print'>('generate');
const printGenerateForPropertiesOnStreet = ref<boolean>(false);
const printGenerateAllBills = ref<boolean>(false);

// computed
const printGenerateTitle = computed(() =>
  printGeneratToggle.value === 'print' ? 'Print Bill' : 'Generate Bill'
);

const printGenerateToggleCapitalize = computed(() => {
  return (
    printGeneratToggle.value.charAt(0).toUpperCase() +
    printGeneratToggle.value.slice(1)
  );
});

// model
const generateBillModel = reactive(new BillingModel());

// methods
function submit() {
  console.log('Submitted');
}
</script>
