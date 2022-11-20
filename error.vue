<template>
  <div>
    {{ error?.message || 'unknown error' }}
  </div>
  <button @click="handleError">refresh</button>
</template>

<script setup>
const props = defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>
