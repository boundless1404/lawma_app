<template>
  <q-page>
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
          <q-btn color="primary" rounded no-caps @click="toggleDialog">{{
            currentTabButtonAction
          }}</q-btn>
        </div>
      </div>
      <div class="q-mt-lg" style="height: 70vh">
        <q-tab-panels
          v-model="currentTab"
          style="background-color: inherit; height: 100%"
        >
          <q-tab-panel :name="NamedTabsEnum.PROPERTIES">
            <div>
              <q-card rounded class="bg-accent">
                <q-card-section>
                  <q-table
                    class="header-sticky"
                    :rows="rows"
                    bordered
                    :columns="propertySubscriptionColumns"
                    :table-header-style="{
                      backgroundColor: `${$getColor('secondary')}`,
                    }"
                    @request="onRequest"
                    v-model:pagination="pagination"
                    :loading="subscriptionTableLoading"
                    :filter="filter"
                  >
                    <!-- <template v-slot:header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th>Col 1</q-th>
                      <q-th>Col 2</q-th>
                    </q-tr>
                  </template> -->
                    <template v-slot:top-right>
                      <q-input
                        borderless
                        dense
                        debounce="300"
                        v-model="filter"
                        placeholder="Search"
                      >
                        <template v-slot:append>
                          <q-icon name="search" />
                        </template>
                      </q-input>
                    </template>
                    <template v-slot:body="props">
                      <q-tr
                        :props="props"
                        @mouseenter="hovering(props.rowIndex)"
                        @mouseleave="hovering(-1)"
                      >
                        <q-td
                          v-for="(col, index) in props.cols"
                          :key="col.name"
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
                              right:
                                rowIndex === props.rowIndex ? '0.5rem' : '0',
                              zIndex: rowIndex === props.rowIndex ? '1' : '0',
                            }"
                          >
                            <advance-table-menu
                              :menu-items="propertyTableMenuItems"
                              @menuItemClickHandler="
                                (menuItem) =>
                                  propertySubscriptionTableMenuItemClickHandler(
                                    props.row.propertySubscriptionId,
                                    menuItem.label
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
                <q-card-section
                  v-show="billingTableToDisplay !== billingTables.billing"
                >
                  <q-btn
                    icon="arrow_back"
                    flat
                    @click="billingTableToDisplay = billingTables.billing"
                  />
                </q-card-section>
                <q-card-section>
                  <q-table
                    v-if="billingTableToDisplay === billingTables.billing"
                    bordered
                    :columns="billingTableColumn"
                    :rows="billingTabelRow"
                    :visible-columns="billingTableVisibleColumns"
                    table-header-class="text-bolder"
                    :table-header-style="{
                      backgroundColor: `${$getColor('secondary')}`,
                    }"
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
                              right:
                                rowIndex === props.rowIndex ? '0.5rem' : '0',
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
                  <!--  -->
                  <q-table
                    v-else-if="
                      billingTableToDisplay === billingTables.billingDefaulters
                    "
                    bordered
                    :columns="billingDefaultersTableColumn"
                    :rows="billingDefaultersAndDetailsTableRows"
                    :visible-columns="billingDefaultersVisibleColumns"
                    table-header-class="text-bolder"
                    :table-header-style="{
                      backgroundColor: `${$getColor('secondary')}`,
                    }"
                    title="Billings Payment Defaulters"
                  >
                    <template v-slot:body="props">
                      <q-tr
                        :props="props"
                        @mouseenter="hovering(props.rowIndex)"
                        @mouseleave="hovering(-1)"
                      >
                        <q-td
                          v-for="col in props.cols"
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
                          <!-- <span
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
                        </span> -->
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                  <q-table
                    v-else-if="
                      billingTableToDisplay === billingTables.billingDetails
                    "
                    bordered
                    :columns="billingDetailsTableColumn"
                    :rows="billingDefaultersAndDetailsTableRows"
                    :visible-columns="billingDetailsVisibleColumns"
                    table-header-class="text-bolder"
                    :table-header-style="{
                      backgroundColor: `${$getColor('secondary')}`,
                    }"
                    title="Billing Details"
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
                              right:
                                rowIndex === props.rowIndex ? '0.5rem' : '0',
                              zIndex: rowIndex === props.rowIndex ? '1' : '0',
                            }"
                          >
                            <advance-table-menu
                              :menu-items="billingDetailsTableMenuItems"
                              @menuItemClickHandler="
                                (menuItem) =>
                                  billingDetailsTableClickHandler(
                                    menuItem.label,
                                    props.row.currentBillingId
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
            @add-street="
              onSecondaryModalTrigger(NamedSecondaryModal.ADD_STREET)
            "
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
      <q-dialog v-model="showPropertySubscriptionModal">
        <view-property-details
          :dialogWidth="dialogWidth"
          :property-subscription-id="propertySubscriptionId"
        />
      </q-dialog>
      <!-- </div> -->
    </div>
  </q-page>
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
import {
  PropertySubscription,
  PropertySubscriptionRequest,
  TableRequestEventProps,
} from 'src/lib/types/types';
import { onBeforeMount } from 'vue';
import { months } from 'src/lib/projectConstants';
import { BillingAccountHandler } from 'src/lib/eventHandlers/BillingAccount.handler';
import AdvanceTableMenu from 'src/components/AdvanceTableMenu.vue';
import { onBeforeUnmount } from 'vue';
import { useNotify } from 'src/composables/useNotify';
import ViewPropertyDetails from 'src/components/ViewPropertyDetails.vue';
import { BillingHandler } from 'src/lib/eventHandlers/Billing.handler';

// consts
const $q = useQuasar();
// const $router = useRouter();
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

const propertyTableMenuItems = [
  {
    label: 'View Details',
    icon: 'visibility',
    textColor: 'black',
  },
  {
    label: 'View Payments',
    icon: 'paid',
    textColor: 'black',
  },
];

const billingDetailsTableMenuItems = [
  {
    label: 'Delete',
    icon: 'remove',
    textColor: 'black',
  },
];

PropertySubscriptionHandler.handlePaginateSubscription(eventBus, {
  onSuccess: onPaginationRequestSuccess,
  onError: onPaginationRequestError,
});

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

const billingDefaultersTableColumn: QTableColumn[] = [
  {
    field: 'streetName',
    label: 'Street Name',
    name: 'streetName',
    align: 'center',
  },
  {
    field: 'propertyName',
    label: 'Property Name',
    name: 'propertyName',
    align: 'center',
  },
  {
    field: 'currentBilling',
    label: 'Current Billing',
    name: 'currentBilling',
    align: 'center',
  },
  {
    field: 'currentBillingId',
    label: 'Current Billing',
    name: 'currentBillingId',
    align: 'center',
  },
  {
    field: 'arrears',
    label: 'Arrears',
    name: 'arrears',
    align: 'center',
  },
];

const billingDetailsTableColumn: QTableColumn[] = [
  ...billingDefaultersTableColumn,
  {
    field: 'totalBilling',
    label: 'Total Billing',
    name: 'totalBilling',
    align: 'center',
  },
  {
    field: 'lastPayment',
    label: 'Last Payment',
    name: 'lastPayment',
    align: 'center',
  },
];

const billingTableVisibleColumns = ['streetName', 'arrears', 'totalBilling'];
const billingDefaultersVisibleColumns = billingDefaultersTableColumn
  .filter((billing) => billing.name !== 'currentBillingId')
  .map((col) => col.field);
const billingDetailsVisibleColumns = [
  ...billingDefaultersVisibleColumns,
  'totalBilling',
  'lastPayment',
];

const billingTables = {
  billing: 'billing',
  billingDetails: 'billingDetails',
  billingDefaulters: 'defaulters',
};

// event handlers
BillingAccountHandler.handleViewBillingDetails(eventBus, {
  onSuccess: onSuccessfulGettingBillingDetails,
});
BillingAccountHandler.handleGetDefaulters(eventBus, {
  onSuccess: onSuccessfulGettingDefaulters,
});

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
const billingTableToDisplay = ref('billing');
const billingDefaultersAndDetailsTableRows = ref<
  {
    streetName: string;
    PropertySubscriptionId: string;
    propertyName: string;
    currentBilling: string;
    currentBillingId: string;
    arrears: number;
    totalBilling?: string;
    lastPayment?: string;
  }[]
>([]);
const pagination = ref({
  // sortBy: 'desc',
  // descending: false,
  page: 1,
  rowsPerPage: 3,
  rowsNumber: 10,
});
const subscriptionTableLoading = ref(true);
const filter = ref('');
const showPropertySubscriptionModal = ref(false);
let propertySubscriptionId = ref();

// computed
const currentBillingMonthsOptions = computed(() => {
  return Object.values(months).map((value) => value);
});
const currentTabButtonAction = computed(() => {
  const tabActions = {
    [NamedTabsEnum.PROPERTIES]: 'Add New Property',
    [NamedTabsEnum.BILLINGS]: 'Generate / Print Billing',
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
function onPaginationRequestSuccess(requestData: PropertySubscriptionRequest) {
  //
  useNotify({ type: 'positive' });
  // handle data
  propertySubscriptionTableModel.value = requestData?.data;
  pagination.value = requestData?.pagination as unknown as {
    page: number;
    rowsNumber: number;
    rowsPerPage: number;
  };
}

function onPaginationRequestError(/* error */) {
  //
  useNotify({ type: 'negative', message: 'Could not load more data!' });
}
async function onRequest(props: TableRequestEventProps) {
  //
  subscriptionTableLoading.value = true;
  const requestData = await PropertySubscriptionHandler.getSubscriptionByPages(
    props
  );

  propertySubscriptionTableModel.value = requestData?.data;
  pagination.value = requestData?.pagination as unknown as {
    page: number;
    rowsNumber: number;
    rowsPerPage: number;
  };

  subscriptionTableLoading.value = false;
}

async function propertySubscriptionTableMenuItemClickHandler(
  propertyId: string,
  type: string
) {
  // display property details modal
  if (type === 'View Details') {
    propertySubscriptionId.value = propertyId;
    showPropertySubscriptionModal.value = true;
  } else {
    alert('This feature is under development.');
  }
}

async function billingDetailsTableClickHandler(
  type: string,
  billingId: string
) {
  try {
    if (type === 'Delete') {
      //
      $q.loading.show({
        message: 'Deleting ...',
      });
      await BillingHandler.deleteBilling(billingId);
      useNotify({ type: 'positive', message: 'Process successful!' });
      $q.loading.hide();
      window.location.reload();
    }
  } catch (error) {
    useNotify({
      type: 'negative',
    });

    $q.loading.hide();
  }
}

async function billingTableMenuItemClickHandler(
  type: string,
  streetId: string
) {
  if (streetId) {
    console.log('payload', streetId);
    if (type === 'View Details') {
      // TODO: validate payload
      eventBus.emit(EventNamesEnum.VIEW_BILLING_DETAILS, {
        streetId,
        billingMonth: currentBIllingMonth.value,
      });
    } else if (type === 'Get Defaulters') {
      eventBus.emit(EventNamesEnum.GET_DEFAULTERS, { streetId });
    }
  }
}

function onSuccessfulGettingBillingDetails(
  payload: {
    streetName: string;
    PropertySubscriptionId: string;
    propertyName: string;
    currentBilling: string;
    currentBillingId: string;
    arrears: number;
    totalBilling?: string;
    lastPayment?: string;
  }[]
) {
  //
  billingTableToDisplay.value = billingTables.billingDetails;
  billingDefaultersAndDetailsTableRows.value = payload;
}

function onSuccessfulGettingDefaulters(
  payload: {
    streetName: string;
    PropertySubscriptionId: string;
    propertyName: string;
    currentBilling: string;
    currentBillingId: string;
    arrears: number;
    totalBilling?: string;
  }[]
) {
  //
  billingTableToDisplay.value = billingTables.billingDefaulters;
  billingDefaultersAndDetailsTableRows.value = payload;
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

watch(filter, async (newValue) => {
  if (newValue) {
    subscriptionTableLoading.value = true;
    const requestData =
      await PropertySubscriptionHandler.getSubscriptionByPages({
        pagination: pagination.value,
        filter: filter.value,
      });

    propertySubscriptionTableModel.value = requestData?.data;
    pagination.value = requestData?.pagination as unknown as {
      page: number;
      rowsNumber: number;
      rowsPerPage: number;
    };

    subscriptionTableLoading.value = false;
  }
});
watchEffect(async () => {
  if (currentTab.value === NamedTabsEnum.PROPERTIES) {
    billingAccountArreas.value =
      await BillingAccountHandler.getBillingAccountArrears({
        page: 1,
        limit: 200,
      });
  }
});

watch(currentBIllingMonth, async () => {
  if (currentTab.value === NamedTabsEnum.BILLINGS) {
    billingAccountArreas.value =
      await BillingAccountHandler.getBillingAccountArrears({
        page: 1,
        limit: 200,
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
  const requestData = await PropertySubscriptionHandler.getSubscriptions();
  propertySubscriptionTableModel.value = requestData?.data;
  pagination.value = requestData?.pagination as unknown as {
    page: number;
    rowsNumber: number;
    rowsPerPage: number;
  };
  subscriptionTableLoading.value = false;
});

onBeforeUnmount(async () => {
  eventBus.off(EventNamesEnum.VIEW_BILLING_DETAILS);
  eventBus.off(EventNamesEnum.GET_DEFAULTERS);
  eventBus.off(EventNamesEnum.PAGINATE_SUBSCRIPTION_TABLE);
});
</script>
<style lang="scss">
.header-sticky {
  // height or max-height is important
  height: 60vh;

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    // bg color is important for th; just specify one
    background-color: #e6e0e9;
  }

  thead tr {
    position: sticky;
    z-index: 1;

    &:first-child {
      top: 0;
    }
  }

  // this is when the loading indicator appears
  &.q-table--loading {
    thead tr:last-child th {
      // height of all previous header rows
      top: 3rem;
    }
  }

  // prevent scrolling behind sticky top row on focus
  tbody {
    // height of all previous header rows
    scroll-margin-top: 3rem;
  }
}
</style>
