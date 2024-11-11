<template>
  <div>
    <q-card>
      <q-card-section><div class="text-h4">Edit Arrears</div></q-card-section>
      <q-card-section
        ><div class="q-pa-md">
          <q-form>
            <q-input
              :model-value="editArrearsModel.amount"
              @update:model-value="updateModelValue"
              label="Amount"
              :rules="[() => $validateField(editArrearsModel, 'amount')]"
            />
            <q-input
              v-model="editArrearsModel.reason"
              label="Reason"
              :rules="[() => $validateField(editArrearsModel, 'reason')]"
            />

            <q-btn label="Save" @click="save" />
          </q-form></div
      ></q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { asyncComputed } from '@vueuse/core';
import { useQuasar } from 'quasar';
import useUiProcessHandler from 'src/composables/useUIProcessHandler';
import { BillingHandler } from 'src/lib/eventHandlers/Billing.handler';
import { isModelValid } from 'src/lib/utils';
import { EditArrearsModel } from 'src/models/EditArrears.model';
import { defineComponent, onMounted, reactive } from 'vue';
defineComponent({
  name: 'edit-arrears',
});

const props = defineProps<{
  amount: string;
  propertySubscriptionId: string;
}>();

const emit = defineEmits(['updateAmount']);

// model
const editArrearsModel = reactive(new EditArrearsModel());

// consts
const $q = useQuasar();

// refs

// computed
asyncComputed(() => {
  editArrearsModel.validate();
  // $q.loading.show()
});

// functions
async function save() {
  //validate
  useUiProcessHandler({
    loader: $q.loading,
    process: async () => {
      editArrearsModel.validate();
      if (!isModelValid(editArrearsModel)) {
        console.log('Edit Areas model is invalid.');
        throw new Error('Edit Areas model is invalid.');
      }
      await BillingHandler.updateArrears({
        arrears: editArrearsModel.amount,
        propertySubscriptionId: editArrearsModel.propertySubscriptionId,
        reason: editArrearsModel.reason,
      });
    },
    onError: () => {
      console.log('Error saving arrears!');
    },
    loaderMessage: 'Saving ...',
    notifierType: 'positive',
    notifierMessage: 'Process successful',
    showErrorNotifier: true,
  });
}

function updateModelValue(value: unknown) {
  emit('updateAmount', value);
  editArrearsModel.amount = value as string;
}

// hooks
onMounted(() => {
  editArrearsModel.amount = props.amount;
  editArrearsModel.propertySubscriptionId = props.propertySubscriptionId;
});
</script>
