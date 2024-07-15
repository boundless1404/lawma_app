<template>
  <dialog-card height="auto" :width="`${dialogWidth}rem`">
    <q-card-section class="q-pa-lg flex column q-gutter-sm moderate-modal-font">
      <!-- first row -->
      <div
        class="flex row justify-between q-mb-sm"
        style="width: 100%; height: 12rem"
      >
        <!-- right side -->
        <div :style="{ width: '49.5%' }">
          <bordered-card>
            <!-- top -->
            <div class="text-center text-bolder text-h6">
              <span>Property</span>
            </div>
            <!-- down -->
            <div>
              <p class="q-my-lg">
                <span>Id</span
                ><q-badge
                  class="q-ml-sm q-pa-sm q-px-sm"
                  :label="propertySubscription.id"
                  rounded
                />
              </p>
              <p class="q-my-lg">
                <span>Name</span
                ><q-badge
                  class="q-ml-sm q-pa-sm q-px-sm"
                  :label="propertySubscription.propertySubscriptionName"
                  rounded
                />
              </p>
            </div>
          </bordered-card>
        </div>
        <!-- left side -->
        <div :style="{ width: '49.5%' }">
          <bordered-card>
            <!-- top -->
            <div class="text-center text-bolder text-h6">
              <span>Transaction</span>
            </div>
            <!-- down -->
            <div>
              <p>
                <span>Arrears</span>
                <q-btn flat padding="0" @click="toggleEditModal">
                  <q-chip
                  class="q-ml-sm q-pa-sm q-px-sm"
                  :label="'N' + propertySubscriptionArrearsRef"
                  rounded
                  color="primary"
                  text-color="white"
                  icon-right="edit"
                  
                />
                </q-btn>
                <!-- <q-popup-edit
                  v-model="propertySubscriptionArrearsRef"
                  auto-save
                  v-slot="scope"
                >
                  <q-input
                    v-model="scope.value"
                    dense
                    autofocus
                    counter
                    @keyup.enter="scope.set"
                  />
                </q-popup-edit> -->
                
                <q-dialog v-model="openEditModal" >
                  <div>
                    <edit-arrears
                  :amount="propertySubscriptionArrearsRef"
                  :property-subscription-id="propertySubscriptionId"
                  @update-amount="
                    (value) => (propertySubscriptionArrearsRef = value)
                  "
                />
                  </div>
                </q-dialog>
              </p>
              <p>
                <span>Last Payment</span
                ><q-badge
                  class="q-ml-sm q-pa-sm q-px-sm"
                  :label="lastPayment.amount"
                  rounded
                />
              </p>
              <p>
                <span>Date of Payment</span
                ><q-badge
                  class="q-ml-sm q-pa-sm q-px-sm"
                  :label="lastPayment.createdAt"
                  rounded
                />
              </p>
            </div>
          </bordered-card>
        </div>
      </div>
      <!-- second row -->
      <div style="width: 100%; height: 8rem">
        <bordered-card>
          <!-- top -->
          <div>
            <p><span>Street</span></p>
          </div>
          <!-- down -->
          <div class="flex row justify-evenly">
            <p>
              <span>Number</span>
              <q-badge
                class="q-ml-sm q-pa-sm q-px-sm"
                :label="propertyStreet.num"
                rounded
              />
            </p>
            <p>
              <span>Name</span>
              <q-badge
                class="q-ml-sm q-pa-sm q-px-sm"
                :label="propertyStreet.name"
                rounded
              />
            </p>
          </div>
        </bordered-card>
      </div>
      <!-- third row -->
      <div style="width: 100%; height: 8rem">
        <bordered-card>
          <!-- top -->
          <div>
            <p><span>Custodian</span></p>
          </div>
          <!-- down -->
          <div class="flex row justify-evenly q-mt-md">
            <p>
              <span>Name</span>
              <q-badge
                class="q-ml-sm q-pa-sm q-px-sm"
                :label="custodian.name"
                rounded
              />
            </p>
            <p>
              <span>Email</span>
              <q-badge
                class="q-ml-sm q-pa-sm q-px-sm"
                :label="custodian.email"
                rounded
              />
            </p>
            <p>
              <span>Phone</span>
              <q-badge
                class="q-ml-sm q-pa-sm q-px-sm"
                :label="custodian.phone"
                rounded
              />
            </p>
          </div>
        </bordered-card>
      </div>
      <!-- fourth row -->
      <div style="width: 100%; height: auto">
        <bordered-card>
          <!-- top -->
          <div class="flex row text-bolder text-h6 flex items-center">
            <div class="flex row justify-end" style="width: 50%">
              <span>Billing Details</span>
            </div>
            <div
              class="flex row justify-end q-gutter-sm q-mb-sm"
              style="width: 50%"
            >
              <span v-if="!isEditing"
                ><q-btn icon="edit" round @click="isEditing = true"
              /></span>
              <span v-if="isEditing"
                ><q-btn icon="add" round @click="addRecord"
              /></span>
              <span v-if="isEditing"
                ><q-btn icon="save" round @click="save"
              /></span>
            </div>
          </div>
          <!-- middle -->
          <div>
            <!-- property units table -->
            <q-table
              bordered
              :column="propertySubscriptionUnitsTableColumn"
              :rows="propertySubscriptionUnitsTableRows"
              :visible-columns="propertySubscriptionUnitsTableVisibleColumns"
              table-header-class="text-bolder"
              :table-header-style="{
                backgroundColor: `${$getColor('secondary')}`,
              }"
              :loading="isSaving"
              :sort-method="
                (rows) => {
                  return rows;
                }
              "
              @row-click="
                (val) =>
                  console.log(`row with the following data was clicked: `, val)
              "
            >
              <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                    :style="{
                      textAlign: 'left',
                    }"
                  >
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>
              <template v-slot:body="props">
                <q-tr :props="props" @mouseenter="hovering(props.rowIndex)">
                  <q-td
                    v-for="(col, index) in props.cols"
                    :key="col.name"
                    class="text-left"
                    :style="{
                      postion: 'relative',
                    }"
                  >
                    <template v-if="col.name === 'propertyType'">
                      {{ props.row[col.name] }}
                      <q-popup-edit
                        v-model="props.row[col.name]"
                        title="Edit the Property Type"
                        auto-save
                        v-slot="scope"
                      >
                        <!-- <q-input
                          v-model="scope.value"
                          dense
                          autofocus
                          counter
                          @keyup.enter="scope.set"
                          :disable="!isEditing"
                        /> -->
                        <q-select
                          filled
                          :model-value="scope.value"
                          :options="propertyTypesOptions"
                          use-input
                          input-debounce="0"
                          style="width: 250px"
                          :disable="!isEditing"
                          @keyup.enter="scope.set"
                          @popup-show="fetchSelectPropertyTypeOptions"
                          @update:model-value="
                            (val) => updateModelValue(val, scope)
                          "
                        >
                          <template v-slot:no-option>
                            <q-item>
                              <q-item-section class="text-grey">
                                No results
                              </q-item-section>
                            </q-item>
                          </template>
                        </q-select>
                      </q-popup-edit>
                    </template>
                    <template v-else>
                      <q-input
                        v-model="props.row[col.name]"
                        type="text"
                        dense
                        borderless
                        :disable="!isEditing"
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
                          :menu-items="billingDetailsTableMenuItems"
                          @menuItemClickHandler="() => removeRecord(rowIndex)"
                        />
                      </span>
                    </template>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
          <!-- buttom -->
          <div></div>
        </bordered-card>
      </div>
    </q-card-section>
  </dialog-card>
