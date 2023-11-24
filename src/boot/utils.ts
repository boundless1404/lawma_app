import { boot } from 'quasar/wrappers';
import getColor from 'src/plugins/getColor';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getColor: (colorAlias: string) => string | null;
  }
}
export default boot(({ app }) => {
  // app.config.globalProperties.$getColor = (colorAlias: string) => {
  //   console.log('get color was called');
  //   return getCssVar(colorAlias);
  // };
  // register plugins
  app.use(getColor);
});
