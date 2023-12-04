<template>
  <div
    :style="{
      backgroundColor: lightPageColor,
      height: '100vh',
      padding: '0 1rem',
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
                <q-table :rows="rows" bordered>
                  <template v-slot:header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th>Col 1</q-th>
                      <q-th>Col 2</q-th>
                    </q-tr>
                  </template>
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
                  <template v-slot:header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th>Col 1</q-th>
                      <q-th>Col 2</q-th>
                    </q-tr>
                  </template>
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
    <div>
      <q-dialog v-model="showDialog">
        <!-- dialog content -->
        <div
          class="flex flex-center"
          style="height: 85vh; width: 80%; overflow-y;: scroll;"
        >
          <component :is="currentDialogComponent" />
        </div>
      </q-dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getCssVar } from 'quasar';
import { computed } from 'vue';
import { ref } from 'vue';
import NewPropertySubscription from '../components/NewPropertySubscription.vue';
import GenerateBill from '../components/GenerateBill.vue';

// consts
const lightPageColor = getCssVar('light-page') || '#ffffff';
enum NamedTabsEnum {
  PROPERTIES = 'Properties',
  BILLINGS = 'Billings',
}
const rows = [
  {
    col1: 'This is col 1',
    col2: 'This is col 2',
  },
  {
    col1: 'This is col 1',
    col2: 'This is col 2',
  },
];
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

// refs
const currentTab = ref<NamedTabsEnum>(NamedTabsEnum.PROPERTIES);
const showDialog = ref(false);
const currentBIllingMonth = ref(monthNow);

// computed
const currentTabButtonAction = computed(() => {
  const tabActions = {
    [NamedTabsEnum.PROPERTIES]: 'Add New Property',
    [NamedTabsEnum.BILLINGS]: 'Generate Billing',
  };

  return tabActions[currentTab.value];
});

const currentDialogComponent = computed(() => {
  const dialogComponents = {
    [NamedTabsEnum.PROPERTIES]: NewPropertySubscription,
    [NamedTabsEnum.BILLINGS]: GenerateBill,
  };

  return dialogComponents[currentTab.value];
});

// methods
function toggleDialog() {
  showDialog.value = !showDialog.value;
}
</script>