</template>

<script lang="ts" setup>
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import DialogCard from 'components/DialogCard.vue';
import EditArrears from 'src/components/EditArrears.vue';
import BorderedCard from 'components/BorderedCard.vue';
import { QTableColumn, useQuasar } from 'quasar';
import { PropertySubscriptionHandler } from 'src/lib/eventHandlers/PropertySubscription.handler';
import { unref } from 'vue';
import AdvanceTableMenu from 'components/AdvanceTableMenu.vue';
import { useNotify } from 'src/composables/useNotify';
import { PropertyTypeModel } from 'src/models/PropertyType.model';
import { BillingHandler } from 'src/lib/eventHandlers/Billing.handler';
import useUiProcessHandler from 'src/composables/useUIProcessHandler';

export interface ViewPropertyDetailsProps {
  dialogWidth?: number;
  propertySubscriptionId: string;
}

const props = withDefaults(defineProps<ViewPropertyDetailsProps>(), {
  dialogWidth: 30,
});

defineComponent({
  name: 'view-property-details',
  components: {
    DialogCard,
  },
});

const $q = useQuasar();
const billingDetailsTableMenuItems: {
  label: string;
  icon: string;
  textColor?: string;
  color?: string;
}[] = [
  {
    label: 'Remove Row',
    icon: 'remove',
    textColor: 'black',
  },
];

