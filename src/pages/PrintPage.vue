<template>
  <q-page>
    <!-- write template to display 4 billings to print per page -->
    <!-- print wrapper -->
    <div
      v-for="(billingDetailsPage, firstIndex) of printPagesDocument"
      :key="firstIndex"
      class="flex column justify-between q-pa-md q-gutter-lg"
      :style="{ pageBreakAfter: 'always', page: `${firstIndex}` }"
    >
      <!-- top -->
      <div
        v-for="(billingDetailsSide, secodndIndex) in billingDetailsPage"
        :key="secodndIndex"
        :class="`flex row ${
          billingDetailsSide.length > 1 ? 'justify-around' : 'justify-start'
        }`"
      >
        <!-- right -->
        <div
          v-for="billing of billingDetailsSide"
          :key="billing.PropertySubscriptionId"
        >
          <q-card
            :style="{
              width: '40vw',
              height: '30vh',
              marginTop: '4rem',
            }"
          >
            <q-card-section>
              <p>
                {{ billing.propertyName }} of {{ billing.streetNumber }}
                {{ billing.streetName }}
              </p>
              <div>
                <q-badge color="primary">Billing Details</q-badge>
                <p
                  v-for="(unit, lastIndex) of billing.propertyUnits"
                  :key="lastIndex"
                >
                  Property: {{ unit.propertyType }} | Units:
                  {{ unit.propertyUnits }} | Amount: N{{
                    Number(unit.propertyTypeUnitPrice) *
                    Number(unit.propertyUnits)
                  }}
                </p>
                <p>Arrears: N{{ billing.arrears || 0 }}</p>
                <p>Last Payment: N{{ billing.lastPayment || 0 }}</p>
                <p>Total: N{{ billing.totalBilling || 0 }}</p>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <!-- left -->
        <!-- <div>
          <q-card
            :style="{
              width: '40vw',
              height: '30vh',
            }"
          >
            <q-card-section>
              <p>Property Name</p>
              <div>
                <q-badge color="primary">Billing Details</q-badge>
                <p>Property: Duplex House | Units: 2 | Amount: N5000</p>
                <p>Property: Duplex House | Units: 2 | Amount: N5000</p>
                <p>Arrears: N2000</p>
                <p>Last Payment: N5000</p>
                <p>Total: N7000</p>
              </div>
            </q-card-section>
          </q-card>
        </div> -->
      </div>
      <!-- bottom -->
      <!-- <div class="flex row justify-around"> -->
      <!-- right -->
      <!-- <div>
          <q-card
            :style="{
              width: '40vw',
              height: '30vh',
            }"
          >
            <q-card-section>
              <p>Property Name</p>
              <div>
                <q-badge color="primary">Billing Details</q-badge>
                <p>Property: Duplex House | Units: 2 | Amount: N5000</p>
                <p>Property: Duplex House | Units: 2 | Amount: N5000</p>
                <p>Arrears: N2000</p>
                <p>Last Payment: N5000</p>
                <p>Total: N7000</p>
              </div>
            </q-card-section>
          </q-card>
        </div> -->
      <!-- left -->
      <!-- <div>
          <q-card
            :style="{
              width: '40vw',
              height: '30vh',
            }"
          >
            <q-card-section>
              <p>Property Name</p>
              <div>
                <q-badge color="primary">Billing Details</q-badge>
                <p>Property: Duplex House | Units: 2 | Amount: N5000</p>
                <p>Property: Duplex House | Units: 2 | Amount: N5000</p>
                <p>Arrears: N2000</p>
                <p>Last Payment: N5000</p>
                <p>Total: N7000</p>
              </div>
            </q-card-section>
          </q-card>
        </div> -->
      <!-- </div> -->
    </div>
    <!-- page break -->
  </q-page>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { BillingDetail } from 'src/lib/types/types';
import useBillingStore from 'src/stores/billing-store';
import { computed, onMounted } from 'vue';

// consts
const billingStore = useBillingStore();
const { billingDetails } = storeToRefs(billingStore);

const printPagesDocument = computed(() => {
  if (billingDetails?.value) {
    const billingDetailsLength = billingDetails.value.length;
    const billingArrArr: BillingDetail[][][] = [];

    for (let itemsCount = 0; itemsCount < billingDetailsLength; ) {
      let startIndex = itemsCount;
      const endIndex =
        itemsCount + 4 > billingDetailsLength
          ? billingDetailsLength
          : itemsCount + 4;

      const innerBillingArr: BillingDetail[][] = [];
      for (let innerItemsCount = 0; innerItemsCount < endIndex; ) {
        // const innerStart = startIndex;
        const innerEnd = startIndex + 2 > endIndex ? endIndex : startIndex + 2;
        const twoEach = billingDetails.value?.slice(startIndex, innerEnd);

        innerItemsCount = startIndex = innerEnd;
        innerBillingArr.push(twoEach);
      }
      itemsCount = endIndex;
      billingArrArr.push(innerBillingArr);
    }

    // return billingArrArr;
    return billingArrArr;
  } else {
    return [];
  }
});

console.log('this is the billing details: ', billingDetails);

onMounted(() => {
  //
});
</script>
