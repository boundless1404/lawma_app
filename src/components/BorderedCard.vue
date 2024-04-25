<template>
  <q-card
    :style="{
      borderColor: `${$getColor(borderColor)}`,
      borderStyle: `${borderStyle}`,
      borderWidth: `${borderWidth}`,
      backgroundColor: `${$getColor(bgColor)}`,
      height: height,
    }"
  >
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'bordered-card',
});

export interface BorderedCardProps {
  bgColor?: string;
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: string;
  height?: string;
}

withDefaults(defineProps<BorderedCardProps>(), {
  bgColor: 'secondary',
  borderColor: 'primary',
  borderStyle: 'solid',
  borderWidth: '0.1rem',
  height: '100%',
});
</script>
