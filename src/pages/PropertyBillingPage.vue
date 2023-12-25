<template>
  <div
    :style="{
      backgroundColor: lightPageColor,
      height: '100vh',
      padding: '0 1rem',
      width: '100%',
    }"
  >
    <div class="row justify-between items-center">
      <div class="q-mt-xl">
        <q-tabs
          v-model="currentTab"
          dense
          active-color="dark"
          active-bg-color="secondary"
        >
          <q-tab
            :name="NamedTabsEnum.PROPERTIES"
            icon="house"
            :label="NamedTabsEnum.PROPERTIES"
            style="width: 15rem"
          ></q-tab>
          <q-tab
            :name="NamedTabsEnum.BILLINGS"
            icon="receipt"
            :label="NamedTabsEnum.BILLINGS"
            style="width: 15rem"
          ></q-tab>
        </q-tabs>
      </div>
      <div>
        <q-btn color="primary" rounded @click="toggleDialog">{{
          currentTabButtonAction
        }}</q-btn>
      </div>
    </div>
    <div class="q-mt-lg" style="height: 50vh">
      <q-tab-panels
        v-model="currentTab"
        style="background-color: inherit; height: 100%"
      >
        <q-tab-panel :name="NamedTabsEnum.PROPERTIES">
          <div>
            <q-card rounded class="bg-accent">
              <q-card-section>
                <q-table
                  :rows="rows"
                  bordered
                  :columns="propertySubscriptionColumns"
                >
                  <!-- <template v-slot:header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th>Col 1</q-th>
                      <q-th>Col 2</q-th>
                    </q-tr>
                  </template> -->
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td v-for="col in props.cols" :key="col.name">{{
                        col.value
                      }}</q-td>
                    </q-tr>
                  </template>
                </q-table>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
        <q-tab-panel :name="NamedTabsEnum.BILLINGS">
          <div :style="{ width: '100%' }" style="width: 10rem">
            <q-select
              v-model="currentBIllingMonth"
              label="Month"
              filled
              outlined
            ></q-select>
          </div>
          <div>
            <q-card rounded class="bg-accent">
              <q-card-section>
                <q-table :rows="rows" bordered>
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td auto-width>*</q-td>
                      <q-td v-for="col in props.cols" :key="col.name">{{
                        col.value
                      }}</q-td>
                    </q-tr>
                  </template>
                </q-table>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <!-- add new property dialog -->
    <!-- <div style="width: 80rem"> -->
    <q-dialog v-model="showDialog">
      <!-- dialog content -->
      <!-- <div class="flex flex-center" style="height: 85vh; width: 85rem"> -->
      <dialog-card height="auto" :width="`${dialogWidth}rem`">
        <!-- <component :is="currentDialogComponent" /> -->
        <new-property-subscription
          v-if="currentTab === NamedTabsEnum.PROPERTIES"
          @add-subscriber="
            onSecondaryModalTrigger(NamedSecondaryModal.ADD_SUBSCRIBER)
          "
          @add-street="onSecondaryModalTrigger(NamedSecondaryModal.ADD_STREET)"
          @add-property-type="
            onSecondaryModalTrigger(NamedSecondaryModal.ADD_PROPERTY_TYPE)
          "
        />
        <generate-bill v-else-if="currentTab === NamedTabsEnum.BILLINGS" />
      </dialog-card>
      <!-- </div> -->
    </q-dialog>
    <q-dialog
      v-model="showSecondaryDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <dialog-card height="auto" :width="`${dialogWidth - 30}rem`">
        <add-subscriber
          v-if="secondaryModalValue === NamedSecondaryModal.ADD_SUBSCRIBER"
        />
        <add-street
          v-else-if="secondaryModalValue === NamedSecondaryModal.ADD_STREET"
        />
        <add-property-type
          v-else-if="
            secondaryModalValue === NamedSecondaryModal.ADD_PROPERTY_TYPE
          "
        />
      </dialog-card>
    </q-dialog>
    <q-dialog
      v-model="showRemotelyTriggeredDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <dialog-card height="auto" :width="`${dialogWidth}rem`">
        <add-lga v-if="remoteModalValue === NamedRemoteModal.ADD_LGA" />
        <add-lga-ward
          v-else-if="remoteModalValue === NamedRemoteModal.ADD_LGA_WARD"
        />
      </dialog-card>
    </q-dialog>
    <!-- </div> -->
  </div>
