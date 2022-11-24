<template>
  <InitialDataWrapper>
    <NuxtLayout>
      <ErrorInner :error="props.error" />
    </NuxtLayout>
  </InitialDataWrapper>
</template>

<script setup>
import ErrorInner from './error-inner.vue'
import InitialDataWrapper from './inital.vue'
const props = defineProps({
  error: Object,
})
</script>
