<template>
  <div>Get from root data : {{ appData?.data.appName }}</div>

  <div>title: {{ response.data.value?.title }}</div>
</template>

<script lang="ts" setup>
import { useAppData } from '~~/context/app'

const route = useRoute()
const response = await useAsyncData(async () => {
  return $axios
    .get<{ title: string }>('posts/' + route.params.id)
    .then((data) => data.data)
})

if (response.error.value) {
  throw createError({
    statusCode: response.error.value.response.status,
    statusMessage: 'Page Not Found',
    message:
      response.error.value.response.data.message ||
      response.error.value.message,
  })
}
const appData = useAppData()
</script>
