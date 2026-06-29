import type { Preview, Decorator } from '@storybook/nextjs-vite'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { theme } from '../src/tokens/theme'
import '../src/app/globals.css'

const emotionCache = createCache({ key: 'css' })

const withEmotionTheme: Decorator = (Story) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  </CacheProvider>
)

const preview: Preview = {
  decorators: [withEmotionTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
