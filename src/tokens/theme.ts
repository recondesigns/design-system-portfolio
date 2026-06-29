import { primitives, color } from './colors'
import {
  fontFamily,
  fontStyle,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
} from './typography'
import { breakpoints, mediaQuery } from './breakpoints'

export const opacity = {
  muted: 0.5,
  nav: 0.85,
} as const

export const theme = {
  primitives,
  color,
  opacity,
  fontFamily,
  fontStyle,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  breakpoints,
  mediaQuery,
} as const

export type Theme = typeof theme
