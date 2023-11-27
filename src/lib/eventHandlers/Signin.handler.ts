import { EventBus, Notify } from 'quasar';
import { EventNamesEnum } from '../enums/events.enum';
import { SigninType } from '../types/types';
import useAuthStore from 'src/stores/auth-store';
import { requestSignin } from '../requests/auth-request';
import SigninModel from '../models/Signin.model';

export class SigninEventHandler {
  static async handle(
    eventBus: EventBus<{
      [EventNamesEnum.SIGN_IN]: (signinModel: SigninModel) => void;
    }>
  ) {
    eventBus?.on(EventNamesEnum.SIGN_IN, async (signinModel: SigninModel) => {
      try {
        const authStore = useAuthStore();
        delete signinModel.errors;

        const authToken = await requestSignin(signinModel);
        await authStore.handleAuthToken(authToken);
        // const serverResponse = await api.post(UrlPathsEnum.SIGNIN, signinModel);
        // if ([200, 201].includes(serverResponse.status)) {
        //   const responseBody = serverResponse.data as { token: string };
        //   await authStore.handleAuthToken(responseBody.token);
        //   console.log('we are now logged in', responseBody);
        // }
        Notify.create({
          message: 'Signin successful',
          color: 'positive',
          textColor: 'white',
          position: 'top',
        });
      } catch (error) {
        console.log(error);
        Notify.create({
          message: 'Signin failed',
          color: 'negative',
          textColor: 'white',
          position: 'top',
        });
      }
    });
  }
}
