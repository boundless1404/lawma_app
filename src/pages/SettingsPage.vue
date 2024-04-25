<template>
  <q-page>
    <div
      :style="{
        backgroundColor: `${$getColor('light-page')}`,
        height: '100vh',
        padding: '0 1rem',
        width: '100%',
      }"
    >
      <div class="row justify-between items-center">
        <div class="q-mt-xl" style="margin-top: 15vh">
          <q-tabs
            v-model="currentTab"
            dense
            active-color="dark"
            active-bg-color="secondary"
          >
            <q-tab
              :name="NamedTabsEnum.PROPERTY_TYPES"
              icon="home"
              :label="NamedTabsEnum.PROPERTY_TYPES"
              style="width: 15rem"
            ></q-tab>
          </q-tabs>
        </div>
      </div>
      <div class="q-mt-lg" style="height: 70vh">
        <q-tab-panels
          v-model="currentTab"
          style="background-color: inherit; height: 100%"
        >
          <q-tab-panel :name="NamedTabsEnum.PROPERTY_TYPES">
            <div>
              <div
                :style="{
                  width: '15rem',
                  backgroundColor: `${$getColor('accent')}`,
                  padding: '1rem',
                  borderRadius: '0.4rem',
                  boxShadow: '',
                }"
              >
                <div
                  :style="{
                    borderColor: `${$getColor('primary')}`,
                    borderWidth: '0.1rem',
                    borderStyle: 'solid',
                  }"
                >
                  <q-select
                    class="bg-secondary"
                    label="Property Type"
                    v-model="propertyTypeId"
                    :options="propertyTypesOptions"
                    emit-value
                    map-options
                    clearable
                  />
                </div>
              </div>
              <q-card rounded class="bg-accent q-mt-lg">
                <q-card-section> </q-card-section>
                <div>
                  <div>
                    <q-card-section>
                      <q-form @submit.prevent style="width: 50vh; margin: auto">
                        <div class="q-gutter-md">
                          <q-input
                            label="Name"
                            type="text"
                            v-model="propertyTypeModel.name"
                            filled
                            outlined
                            color="secondary"
                            label-color="dark"
                            :rules="[
                              () => $validateField(propertyTypeModel, 'name'),
                            ]"
                          />
                          <q-input
                            label="Unit Price"
                            type="number"
                            v-model="propertyTypeModel.unitPrice"
                            filled
                            outlined
                            color="secondary"
                            label-color="dark"
                            :rules="[
                              () =>
                                $validateField(propertyTypeModel, 'unitPrice'),
                            ]"
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
                            @click.prevent="onSubmit"
                          />
                        </div>
                      </q-form>
                    </q-card-section>
                  </div>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>

      <!-- </div> -->
    </div>
  </q-page>
</template>
<script setup lang="ts">
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue';
import { PropertySubscriptionHandler } from 'src/lib/eventHandlers/PropertySubscription.handler';
import { PropertyTypeModel } from 'src/models/PropertyType.model';
import { asyncComputed } from '@vueuse/core';
import { QForm, EventBus, useQuasar } from 'quasar';
import { EventNamesEnum } from 'src/lib/enums/events.enum';
import { isModelValid, clearUIEffects } from 'src/lib/utils';

enum NamedTabsEnum {
  PROPERTY_TYPES = 'Property Types',
}

// refs
const currentTab = ref<NamedTabsEnum>(NamedTabsEnum.PROPERTY_TYPES);
const propertyTypes = ref<PropertyTypeModel[]>([]);
const propertyTypeForm = ref<QForm>();
const propertyTypeId = ref();

// consts
const eventBus = inject('eventBus') as EventBus;
const $q = useQuasar();
let timer: NodeJS.Timeout;

// models
const propertyTypeModel = reactive(new PropertyTypeModel());

// computed
const propertyTypesOptions = computed(() => {
  return propertyTypes.value.map((propertytype) => {
    return {
      label: `${propertytype.name} - ${propertytype.unitPrice}`,
      value: propertytype.id,
    };
  });
});

asyncComputed(async () => {
  await propertyTypeModel.validate();
});

// methods
function onSubmit() {
  //
  if (!isModelValid(propertyTypeModel)) {
    // validate
    propertyTypeForm.value?.validate();
  }
  $q.loading.show({
    message: 'Submitting ...',
  });

  eventBus.emit(EventNamesEnum.POST_PROPERTY_TYPE, propertyTypeModel);

  timer = setTimeout(() => {
    $q.loading.hide();
  }, 2000);
}

function onSuccess() {
  // clear form
  propertyTypeModel.clearValues();
  clearUIEffects({ loader: $q.loading, timer });
}

function onError() {
  clearUIEffects({ loader: $q.loading, timer });
}

// watchers
watch(propertyTypeId, (newValue) => {
  if (newValue) {
    const propertyTypeToEdit = propertyTypes.value.find(
      (eachType) => eachType.id === newValue
    );
    if (propertyTypeToEdit) {
      propertyTypeModel.id = propertyTypeToEdit.id;
      propertyTypeModel.name = propertyTypeToEdit.name;
      propertyTypeModel.unitPrice = propertyTypeToEdit.unitPrice;
    }
  } else {
    propertyTypeModel.id = undefined;
    propertyTypeModel.name = '';
    propertyTypeModel.unitPrice = 0;
  }
});

// remove event listener
onBeforeUnmount(() => {
  eventBus.off(EventNamesEnum.POST_PROPERTY_TYPE);
});

onMounted(async () => {
  propertyTypes.value = await PropertySubscriptionHandler.getPropertyTypes();
  // initializers
  PropertySubscriptionHandler.handlePostPropertyType(eventBus, {
    onSuccess,
    onError,
  });
});
</script>
