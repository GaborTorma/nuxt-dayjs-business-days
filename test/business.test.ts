import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

/**
 * TEST NOT WORKING
 * Dayjs issue: https://github.com/iamkun/dayjs/issues/1132
 */

describe('ssr', async () => {
	await setup({
		rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
	})

	it('2022-10-15 is business day', async () => {
		const html = await $fetch('/')
		expect(html).toContain('2022-10-15 isBusinessDay: true')
	})

	it('2022-01-01 is holiday', async () => {
		const html = await $fetch('/')
		expect(html).toContain('2022-01-01 isHoliday: true')
	})
})
