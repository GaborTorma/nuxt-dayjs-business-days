import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  hasNuxtModule,
  installModule,
} from '@nuxt/kit'
import type { BusinessDaysPluginOptions } from 'dayjs-business-days2'

export interface ModuleOptions extends BusinessDaysPluginOptions {
  debug?: boolean
  verbose?: boolean
}

declare module '@nuxt/schema' {

  interface NuxtConfig {
    dayjsBusinessDays?: ModuleOptions
  }

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
  async setup(options, nuxt) {
    const debug = (message: string) =>
      options.debug && console.log(`nuxt-dayjs-business-days: ${message}`)
    debug('setup started')

    if (!hasNuxtModule('dayjs-nuxt')) {
      if (nuxt.options._prepare) {
        await installModule('dayjs-nuxt')
      }
      else {
        throw new Error(
          'nuxt-dayjs module is missing.\n Please use it at the modules section in nuxt.config.ts.',
        )
      }
    }

    nuxt.options.runtimeConfig.public.dayjsBusinessDays = options
    /* // defu not working: Inlined implicit external defu
      nuxt.options.runtimeConfig.public.dayjsBusinessDays = defu(
        nuxt.options.runtimeConfig.public.dayjsBusinessDays,
        options
      )
    */

    if (options.verbose)
      console.log('nuxt-dayjs-business-days options:', options)

    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin'))
    debug(`dayjs business days plugin added`)
  },
})
