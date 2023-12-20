import localforage from 'localforage';
import { Pinia } from 'pinia';
import { boot } from 'quasar/wrappers';
import { AuthUserData, StorageNamesEnum } from 'src/stores';
import { storeforage } from 'src/stores';

const forageGetItem = async <T>(
  key: string,
  callback?: (err: unknown) => void
) => {
  try {
    const data = await storeforage.getItem<T>(key);
    return data;
  } catch (error) {
    callback && callback(error);
  }
};

const forageSetItem = async <T>(
  key: string,
  data: T,
  callback?: (err: unknown) => void
) => {
  try {
    console.log('this is the data before setItem: ', data);
    const saveData = await storeforage.setItem(key, data);
    console.log('this is the data after setItem: ', saveData);
  } catch (error) {
    console.log('this is the error from storeforage: ', error);
    // TODO: handle localforage setItem error
    callback && callback(error);
  }
};

const getStoreState = <T>(piniaStore: Pinia, storeName: string) => {
  const store = piniaStore.state.value[storeName] as T;
  return store;
};

export default boot(async ({ app, redirect, router }) => {
  app.provide('localforage', localforage);

  // initialize localforage
  const authUserData = await forageGetItem(StorageNamesEnum.AUTH_USER_DATA);
  if (!authUserData) {
    console.log('no authUserData found, initializing authUserData');
    await localforage.setItem(StorageNamesEnum.AUTH_USER_DATA, authUserData);
  }
  // TODO: when landing page exist remove auth check for landing page
  console.log('this is the current route ', router.currentRoute.value.path);
  if (!['/auth/signin', '/'].includes(router.currentRoute.value.path)) {
    const authStore = forageGetItem<AuthUserData>(
      StorageNamesEnum.AUTH_USER_DATA
    ) as AuthUserData;
    if (authStore && !authStore?.token) {
      redirect('/auth/signin');
    }
  }

  // store.state.value
});

export { forageGetItem, forageSetItem, getStoreState };
