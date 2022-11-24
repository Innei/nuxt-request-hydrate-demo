<template>
  <NuxtLayout>
    <InitialDataWrapper>
      <RouterView></RouterView>
    </InitialDataWrapper>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import InitialDataWrapper from './inital.vue'
import { $axios } from './utils/request'
const header = useRequestHeaders()

if (typeof window !== 'undefined') {
  $axios.defaults.headers.common = header
}
</script>
