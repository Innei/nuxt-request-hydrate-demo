<template>
  <div>
    appName: {{ app?.data.appName }}
    {{ error?.message || 'unknown error' }}
  </div>
  <button @click="handleError">refresh</button>
</template>

<script setup>
import { useAppData } from './context/app'

const props = defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })

if (typeof window === 'undefined' && props.error.statusCode) {
  setResponseStatus(props.error.statusCode)
}
const app = useAppData()
</script>
