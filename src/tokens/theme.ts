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
  hover: 0.8,
  nav: 0.85,
} as const

export const spacing = {
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  64: 64,
  80: 80,
  96: 96,
  128: 128,
  129: 129,
} as const

export const radius = {
  6: 6,
  32: 32,
  full: 9999,
} as const

export const size = {
  icon: 16,
  iconSm: 12,
  bullet: 8,
  iconButton: 32,
} as const

export const transition = {
  duration: {
    fast: 150,
    base: 250,
    slow: 300,
  },
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const

export const zIndex = {
  header: 100,
  overlay: 200,
  sidebar: 210,
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
  spacing,
  radius,
  size,
  transition,
  zIndex,
} as const

export type Theme = typeof theme
