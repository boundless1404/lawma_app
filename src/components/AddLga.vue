<template>
  <q-card-section>
    <div class="flex row justify-between">
      <title-badge>Add L.G.A.</title-badge>
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
          v-model="lgaModel.name"
          :rules="[() => $validateField(lgaModel, 'name')]"
        />
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
import { LGAModel } from 'src/lib/models/lga.model';
import TitleBadge from '../components/TitleBadge.vue';
import ModalPopupClose from './ModalPopupClose.vue';
import { reactive, defineComponent } from 'vue';
import { asyncComputed } from '@vueuse/core';

defineComponent({
  name: 'add-lga',
});

// model
const lgaModel = reactive(new LGAModel());

// computed
asyncComputed(async () => {
  lgaModel.validate();
});

// methods
function onSubmit() {
  //
  console.log(lgaModel);
}
</script>
