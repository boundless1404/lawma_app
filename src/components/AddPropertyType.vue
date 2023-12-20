<template>
  <!-- title -->
  <q-card-section>
    <div class="flex row justify-between">
      <title-badge>Add Property Type</title-badge>
      <modal-popup-close />
    </div>
  </q-card-section>
  <!-- form -->
  <q-card-section>
    <form class="q-px-" @submit.prevent>
      <div class="q-gutter-md">
        <q-input
          label="Name"
          type="text"
          v-model="propertyTypeModal.name"
          filled
          outlined
          color="secondary"
          label-color="dark"
          :rules="[() => $validateField(propertyTypeModal, 'name')]"
        />
        <q-input
          label="Unit Price"
          type="number"
          v-model="propertyTypeModal.unitPrice"
          filled
          outlined
          color="secondary"
          label-color="dark"
          :rules="[() => $validateField(propertyTypeModal, 'unitPrice')]"
        />
      </div>
      <div class="flex row justify-center">
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
import { PropertyTypeModel } from 'src/models/PropertyType.model';
import { reactive } from 'vue';
import ModalPopupClose from '../components/ModalPopupClose.vue';
import TitleBadge from '../components/TitleBadge.vue';

// consts

// models
const propertyTypeModal = reactive(new PropertyTypeModel());

// computed

asyncComputed(async () => {
  await propertyTypeModal.validate();
});

// methods
function onSubmit() {
  //
  console.log(propertyTypeModal);
}
</script>
