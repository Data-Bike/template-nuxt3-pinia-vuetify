import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(() => {
  addRouteMiddleware((to, from) => {
    if (/\/api\/.+/.test(to.path)) {
      return navigateTo('/')
    }
  })
})
