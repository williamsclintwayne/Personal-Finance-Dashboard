declare module 'vue-grid-layout' {
  import { DefineComponent } from 'vue';

  export const GridLayout: DefineComponent;
  export const GridItem: DefineComponent;

  const VueGridLayout: {
    GridLayout: typeof GridLayout;
    GridItem: typeof GridItem;
  };

  export default VueGridLayout;
}