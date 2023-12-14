<template>
  <q-card-section>
    <div class="flex row justify-between">
      <title-badge>Add L.G.A. Ward</title-badge>
      <ModalPopupClose />
    </div>
  </q-card-section>
  <q-card-section>
    <form>
      <div>
        <q-input
          label="Name"
          filled
          outlined
          label-color="dark"
          v-model="lgaWardModel.name"
          :rules="[() => $validateField(lgaWardModel, 'name')]"
        />
        <q-select
          label="Select L.G.A."
          filled
          outlined
          label-color="dark"
          v-model="lgaWardModel.lgaId"
          :options="lgaOptions"
        >
          <template v-slot:append>
            <q-btn flat round dense icon="add" />
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section>
                <q-btn label="Create L.G.A." flat dense />
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
import { LGAWardModel } from 'src/lib/models/lgaWard.model';
import TitleBadge from '../components/TitleBadge.vue';
import ModalPopupClose from './ModalPopupClose.vue';
import { reactive } from 'vue';
import { asyncComputed } from '@vueuse/core';
import { LGAModel } from 'src/lib/models/lga.model';
import { defineComponent } from 'vue';

defineComponent({
  name: 'add-lga-ward',
});

// consts
const lgas: LGAModel[] = [];

// model
const lgaWardModel = reactive(new LGAWardModel());

// computed
asyncComputed(async () => {
  lgaWardModel.validate();
});

const lgaOptions = lgas.map((lga) => {
  return {
    label: lga.name,
    value: lga.id,
  };
});

// methods
function onSubmit() {
  //
  console.log(lgaWardModel);
}
</script>
