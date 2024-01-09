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
          <div class="q-mb-lg" style="width: 20rem">
            <q-select
              :style="{
                width: '100%',
              }"
              v-model="currentBIllingMonth"
              label="Month"
              filled
              outlined
              label-color="dark"
              :options="currentBillingMonthsOptions"
              clearable
              map-options
              emit-value
            ></q-select>
          </div>
          <div>
            <q-card rounded class="bg-accent">
              <q-card-section>
                <q-table
                  bordered
                  :columns="billingTableColumn"
                  :rows="billingTabelRow"
                  :visible-columns="billingTableVisibleColumns"
                  table-header-class="text-bolder"
                >
                  <template v-slot:body="props">
                    <q-tr
                      :props="props"
                      @mouseenter="hovering(props.rowIndex)"
                      @mouseleave="hovering(-1)"
                    >
                      <q-td
                        v-for="(col, index) in props.cols"
                        :key="col.name"
                        class="text-center"
                        :style="{
                          postion: 'relative',
                        }"
                      >
                        <q-badge
                          :label="col.value"
                          class="text-bold"
                          :style="{
                            backgroundColor: 'transparent',
                            color: `${$getColor('dark')}`,
                          }"
                        />
                        <span
                          v-if="index === props.cols.length - 1"
                          v-show="rowIndex === props.rowIndex"
                          :style="{
                            position: 'absolute',
                            top: rowIndex === props.rowIndex ? '0.5rem' : '0',
                            right: rowIndex === props.rowIndex ? '0.5rem' : '0',
                            zIndex: rowIndex === props.rowIndex ? '1' : '0',
                          }"
                        >
                          <advance-table-menu
                            :menu-items="billingTableMenuItems"
                            @menuItemClickHandler="
                              (menuItem) =>
                                billingTableMenuItemClickHandler(
                                  menuItem.label,
                                  props.row.streetId
                                )
                            "
                          />
                        </span>
                      </q-td>
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
import { QTableColumn, getCssVar, useQuasar } from 'quasar';
import { computed, inject, onMounted, watch, watchEffect } from 'vue';
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
import { onBeforeMount } from 'vue';
import { months } from 'src/lib/projectConstants';
import { BillingAccountHandler } from 'src/lib/eventHandlers/BillingAccount.handler';
import AdvanceTableMenu from 'src/components/AdvanceTableMenu.vue';

// consts
const $q = useQuasar();
const lightPageColor = getCssVar('light-page') || '#ffffff';
const eventBus = inject('eventBus') as EventBus;
const dialogWidth = 80;
const billingTableMenuItems: {
  label: string;
  icon: string;
  textColor?: string;
  color?: string;
}[] = [
  {
    label: 'View Details',
    icon: 'visibility',
    textColor: 'black',
  },
  {
    label: 'Get Defaulters',
    icon: 'paid',
    textColor: 'black',
  },
];

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

const billingTableColumn: QTableColumn[] = [
  {
    field: 'streetId',
    name: 'streetId',
    label: 'streetId',
    align: 'center',
  },
  {
    field: 'streetName',
    label: 'Street Name',
    name: 'streetName',
    align: 'center',
  },
  {
    field: 'arrears',
    label: 'Arrears',
    name: 'arrears',
    align: 'center',
  },
  {
    field: 'totalBilling',
    label: 'Total Billing',
    name: 'totalBilling',
    align: 'center',
  },
  {
    field: 'actions',
    label: 'Actions',
    name: 'actions',
    align: 'center',
  },
];

const billingTableVisibleColumns = ['streetName', 'arrears', 'totalBilling'];

// refs
const currentTab = ref<NamedTabsEnum>(NamedTabsEnum.PROPERTIES);
const showDialog = ref(false);
const currentBIllingMonth = ref(monthNow);
const showSecondaryDialog = ref(false);
const showRemotelyTriggeredDialog = ref(false);
const secondaryModalValue = ref(NamedSecondaryModal.ADD_SUBSCRIBER);
const remoteModalValue = ref(NamedRemoteModal.ADD_LGA);
const propertySubscriptionTableModel = ref<PropertySubscription[]>();
const rowIndex = ref(-1);
let billingAccountArreas = ref<
  {
    streetName: string;
    streetId: string;
    arrears: string;
    totalBilling: string;
  }[]
>([]);

// computed
const currentBillingMonthsOptions = computed(() => {
  return Object.values(months).map((value) => value);
});
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

const billingTabelRow = computed(() =>
  billingAccountArreas.value?.map((street) => {
    return {
      streetName: street.streetName,
      arrears: street.arrears,
      streetId: street.streetId,
      totalBilling: street.totalBilling,
    };
  })
);

// methods
function billingTableMenuItemClickHandler(type: string, payload?: unknown) {
  if (payload) {
    console.log('payload', payload);
    if (type === 'View Details') {
      // TODO: validate payload
      eventBus.emit(EventNamesEnum.VIEW_BILLING_DETAILS, payload);
    } else if (type === 'Get Defaulters') {
      eventBus.emit(EventNamesEnum.GET_DEFAULTERS, payload);
    }
  }
}
function hovering(index: number) {
  rowIndex.value = index;
}
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

// watchers
watchEffect(async () => {
  if (currentTab.value === NamedTabsEnum.PROPERTIES) {
    billingAccountArreas.value =
      await BillingAccountHandler.getBillingAccountArrears({
        page: 1,
        limit: 5,
      });
  }
});

watch(currentBIllingMonth, async () => {
  if (currentTab.value === NamedTabsEnum.BILLINGS) {
    billingAccountArreas.value =
      await BillingAccountHandler.getBillingAccountArrears({
        page: 1,
        limit: 5,
        month: currentBIllingMonth.value,
      });
  }
});

// life cycle hooks
onBeforeMount(() => {
  $q.loading.show({
    message: 'Please, wait ...',
  });
});

onMounted(() => {
  $q.loading.hide();
});
onMounted(async () => {
  propertySubscriptionTableModel.value =
    await PropertySubscriptionHandler.getSubscriptions();
});
</script>
