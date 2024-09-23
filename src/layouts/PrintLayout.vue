<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import LawmaAppBadge from '../components/LawmaAppBadge.vue';
</script>
<style lang="scss">
/* Print styles */
@media print {
  .print-page {
    font-family: "Times New Roman", Times, serif;
    font-size: 0.68rem;
    line-height: 0.2rem;
    font-weight: 900;
    color: black;
    word-wrap: break-word;
    word-break: break-all;
    overflow-wrap: break-word;
    hyphens: auto;

    & .billing-details {
      &.odd-row {
        padding-top: 5.4rem
      }
    }
  }
}
</style>
