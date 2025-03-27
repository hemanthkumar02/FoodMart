import "vue"; // Import the Vue namespace to avoid potential conflicts

declare global {
  interface Window {
    __VUE_PROD_DEVTOOLS__: boolean;
  }
}
