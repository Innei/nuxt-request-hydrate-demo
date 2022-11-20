<template>
  <div>
    <h1>Nuxt App Layout</h1>
  </div>

  <InitialDataWrapper>
    <RouterView></RouterView>
  </InitialDataWrapper>
</template>

<script lang="ts" setup>
import InitialDataWrapper from './inital.vue'
import { $axios } from './utils/request'
const header = useRequestHeaders()

if (typeof window !== 'undefined') {
  $axios.defaults.headers.common = header
}
</script>
