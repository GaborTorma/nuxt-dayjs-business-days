import { defineNuxtPlugin, useNuxtApp } from '#app'
import dayjsBusinessDaysPlugin from 'dayjs-business-days2'

export default defineNuxtPlugin({
	name: 'nuxt-dayjs-business-days-plugin',
	hooks: {
		'app:created'() {
			const nuxtApp = useNuxtApp()
			const { $dayjs: dayjs } = nuxtApp

			if (!dayjs) {
				throw new Error('nuxt-dayjs module not found')
			}

			const config = nuxtApp.$config.public?.dayjsBusinessDays

			const dayjsBusinessDaysConfig = { ...config }
			delete dayjsBusinessDaysConfig.debug
			delete dayjsBusinessDaysConfig.verbose

			dayjs.extend(dayjsBusinessDaysPlugin, dayjsBusinessDaysConfig)

			if (config.verbose) {
				console.log('DayJS extended with business days plugin. Config:', dayjsBusinessDaysConfig)
			} else if (config.debug) {
				console.log('DayJS extended with business days plugin.')
			}
		},
	},
})
