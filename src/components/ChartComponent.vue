<template>
  <div>
      <canvas ref="chartCanvas" :style="`height: ${props.height || '10vh'}`" ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Chart, type ChartData, type ChartOptions, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip } from 'chart.js';

// Register required components for Chart.js
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

const props = defineProps<{
  billingData: { month: string; amount: string }[];
  paymentData: { month: string; amount: string }[];
  height: string;
}>();

const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const createChart = () => {
  if (!chartCanvas.value) return;

  const billingAmounts = props.billingData.map(data => parseFloat(data.amount));
  const paymentAmounts = props.paymentData.map(data => parseFloat(data.amount));

  const chartData: ChartData = {
      labels: months,
      datasets: [
          {
              label: 'Billing Amount',
              data: months.map((m) => {
                  return props.billingData.filter((b) => b.month === m).reduce((prev, curr) => prev + (Number.isNaN(parseFloat(curr.amount)) ? 0 : parseFloat(curr.amount)), 0);
              }),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              pointRadius: 3,
              pointHoverRadius: 5,
          },
          {
              label: 'Payment Amount',
              data: months.map((m) => {
                  return props.paymentData.filter((b) => b.month === m).reduce((prev, curr) => prev + (Number.isNaN(parseFloat(curr.amount)) ? 0 : parseFloat(curr.amount)), 0);
              }),
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              pointRadius: 3,
              pointHoverRadius: 5,
          },
      ],
  };

  const chartOptions: ChartOptions<'line'> = {
      responsive: true,
      plugins: {
          tooltip: {
              enabled: true,
              mode: 'point',
              intersect: false,
              callbacks: {
                label: function (context) {
                    // Get the dataset label (Payments or Billing) and the value
                    const label = context.dataset.label || '';
                    const value = context.raw;
                    return `${label}: ₦${value.toLocaleString()}`; // Format the value as desired
                },
              },
          },
      },
      scales: {
          x: {
              type: 'category',
              labels: months,
          },
          y: {
              beginAtZero: true,
          },
      },
  };

  chartInstance = new Chart(chartCanvas.value, {
      type: 'line',
      data: chartData,
      options: chartOptions,
  });
};

onMounted(() => {
  createChart();
});

watch(() => [props.billingData, props.paymentData], () => {
  if (chartInstance) chartInstance.destroy();
  createChart();
});
</script>
