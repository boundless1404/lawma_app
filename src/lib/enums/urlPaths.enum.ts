export enum UrlPathsEnum {
  SIGNIN = '/auth/signin',
  SIGNUP = '/auth/signup',
  LOGOUT = '/auth/logout',
  LGA = '/utils-billing/lga',
  LGA_WARD = '/utils-billing/lga-ward',
  STREET = '/utils-billing/street',
  PROPERTY_TYPES = '/utils-billing/property-type',
  PHONE_CODE = '/utils-billing/phone-code',
  SUBSCRIBER_USER = '/utils-billing/subscriber-user',
  SUBSCRIPTION = '/utils-billing/subscription',
  BILLING = '/utils-billing/billing',
  BILLING_ACCOUNT_ARREARS = '/utils-billing/billing/account/arrears',
  BILLING_ACCOUNT_DETAILS = '/utils-billing/billing/account/street/:streetId/detail',
  BILLING_ACCOUNT_DEFAULTER = '/utils-billing/billing/account/street/:streetId/defaulter',
  PAYMENT = '/utils-billing/payment',
  DASHBOARD_METRICS = '/utils-billing/dashboard/metrics',
  PROPERTY_SUBSCRIPTION_DETAILS = '/utils-billing/subscription/details',
  SAVE_PROPERTY_UNITS = '/utils-billing/subscription/property-units',
  UPDATE_ARREARS = "/utils-billing/billing/account",
}
