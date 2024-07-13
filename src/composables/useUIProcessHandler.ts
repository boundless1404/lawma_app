import { Loading, useQuasar } from "quasar";
import { NotifierTypes } from "src/lib/types/types";
import { useNotify } from "./useNotify";

export default async function useUiProcessHandler({
  process,
  onError,
  loader,
  useNotifer = true,
  notifierType = 'positive',
  notifierMessage,
  loaderMessage = 'Please, wait!',
  showErrorNotifier = true,
}: {
  loader?: Loading;
  useNotifer?: boolean;
  loaderMessage?: string;
  notifierMessage?: string;
  notifierType?: NotifierTypes;
  showErrorNotifier?: boolean;
  process: () => Promise<void>;
  onError?: () => void,
}) {
  
  loader && loader.show({ message: loaderMessage});

  try {
    await process();
    useNotifer && useNotify({ type: notifierType, ...(notifierMessage ? { message: notifierMessage } : {}) })
  }
  catch (err) {
    const error = <Error>err;
    onError?.();
    showErrorNotifier && useNotify({ type: 'negative', ...(error.message ? { message: error.message } : {})})
  }
  finally {
    loader?.isActive && loader.hide();
  }

}
