<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { $axios } from './utils/request'
import { injectAppData } from './context/app'
const header = useRequestHeaders()

if (typeof window !== 'undefined') {
  $axios.defaults.headers.common = header
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const data = await useAsyncData(
  'app',
  async () => {
    await sleep(1000)
    return $axios.get('/').then((data) => data.data)
  },
  { pick: ['appName', 'seo'] },
)

// const { error } = await useAsyncData(async () => {
//   return $axios.get('/error').then((data) => data.data)
// })

// if (error.value) {
//   throw createError(error.value?.message || '')
// }

injectAppData(data.data)
</script>
