import { InjectionKey, Ref } from 'nuxt/dist/app/compat/capi'

export interface AppData {
  appName: string
  seo: {
    title: string
    description: string
  }
}

export const AppDataKey: InjectionKey<{
  data: AppData
}> = Symbol()

export const injectAppData = (appData: Ref<AppData>) => {
  provide(AppDataKey, {
    data: appData.value,
  })
}

export const useAppData = () => {
  return inject(AppDataKey)!
}
