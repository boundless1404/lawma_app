import { useNotify } from 'src/composables/useNotify';
import { UrlPathsEnum } from '../enums/urlPaths.enum';
import { requestApi } from '../requests/default.request';

export class BillingAccountHandler {
  static async getBillingAccountArrears(query: {
    page?: number;
    limit?: number;
    month?: string;
  }) {
    try {
      const limit = query.limit;
      const page = query.page;

      return await requestApi(UrlPathsEnum.BILLING_ACCOUNT, 'get', {
        params: { limit, page, month: query.month },
      });
    } catch (error) {
      useNotify({ type: 'negative' });
    }
  }
}
