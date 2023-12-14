<template>
  <!-- title -->
  <q-card-section>
    <div class="flex row justify-between">
      <title-badge>Add Street</title-badge>
      <modal-popup-close />
    </div>
  </q-card-section>
  <!-- form -->
  <q-card-section>
    <form class="q-px-lg" @submit.prevent>
      <div class="q-gutter-xl">
        <q-input
          label="Street Name"
          type="text"
          v-model="streetModel.name"
          filled
          outlined
          color="secondary"
          label-color="dark"
          :rules="[() => $validateField(streetModel, 'name')]"
        />
        <q-select
          label="Lga"
          filled
          outlined
          color="secondary"
          label-color="dark"
          :options="lgaOptions"
          v-model="streetModel.lgaId"
        >
          <template v-slot:append>
            <q-btn
              round
              flat
              dense
              icon="add"
              @click.prevent.stop="
                emitEvent(EventNamesEnum.TRIGGER_REMOTE_MODAL_LGA)
              "
            />
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                <q-btn
                  label="Add LGA"
                  dense
                  flat
                  @click="emitEvent(EventNamesEnum.TRIGGER_REMOTE_MODAL_LGA)"
                />
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-select
          label="LGA Ward"
          filled
          outlined
          color="secondary"
          label-color="dark"
          :options="lgaWardOptions"
          v-model="streetModel.lgaWardId"
        >
          <template v-slot:append>
            <q-btn
              round
              flat
              dense
              icon="add"
              @click.prevent.stop="
                emitEvent(EventNamesEnum.TRIGGER_REMOTE_MODAL_LGA_WARD)
              "
            />
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                <q-btn
                  label="Add LGA Ward"
                  flat
                  dense
                  @click="
                    emitEvent(EventNamesEnum.TRIGGER_REMOTE_MODAL_LGA_WARD)
                  "
                />
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="flex row justify-center q-mt-lg">
        <q-btn
          :style="{
            width: '40%',
          }"
          label="submit"
          type="submit"
          color="primary"
          rounded
          @click="onSubmit"
        />
      </div>
    </form>
  </q-card-section>
</template>
<script setup lang="ts">
import { asyncComputed } from '@vueuse/core';
import { StreetModel } from 'src/lib/models/Street.model';
import { LGAModel } from 'src/lib/models/lga.model';
import { LGAWardModel } from 'src/lib/models/lgaWard.model';
import { inject, reactive } from 'vue';
import ModalPopupClose from '../components/ModalPopupClose.vue';
import TitleBadge from '../components/TitleBadge.vue';
import { defineComponent } from 'vue';
import { EventBus } from 'quasar';
import { EventNamesEnum } from 'src/lib/enums/events.enum';

defineComponent({
  name: 'add-street',
});

defineEmits<{
  (e: 'addLga'): void;
  (e: 'addLgaWard'): void;
}>();

// consts
const lgas: LGAModel[] = [];
const lgaWards: LGAWardModel[] = [];
const eventBus = inject('eventBus') as EventBus;

// models
const streetModel = reactive(new StreetModel());

// computed
const lgaOptions = lgas.map((lga) => {
  return {
    label: lga.name,
    value: lga.id,
  };
});

const lgaWardOptions = lgaWards.map((lgaWard) => {
  return {
    label: lgaWard.name,
    value: lgaWard.id,
  };
});

asyncComputed(async () => {
  await streetModel.validate();
});

// methods
function onSubmit() {
  //
  console.log(streetModel);
}

// events invocation
function emitEvent(eventName: EventNamesEnum) {
  console.log('event emitted is: ', eventName);
  eventBus.emit(eventName);
}
</script>
