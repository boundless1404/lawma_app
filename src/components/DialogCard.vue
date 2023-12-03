<template>
  <q-card
    :style="{
      width: '100%',
      height: '100%',
      backgroundColor: $getColor('accent'),
    }"
  >
    <slot></slot>
  </q-card>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'dialog-card',
});
export interface DialogCardProps {
  width?: string;
  height?: string;
  bgColor?: string;
}

withDefaults(defineProps<DialogCardProps>(), {
  width: '100%',
  height: '100%',
  bgColor: 'accent',
});
</script>
