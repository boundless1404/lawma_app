<template>
  <q-page class="print-page">
    <!-- write template to display 4 billings to print per page -->
    <!-- print wrapper -->
    <div v-for="(billingDetailsPage, firstIndex) of printPagesDocument" :key="firstIndex"
      class="flex column justify-between q-pa-md q-gutter-lg" :style="{
        pageBreakAfter: 'always',
        page: `${firstIndex}`,
      }">
      <!-- top -->
      <div v-for="(billingDetailsSide, secodndIndex) in billingDetailsPage" :key="secodndIndex" :class="`flex row ${billingDetailsSide.length > 1 ? 'justify-around' : ''
        }`" :style="{
          ...(billingDetailsSide.length > 1 ? {} : { marginRight: '3vw' })
        }">
        <!-- right -->
        <div v-for="billing of billingDetailsSide" :key="billing.propertySubscriptionId">
          <q-card :style="{
            width: '46vw',
            height: 'auto',
            marginTop: '0.2vh',
            wordWrap: 'break-word',
            wordBreak: 'break-all',
            overflowWrap: 'break-word',
            hyphens: 'auto',
          }">
            <q-card-section class="flex row justify-evenly" style="width: 100%; height: 4rem; margin-bottom: 1.5rem;">
             
            </q-card-section>
            <q-card-section :class="`billing-details ${secodndIndex % 2 > 0 ? 'odd-row' : ''} `"
              style="width: 50vw; height: 36vh">
              <p>{{datestring}}</p>
              <p>
               GRS-{{ billing.propertySubscriptionId }} | {{ billing.propertyName }} of {{ billing.streetNumber }} 
                {{ billing.streetName }}
              </p>
              <div>
                <p style="font-weight: 800;">Billing Details</p>
                <p v-for="(unit, lastIndex) of billing.propertyUnits" :key="lastIndex">
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
      </div>

    </div>
    <!-- page break -->
  </q-page>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { BillingDetail } from 'src/lib/types/types';
import useBillingStore from 'src/stores/billing-store';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// props

const route = useRoute();

// consts
const billingStore = useBillingStore();
const { billingDetails } = storeToRefs(billingStore);

// computed
const printPagesDocument = computed(() => {
  if (billingDetails?.value) {
    const billingDetailsLength = billingDetails.value.length;
    const billingArrArr: BillingDetail[][][] = [];

    for (let itemsCount = 0; itemsCount < billingDetailsLength;) {
      let startIndex = itemsCount;
      const endIndex =
        itemsCount + 4 > billingDetailsLength
          ? billingDetailsLength
          : itemsCount + 4;

      const innerBillingArr: BillingDetail[][] = [];
      for (let innerItemsCount = 0; innerItemsCount < endIndex;) {
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

const datestring = computed(() => {
  return route.params?.datestring
})

console.log('this is the billing details: ', billingDetails);

onMounted(() => {
  //
});
</script>
<style lang="scss" scoped>
.card-logo-div {
  width: 6rem;
}

.billing-details {
  margin: -0.1vh 0 0 0.2vw;
  font-size: 0.68rem;

  // &.odd-row {
  //   padding-top: 5.4rem
  // }
}
</style>