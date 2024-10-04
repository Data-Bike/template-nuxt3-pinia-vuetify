import {defineStore, acceptHMRUpdate} from 'pinia'
import {TypedArray} from "core-js/internals/array-buffer-view-core";
import {ref} from "vue";
import {useSnackbarStore} from "~/store/snackbarStore";

export const useAppStore = defineStore('app', () => {

  const api_host = ref('')
  const api_path = ref(`/api/`);


  return {
    api_host, api_path
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
