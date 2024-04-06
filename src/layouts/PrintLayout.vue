<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      bordered
      class="text-dark"
      :style="{ backgroundColor: $getColor('light-page') }"
    >
      <q-toolbar style="height: 6rem">
        <q-toolbar-title class="row justify-between">
          <div></div>
          <lawma-app-badge />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import LawmaAppBadge from '../components/LawmaAppBadge.vue';
</script>