</template>
<script setup lang="ts">
import { QTableColumn, getCssVar } from 'quasar';
import { computed, inject, onMounted } from 'vue';
import { ref } from 'vue';
import NewPropertySubscription from '../components/NewPropertySubscription.vue';
import GenerateBill from '../components/GenerateBill.vue';
import DialogCard from '../components/DialogCard.vue';
import AddSubscriber from '../components/AddSubscriber.vue';
import AddStreet from '../components/AddStreet.vue';
import AddPropertyType from '../components/AddPropertyType.vue';
import { EventBus } from 'quasar';
import { EventNamesEnum } from 'src/lib/enums/events.enum';
import AddLga from '../components/AddLga.vue';
import AddLgaWard from '../components/AddLgaWard.vue';
import { NamedTabsEnum } from '../lib/enums/template.enum';
import { NamedSecondaryModal } from '../lib/enums/template.enum';
import { NamedRemoteModal } from '../lib/enums/template.enum';
import { PropertySubscriptionHandler } from 'src/lib/eventHandlers/PropertySubscription.handler';
import { PropertySubscription } from 'src/lib/types/types';

// consts
const lightPageColor = getCssVar('light-page') || '#ffffff';
const eventBus = inject('eventBus') as EventBus;
const dialogWidth = 80;
const months: { [key: string]: string } = {
  '1': 'January',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};
const monthNow = months[new Date().getMonth() + 1];
const propertySubscriptionColumns: QTableColumn[] = [
  {
    field: 'propertySubscriptionId',
    label: 'Property Subscription Id',
    name: 'propertySubscriptionId',
    align: 'left',
  },
  {
    field: 'propertyName',
    label: 'Property Name',
    name: 'propertyName',
    align: 'left',
  },
  {
    field: 'oldCode',
    label: 'Old Code',
    name: 'oldCode',
    align: 'left',
  },
  {
    field: 'streetNumber',
    label: 'Street Number',
    name: 'streetNumber',
    align: 'left',
  },
  {
    field: 'streetName',
    label: 'Street Name',
    name: 'streetName',
    align: 'left',
  },
  {
    field: 'arrears',
    label: 'Arrears',
    name: 'arrears',
    align: 'left',
  },
];

// refs
const currentTab = ref<NamedTabsEnum>(NamedTabsEnum.PROPERTIES);
const showDialog = ref(false);
const currentBIllingMonth = ref(monthNow);
const showSecondaryDialog = ref(false);
const showRemotelyTriggeredDialog = ref(false);
const secondaryModalValue = ref(NamedSecondaryModal.ADD_SUBSCRIBER);
const remoteModalValue = ref(NamedRemoteModal.ADD_LGA);
const propertySubscriptionTableModel = ref<PropertySubscription[]>();

// computed
const currentTabButtonAction = computed(() => {
  const tabActions = {
    [NamedTabsEnum.PROPERTIES]: 'Add New Property',
    [NamedTabsEnum.BILLINGS]: 'Generate Billing',
  };

  return tabActions[currentTab.value];
});

const rows = computed(() => {
  return propertySubscriptionTableModel.value?.map((sub) => {
    return {
      propertySubscriptionId: sub.propertySubscriptionId,
      propertyName: sub.propertySubscriptionName,
      oldCode: sub.oldCode,
      streetNumber: sub.streetNumber,
      streetName: sub.streetName,
      arrears: sub.arrears,
    };
  });
});
// methods
function toggleDialog() {
  showDialog.value = !showDialog.value;
}

function onSecondaryModalTrigger(currentModalValue: NamedSecondaryModal) {
  showSecondaryDialog.value = true;
  secondaryModalValue.value = currentModalValue;
}

eventBus.on(EventNamesEnum.TRIGGER_REMOTE_MODAL_LGA, () => {
  remoteModalValue.value = NamedRemoteModal.ADD_LGA;
  showRemotelyTriggeredDialog.value = true;
});

eventBus.on(EventNamesEnum.TRIGGER_REMOTE_MODAL_LGA_WARD, () => {
  remoteModalValue.value = NamedRemoteModal.ADD_LGA_WARD;
  showRemotelyTriggeredDialog.value = true;
});

// life cycle hooks
onMounted(async () => {
  propertySubscriptionTableModel.value =
    await PropertySubscriptionHandler.getSubscriptions();
});
</script>
