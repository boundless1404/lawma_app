<template>
  <!-- <dialog-card> -->
  <q-card-section class="text-center">
    <title-badge>New Property Subscription</title-badge>
  </q-card-section>
  <q-card-section>
    <!-- form -->
    <form
      class="q-pa-md"
      :style="{ height: '100%', width: '100%' }"
      @submit.prevent=""
    >
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
              :options="streetOptions"
            >
              <template v-slot:append>
                <q-btn
                  round
                  flat
                  dense
                  icon="add"
                  @click.prevent.stop="onSelecButtonClicked('addStreet')"
                />
              </template>
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    <q-btn
                      flat
                      dense
                      label="Add Street"
                      @click="onSelecButtonClicked('addStreet')"
                    />
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-input
              style="width: 30%"
              label="Number"
              type="text"
              v-model="newPropertySubscription.streetNumber"
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
              :options="propertyTypesOptions"
              clearable
            >
              <template v-slot:append>
                <q-btn
                  round
                  dense
                  flat
                  icon="add"
                  @click.prevent.stop="onSelecButtonClicked('addPropertyType')"
                />
              </template>
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    <q-btn
                      dense
                      flat
                      label="Add Property Type"
                      @click="onSelecButtonClicked('addPropertyType')"
                    />
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
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
              clearable
              :options="custodianOptions"
            >
              <template v-slot:append>
                <q-btn
                  round
                  dense
                  flat
                  icon="add"
                  @click.prevent.stop="onSelecButtonClicked('addSubscriber')"
                />
              </template>
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    <q-btn
                      dense
                      flat
                      label="Add Subscriber"
                      @click="onSelecButtonClicked('addSubscriber')"
                    />
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
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
  <!-- </dialog-card> -->
</template>
<script setup lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { PropertySubscriptionModel } from '../lib/models/PropertySubscription.mode';
import TitleBadge from './TitleBadge.vue';
import { inject } from 'vue';
import { EventNamesEnum } from 'src/lib/enums/events.enum';
import { EventBus, QSelect, QBtn } from 'quasar';
import { PropertySubscriptionHandler } from '../lib/eventHandlers/PropertySubscription.handler';
import { SubscriberModel } from 'src/lib/models/Subscriber.mode';
import { PropertyTypeModel } from 'src/lib/models/PropertyType.model';
import { StreetModel } from 'src/lib/models/Street.model';

defineComponent({
  name: 'new-property-subscription',
});

const emit = defineEmits<{
  (e: 'addSubscriber'): void;
  (e: 'addPropertyType'): void;
  (e: 'addStreet'): void;
}>();

// consts
const eventBus = inject('eventBus') as EventBus;

// initializers
PropertySubscriptionHandler.postSubscription(eventBus);
const subscribers: SubscriberModel[] = [];
const proertytypes: PropertyTypeModel[] = [];
const streets: StreetModel[] = [];

// refs

// model
const newPropertySubscription = reactive(new PropertySubscriptionModel());

// computed
const custodianOptions = computed(() => {
  return subscribers.map((subscriber) => {
    return {
      label: subscriber.firstName + ' ' + subscriber.lastName,
      value: subscriber.id,
    };
  });
});

const propertyTypesOptions = computed(() => {
  return proertytypes.map((propertytype) => {
    return {
      label: propertytype.name,
      value: propertytype.id,
    };
  });
});

const streetOptions = computed(() => {
  return streets.map((street) => {
    return {
      label: street.name,
      value: street.id,
    };
  });
});

// methods
function onSubmit() {
  console.log('Submitted');
  eventBus.emit(
    EventNamesEnum.NEW_PROPERTY_SUBSCRIPTION,
    newPropertySubscription
  );
}

function onSelecButtonClicked(
  eventNameToEmit: 'addSubscriber' | 'addPropertyType' | 'addStreet'
) {
  emit(eventNameToEmit as unknown as never);
}
</script>
