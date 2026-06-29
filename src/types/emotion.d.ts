import type { Theme as AppTheme } from '../tokens/theme'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Theme extends AppTheme {}
}