const propertySubscriptionUnitsTableColumn: QTableColumn[] = [
  {
    field: 'propertyTypeId',
    label: 'Property Type Id',
    name: 'propertyTypeId',
  },
  {
    field: 'propertyType',
    label: 'Property Type',
    name: 'propertyType',
  },
  {
    field: 'propertyUnit',
    label: 'Property Units',
    name: 'propertyUnit',
  },
  {
    field: 'unitPrice',
    label: 'Unit Price',
    name: 'unitPrice',
  },
];

const propertySubscriptionUnitsTableVisibleColumns = [
  'propertyType',
  'propertyUnit',
  'unitPrice',
];

// refs
const propertySubscriptionUnitsTableRows = ref([
  {
    propertyTypeId: '1',
    propertyType: 'House',
    propertyUnit: '5',
    unitPrice: 'N5000',
  },
  // {
  //   propertyType: 'Shop',
  //   propertyUnit: '1',
  //   unitPrice: 'N2000',
  // }
  // {
  //   propertyType: 'Shop',
  //   propertyUnit: '1',
  //   unitPrice: 'N2000',
  // },
]);

const propertyTypes = ref<PropertyTypeModel[]>([]);

const isEditing = ref(false);
const propertySubscription = ref<Record<string, any>>({});
const rowIndex = ref(-1);
const isSaving = ref(false);
const propertySubscriptionArrearsRef = ref('');
const openEditModal = ref(false);

// computed
const propertyTypesOptions = computed(() => {
  return propertyTypes.value.map((propertytype) => {
    return {
      label: `${propertytype.name} - ${propertytype.unitPrice}`,
      value: propertytype.id,
    };
  });
});

const arrears = computed(() => {
  if (propertySubscription.value.billingAccount) {
    const balance =
      Number(unref(propertySubscription.value).billingAccount.totalBillings) -
      Number(unref(propertySubscription.value).billingAccount.totalPayments);
    return 'N' + balance;
  } else {
    return 'N0';
  }
});

const lastPayment = computed(() => {
  const payments = propertySubscription.value.payments;
  if (payments && payments.length > 0) {
    const payment = (
      unref(propertySubscription.value).payments as {
        createdAt: Date;
        amount: string;
      }[]
    ).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0];
    console.log('This is the last payment --> ', payment);

    return {
      createdAt: payment.createdAt.toDateString(),
      amount: payment.amount,
    };
  } else {
    return {
      createdAt: '--/--/--',
      amount: 'N0',
    };
  }
});

const custodian = computed(() => {
  let cust = {
    email: '',
    name: '',
    phone: '',
  };
  const custodianProfile = propertySubscription.value.entitySubscriberProfile;

  if (custodianProfile) {
    cust = {
      email: custodianProfile.email,
      name: custodianProfile.firstName + custodianProfile.lastName,
      phone: (custodianProfile.phoneCode?.name || '') + cust.phone || '',
    };
  }
  return cust;
});

