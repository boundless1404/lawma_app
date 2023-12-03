<template>
  <dialog-card>
    <q-card-section class="text-center">
      <title-badge>New Property Subscription</title-badge>
    </q-card-section>
    <q-card-section>
      <!-- form -->
      <form class="q-pa-md" :style="{ height: '100%' }" @submit.prevent="">
        <!-- top -->
        <div class="row justify-between">
          <!-- left - form - side -->
          <div class="q-gutter-xl">
            <q-input
              label="Property Name"
              type="text"
              v-model="newPropertySubscription.propertyName"
              filled
              outlined
              color="secondary"
              label-color="dark"
            />
            <q-input
              label="Property Unit"
              type="text"
              v-model="newPropertySubscription.propertyUnit"
              filled
              outlined
              color="secondary"
              label-color="dark"
            />
            <q-input
              label="Expected Monthly Cost"
              type="text"
              v-model="newPropertySubscription.expectedMonthlyCost"
              filled
              outlined
              color="secondary"
              label-color="dark"
            >
              <q-tooltip>Expected Monthly Cost</q-tooltip>
            </q-input>
            <q-input
              label="Old Code"
              type="text"
              v-model="newPropertySubscription.oldCode"
              filled
              outlined
              color="secondary"
              label-color="dark"
            />
          </div>
          <!-- right - form - side -->
          <div class="q-gutter-xl">
            <div class="row" style="width: 20rem">
              <q-select
                style="width: 70%"
                label="Street"
                filled
                outlined
                v-model="newPropertySubscription.streetId"
                color="secondary"
                label-color="dark"
              ></q-select>
              <q-input
                style="width: 30%"
                label="Number"
                type="text"
                v-model="newPropertySubscription.streetNumner"
                filled
                outlined
                color="secondary"
                label-color="dark"
                ><q-tooltip>Street Number</q-tooltip></q-input
              >
            </div>
            <div :style="{ width: '20rem' }">
              <q-select
                style="width: 100%"
                label="Property Type"
                filled
                outlined
                v-model="newPropertySubscription.propertyTypeId"
                color="secondary"
                label-color="dark"
              ></q-select>
            </div>
            <div :style="{ width: '20rem' }">
              <q-select
                style="width: 100%"
                label="Custodian"
                filled
                outlined
                v-model="newPropertySubscription.custodianUserId"
                color="secondary"
                label-color="dark"
              ></q-select>
            </div>
            <div :style="{ width: '20rem' }">
              <q-checkbox
                label="Is Owner"
                v-model="newPropertySubscription.isOwner"
                color="primary"
              />
            </div>
          </div>
        </div>
        <!-- button submit area -->
        <div class="row justify-center q-mt-xl" :style="{ width: '100%' }">
          <q-btn
            :style="{ width: '40%' }"
            label="Submit"
            rounded
            color="primary"
            type="submit"
            @click="onSubmit"
          ></q-btn>
        </div>
        <!-- down -->
      </form>
    </q-card-section>
  </dialog-card>
</template>
<script setup lang="ts">
import { defineComponent, reactive } from 'vue';
import { NewPropertySubscriptionModel } from '../lib/models/NewPropertySubscription.mode';
import TitleBadge from './TitleBadge.vue';
import { inject } from 'vue';
import { EventNamesEnum } from 'src/lib/enums/events.enum';
import { EventBus } from 'quasar';
import { PropertySubscriptionHandler } from '../lib/eventHandlers/PropertySubscription.handler';
import DialogCard from './DialogCard.vue';

defineComponent({
  name: 'new-property-subscription',
});

// consts
const eventBus = inject('eventBus') as EventBus;
PropertySubscriptionHandler.postSubscription(eventBus);

// model
const newPropertySubscription = reactive(new NewPropertySubscriptionModel());

// methods
function onSubmit() {
  console.log('Submitted');
  eventBus.emit(
    EventNamesEnum.NEW_PROPERTY_SUBSCRIPTION,
    newPropertySubscription
  );
}
</script>
