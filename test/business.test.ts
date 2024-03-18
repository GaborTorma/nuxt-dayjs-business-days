import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { createPage, setup } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
  })

  it('2022-10-15 is business day', async () => {
    const page = await createPage('/')
    const text = await page.getByTestId('is-business-day').textContent()
    expect(text).toContain('true')
  })

  it('2022-11-01 is holiday', async () => {
    const page = await createPage('/')
    const text = await page.getByTestId('is-holiday').textContent()
    expect(text).toContain('true')
  })
})
