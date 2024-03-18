import dayjsBusinessDaysPlugin from 'dayjs-business-days2/src'
import { defineNuxtPlugin, useNuxtApp } from '#app'
import { useDayjs } from '#dayjs'

export default defineNuxtPlugin({
  name: 'nuxt-dayjs-business-days-plugin',
  hooks: {
    'app:created'() {
      const nuxtApp = useNuxtApp()
      const dayjs = useDayjs()

      const config = nuxtApp.$config.public?.dayjsBusinessDays

      const dayjsBusinessDaysConfig = { ...config }
      delete dayjsBusinessDaysConfig.debug
      delete dayjsBusinessDaysConfig.verbose

      dayjs.extend(dayjsBusinessDaysPlugin, dayjsBusinessDaysConfig)

      if (config.verbose)
        console.log('DayJS extended with business days plugin. Config:', dayjsBusinessDaysConfig)
      else if (config.debug)
        console.log('DayJS extended with business days plugin.')
    },
  },
})
