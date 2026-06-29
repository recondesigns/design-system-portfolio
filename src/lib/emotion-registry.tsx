'use client'

import { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import type { EmotionCache } from '@emotion/cache'
import { theme } from '@/tokens/theme'

function createEmotionCache(): EmotionCache {
  const cache = createCache({ key: 'css' })
  cache.compat = true
  return cache
}

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [{ cache, flush }] = useState(() => {
    const cache = createEmotionCache()
    const prevInsert = cache.insert.bind(cache)
    const inserted: string[] = []

    cache.insert = (...args) => {
      const [, serialized] = args
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }

    return {
      cache,
      flush: () => {
        const names = [...inserted]
        inserted.length = 0
        return names
      },
    }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null
    const styles = names.map((name) => cache.inserted[name]).join('')
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}
