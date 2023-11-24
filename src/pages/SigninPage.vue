<template>
  <div>
    <div
      class="q-pt-sm q-pl-sm"
      :style="{
        height: '4rem',
      }"
    >
      <lawma-app-badge color="light-page" />
    </div>
    <div class="flex flex-center" style="height: 100vh">
      <q-card
        style="width: 30rem; height: 40rem"
        rounded
        :style="{
          borderColor: `2rem solid ${$getColor('accent')}`,
        }"
      >
        <q-card-section>
          <div class="text-center q-mx-auto"><q-chip> Sign in </q-chip></div>
          <q-form
            style="height: 100%; width: 100%"
            ref="signinFormRef"
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-xl q-pt-xl q-px-l"
          >
            <q-input
              style="width: 100%"
              filled
              v-model="email"
              label="Email"
              hint="email"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0 && validateField('email', val)) ||
                  'Please, enter a valid email string',
              ]"
            />

            <q-input
              style="width: 100%"
              filled
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              label="Password"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'Password is required',
              ]"
            />
            <q-checkbox
              style="margin-top: -2rem"
              v-model="showPassword"
              label="Show password"
            />

            <!-- <q-toggle v-model="licenseAcceptance" label="I accept the license and terms" /> -->

            <div class="text-center" style="width: 100%">
              <q-btn
                style="width: 100%"
                label="Submit"
                type="submit"
                color="primary"
                rounded
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { patterns } from 'quasar';
import { useRouter } from 'vue-router';
import LawmaAppBadge from 'src/components/LawmaAppBadge.vue';

// consts
const { testPattern } = patterns;
const router = useRouter();
// refs
const email = ref('');
const password = ref('');
const showPassword = ref(false);

// templates refs
const signinFormRef = ref<HTMLFormElement>();

// methods
function validateField(type: 'email', fieldValue: unknown) {
  let isValid = false;
  if (type === 'email') {
    isValid = testPattern.email(fieldValue as string);
  }

  return isValid;
}
function onSubmit() {
  //
  router.push('/');
  signinFormRef.value?.reset();
}

function onReset() {
  //
  email.value = '';
  password.value = '';
}
</script>