const propertyStreet = computed(() => {
  if (propertySubscription.value.streetNumber) {
    return {
      num: unref(propertySubscription.value).streetNumber,
      name: unref(propertySubscription.value).street.name,
    };
  } else {
    return {};
  }
});

// functions
function updateModelValue(
  newValue: { label: string; value: string },
  popUpEditScope: { value: string }
) {
  console.log('the updated value is: -->', newValue);
  const propertyType = propertyTypes.value.find(
    (eachType) => eachType.id === newValue.value
  );
  popUpEditScope.value = propertyType?.name || '';
  // console.log(rowIndex.value);
  //
  propertySubscriptionUnitsTableRows.value[rowIndex.value].propertyTypeId =
    propertyType?.id || '';
  propertySubscriptionUnitsTableRows.value[rowIndex.value].unitPrice = String(
    propertyType?.unitPrice || ''
  );
  // propertySubscriptionUnitsTableRows.value =
  //   propertySubscriptionUnitsTableRows.value;
}
async function fetchSelectPropertyTypeOptions() {
  propertyTypes.value = await PropertySubscriptionHandler.getPropertyTypes();
}

async function save() {
  isSaving.value = true;
  try {
    await PropertySubscriptionHandler.savePropertyUnits({
      propertySubscriptionId: propertySubscription.value.id,
      propertySubscriptionUnits: propertySubscriptionUnitsTableRows.value,
    });

    useNotify({
      type: 'positive',
    });
  } catch (err) {
    useNotify({ type: 'negative' });
  }

  isSaving.value = false;
  isEditing.value = false;
}

function addRecord() {
  propertySubscriptionUnitsTableRows.value.push({
    propertyTypeId: '',
    propertyType: '',
    propertyUnit: '',
    unitPrice: '',
  });
}

function removeRecord(index: number) {
  propertySubscriptionUnitsTableRows.value.splice(index, 1);
}

function hovering(index: number) {
  rowIndex.value = index;
}

async function fetchPropertySubscription() {
  propertySubscription.value =
    await PropertySubscriptionHandler.getPropertySubscriptionDetails(
      props.propertySubscriptionId
    );
}

function toggleEditModal() {
  openEditModal.value = !openEditModal.value;
}

// watchers;

// watch(propertySubscriptionArrearsRef, async (newValue) => {
//   const valueHasChanged = newValue !== arrears.value;
  // if (valueHasChanged) {
  //   const valueToSend = newValue;

  //   await useUiProcessHandler({
  //     loader: $q.loading,
  //     process: async () => {
  //       await BillingHandler.updateArrears({
  //         arrears: newValue.substring(1),
  //         propertySubscriptionId: props.propertySubscriptionId,
  //       });
  //     },
  //     loaderMessage: 'Please, wait ...',
  //   });

  //   await fetchPropertySubscription();
  // }
// });

// update arrears ref
watch(propertySubscription, (newValue) => {
  if (newValue) {
    const balance =
      Number(unref(propertySubscription.value).billingAccount.totalBillings) -
      Number(unref(propertySubscription.value).billingAccount.totalPayments);
    propertySubscriptionArrearsRef.value = '' + balance;
  }
});
watch(propertySubscription, (newValue) => {
  if (newValue) {
    propertySubscriptionUnitsTableRows.value =
      propertySubscription.value.propertySubscriptionUnits.map((unit: any) => ({
        propertyTypeId: unit.entitySubscriberProperty.propertyType.id,
        propertyType: unit.entitySubscriberProperty.propertyType.name,
        propertyUnit: unit.propertyUnits,
        unitPrice: unit.entitySubscriberProperty.propertyType.unitPrice,
      }));
  }
});

onMounted(async () => {
  await fetchPropertySubscription();
});
</script>

<style lang="scss">
.moderate-modal-font {
  font-size: 1rem;
}
</style>
