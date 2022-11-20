import { useAppData } from '~~/context/app'

export default defineComponent({
  setup() {
    const appData = useAppData()!

    return () => (
      <div>
        <h1>AppInitialData AppName: {appData?.data?.appName}</h1>
      </div>
    )
  },
})
