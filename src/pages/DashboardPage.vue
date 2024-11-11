<template>
  <q-page>
    <div :style="{
      backgroundColor: `${$getColor('light-page')}`,
      padding: '3rem 1rem',
      width: '100%',
    }">
      <div class="flex column justify-evenly q-gutter-lg q-mb-xl" :style="{ width: '99.6%' }">
        <!-- first level metrics -->
        <div class="flex row justify-evenly" style="height: 10rem; width: 100%">
          <div style="max-height: max-content; width: 33%">
            <!-- Number of subscribers -->
            <q-card class="q-pa-sm flex column flex-center" :style="{
              height: '9rem',
              width: '100%',
              backgroundColor: `${$getColor('accent')}`,
            }">
              <q-card-section class="text-h6" style="display: block">{{ dashboardMetrics.subscriberCount }}
              </q-card-section>
              <q-card-section class="text-h6 text-bolder">Number of subscribers</q-card-section>
            </q-card>
          </div>
          <div style="max-height: max-content; width: 33%">
            <!-- Number of street -->
            <q-card class="q-pa-sm flex column flex-center" :style="{
              height: '9rem',
              width: '100%',
              backgroundColor: `${$getColor('accent')}`,
            }">
              <q-card-section class="text-h6">{{
                dashboardMetrics.streetCount
                }}</q-card-section>
              <q-card-section class="text-h6 text-bolder">
                Number of street</q-card-section>
            </q-card>
          </div>
          <div style="max-height: max-content; width: 33%">
            <!-- Number of properties -->
            <q-card class="q-pa-sm flex column flex-center" :style="{
              height: '9rem',
              width: '100%',
              backgroundColor: `${$getColor('accent')}`,
            }">
              <q-card-section class="text-h6">{{ dashboardMetrics.properitesCount }}
              </q-card-section>
              <q-card-section class="text-h6 text-bolder">Number of properties
              </q-card-section>
            </q-card>
          </div>
        </div>
        <!-- second level metrics -->
        <div class="flex row justify-around" style="width: 100%">
          <div style="width: 99%">
            <!-- Payments / Billings across months -->
            <q-card :style="{
              backgroundColor: `${$getColor('accent')}`,
              overFlow: 'scroll',
              height: '64vh',
            }">
              <!-- <apexchart
                type="line"
                height="360"
                :options="chartOptions"
                :series="series"
              ></apexchart> -->
              <q-card-section class="text-h6">
                <chart-component :payment-data="dashboardMetrics.paymentsAcrossMonths"
                :billing-data="dashboardMetrics.billingAcrossMonths" height="12vh" />
                </q-card-section>
            </q-card>
          </div>
        </div>
        <!-- third level metrics -->
        <div class="flex row justify-around" :style="{
          height: '9rem',
          width: '100%',
        }">
          <div style="width: 49.5%">
            <!-- Total Billings for month -->
            <q-card class="q-pa-sm flex column flex-center" :style="{
              height: '9rem',
              width: '100%',
              backgroundColor: `${$getColor('accent')}`,
            }">
              <q-card-section class="text-h6">{{
                dashboardMetrics.totalBillings
                }}</q-card-section>
              <q-card-section class="text-h6 text-bolder">
                Total Billings for month</q-card-section>
            </q-card>
          </div>
          <div style="width: 49.5%">
            <!-- Total Payments for month -->
            <q-card class="q-pa-sm flex column flex-center" :style="{
              height: '9rem',
              width: '100%',
              backgroundColor: `${$getColor('accent')}`,
            }">
              <q-card-section class="text-h6">{{
                dashboardMetrics.totalPayments
                }}</q-card-section>
              <q-card-section class="text-h6 text-bolder">
                Total Payments for month</q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { DashboardHandler } from 'src/lib/eventHandlers/Dashboard.handler';
import { computed, onMounted, ref, watch } from 'vue';
import ChartComponent from 'src/components/ChartComponent.vue';
// import VueApexCharts from 'vue3-apexcharts';

// refs
const dashboardMetrics = ref<{
  streetCount: number;
  subscriberCount: number;
  properitesCount: number;
  totalBillings: number;
  totalPayments: number;
  billingAcrossMonths: { month: string; amount: string }[];
  paymentsAcrossMonths: { month: string; amount: string }[];
}>({
  streetCount: 0,
  subscriberCount: 0,
  properitesCount: 0,
  totalBillings: 0,
  totalPayments: 0,
  billingAcrossMonths: [
    { month: 'Jan', amount: '1000' },
    { month: 'Feb', amount: '1500' },
    { month: 'Mar', amount: '2000' },
  ],
  paymentsAcrossMonths: [
    { month: 'Jan', amount: '1200' },
    { month: 'Feb', amount: '1400' },
    { month: 'Mar', amount: '1800' },
  ],
});
const fetchCount = ref(1);
const chartOptions = ref({
  chart: {
    type: 'line',
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  markers: { size: 4 },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  tooltip: {
    enabled: true,
    shared: true,
    followCursor: true,
    x: {
      show: true
    },
    y: {
      formatter: (value: number) => `₦${value.toLocaleString()}`
    }
  },
  legend: {
    position: 'top'
  }
});

const paymentRec = ref<number[]>([]);
const billingRec = ref<number[]>([]);

const series = computed(() => [
  {
    name: 'Payments',
    data: paymentRec.value
  },
  {
    name: 'Billings',
    data: billingRec.value
  }
]);

// const series = ref([
//   {
//     name: 'Payments',
//     data: [
//       40000, 50000, 60000, 20000, 80000, 90000, 100000, 110000, 120000, 130000,
//       140000, 150000,
//     ],
//   },
//   {
//     name: 'Billings',
//     data: [
//       20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000,
//       120000, 130000,
//     ],
//   },
// ]);

// watchers
watch(fetchCount, async (newValue) => {
  if (newValue > 1 && newValue < 3) {
    try {
      dashboardMetrics.value = await DashboardHandler.getDashboardMetrics();
    } catch (err) {
      console.log('Could not fetch dashboard metrics');
    }
  }
});

// watch([paymentRec])

// life cycle hooks
onMounted(async () => {
  try {
    dashboardMetrics.value = await DashboardHandler.getDashboardMetrics();
    console.log('Dashboard metrics fetched', dashboardMetrics.value);
    const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const orderedPayments = monthOrder.map(month => {
      const monthData = dashboardMetrics.value.paymentsAcrossMonths.find(p => p.month === month);
      return monthData ? parseInt(monthData.amount) : 0;
    });
    paymentRec.value = orderedPayments;

    const orderedBillings = monthOrder.map(month => {
      const monthData = dashboardMetrics.value.billingAcrossMonths.find(b => b.month === month);
      return monthData ? parseInt(monthData.amount) : 0;
    });
    billingRec.value = orderedBillings;

    console.log('Payment rec', paymentRec.value);
    console.log('Billing rec', billingRec.value);
  } catch (err) {
    if (fetchCount.value < 3) {
      fetchCount.value++;
    } else {
      console.log('Could not fetch dashboard metrics');
    }
  }
});
</script>
