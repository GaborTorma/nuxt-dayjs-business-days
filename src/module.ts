import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { BusinessDaysPluginOptions } from 'dayjs-business-days2'

export interface ModuleOptions extends BusinessDaysPluginOptions {
	debug?: boolean
	verbose?: boolean
}

declare module '@nuxt/schema' {
	// eslint-disable-next-line no-unused-vars
	interface NuxtConfig {
		dayjsBusinessDays?: ModuleOptions
	}
	// eslint-disable-next-line no-unused-vars
	interface PublicRuntimeConfig {
		dayjsBusinessDays: Partial<ModuleOptions>
	}
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-dayjs-business-days',
		configKey: 'dayjsBusinessDays',
		compatibility: {
			nuxt: '^3.0.0',
		},
	},
	// Default configuration options of the Nuxt module
	defaults: {
		holidayFormat: 'YYYY-MM-DD',
		additionalWorkingDayFormat: 'YYYY-MM-DD',
		debug: false,
		verbose: false,
	},
	setup(options, nuxt) {
		const debug = (message: string) =>
			options.debug && console.log(`nuxt-dayjs-bussiness-days: ${message}`)
		debug('setup started')

		nuxt.options.runtimeConfig.public.dayjsBusinessDays = options
		/* // defu not working: Inlined implicit external defu
			nuxt.options.runtimeConfig.public.dayjsBusinessDays = defu(
				nuxt.options.runtimeConfig.public.dayjsBusinessDays,
				options
			)
		*/

		if (options.verbose) {
			console.log('nuxt-dayjs-bussiness-days options:', options)
		}

		const resolver = createResolver(import.meta.url)
		addPlugin(resolver.resolve('./runtime/plugin'))
		debug(`dayjs business days plugin added`)
	},
})
