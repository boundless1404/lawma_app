<template>
  <!-- title -->
  <q-card-section class="q-px-md">
    <div class="row justify-between q-py-sm">
      <title-badge> Add Subscriber </title-badge>
      <div><modal-popup-close /></div>
    </div>
  </q-card-section>
  <!-- form -->
  <q-card-section class="q-px-md">
    <form @submit.prevent>
      <div class="row justify-between">
        <!-- left side -->
        <div class="q-gutter-xl">
          <!-- first name -->
          <q-input
            label="First Name"
            filled
            outlined
            v-model="subscriberModel.firstName"
            lazy-rules
            :rules="[() => $validateField(subscriberModel, 'firstName')]"
            ref="inputRef"
          />
          <!-- email -->
          <q-input
            label="Email"
            filled
            outlined
            v-model="subscriberModel.email"
            lazy-rules
            :rules="[() => $validateField(subscriberModel, 'email')]"
          />
          <!-- old code -->
          <q-input
            label="Old Code"
            filled
            outlined
            v-model="subscriberModel.oldCode"
            lazy-rules
            :rules="[() => $validateField(subscriberModel, 'oldCode')]"
          />
        </div>
        <!-- right side -->
        <div class="q-gutter-xl">
          <!-- last name -->
          <q-input
            label="Last Name"
            filled
            outlined
            v-model="subscriberModel.lastName"
            lazy-rules
            :rules="[() => $validateField(subscriberModel, 'lastName')]"
          />
          <!-- phone -->
          <div class="flex row">
            <q-select
              label="Country Phone Code"
              filled
              outlined
              v-model="subscriberModel.phoneCodeId"
              :style="{
                zIndex: $getHighestZIndex(),
              }"
            >
            </q-select>
            <q-input
              label="Phone"
              filled
              outlined
              v-model="subscriberModel.phone"
              lazy-rules
              :rules="[() => $validateField(subscriberModel, 'phone')]"
            />
          </div>
        </div>
      </div>
      <div class="flex row justify-center">
        <q-btn
          :style="{ width: '40%' }"
          label="Submit"
          rounded
          color="primary"
          type="submit"
          @click="addSubscriber"
        />
      </div>
    </form>
  </q-card-section>
</template>
<script setup lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import TitleBadge from './TitleBadge.vue';
import { SubscriberModel } from 'src/models/Subscriber.model';
import { asyncComputed } from '@vueuse/core';
import ModalPopupClose from '../components/ModalPopupClose.vue';
import { onMounted } from 'vue';
import { QInput } from 'quasar';

defineComponent({
  name: 'add-subscriber',
});

// refs
const formRef = ref<HTMLFormElement>();
const inputRef = ref<QInput>();
formRef.value?.focus();
inputRef.value?.focus();
console.log(inputRef.value?.focus);

// models
const subscriberModel = reactive(new SubscriberModel());

// computed
asyncComputed(async () => {
  await subscriberModel.validate();
});

// methods
function addSubscriber() {
  //
  if (!subscriberModel.errors?.length) {
    console.log(subscriberModel);
  }
}

// life cycle
onMounted(() => {
  console.log(inputRef.value?.focus);
  formRef.value?.focus();
  // inputRef.value?.;
});
</script>
