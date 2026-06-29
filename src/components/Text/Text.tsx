'use client'

import type { ElementType } from 'react'
import styled from '@emotion/styled'
import type { Theme } from '@/tokens/theme'

export type TextVariant =
  | 'display'
  | 'displayStat'
  | 'heading1'
  | 'bodyLead'
  | 'bodyEmphasis'
  | 'bodyDefault'
  | 'bodySmall'
  | 'labelDefault'
  | 'labelEyebrow'
  | 'labelTag'
  | 'labelStat'

export type TextColor = keyof Theme['color']['text']

export interface TextProps {
  variant: TextVariant
  as?: ElementType
  color?: TextColor
  italic?: boolean
  className?: string
  children: React.ReactNode
}

function getVariantStyles(variant: TextVariant, theme: Theme): string {
  const { fontSize, lineHeight, fontWeight, fontFamily, letterSpacing } = theme

  const base: Record<TextVariant, string> = {
    display: `
      font-family: ${fontFamily.display};
      font-size: ${fontSize.display}px;
      font-weight: ${fontWeight.light};
      line-height: ${lineHeight.display}px;
      letter-spacing: ${letterSpacing.display};
    `,
    displayStat: `
      font-family: ${fontFamily.display};
      font-size: ${fontSize.displayStat}px;
      font-weight: ${fontWeight.light};
      line-height: ${lineHeight.displayStat}px;
      letter-spacing: ${letterSpacing.displayStat};
    `,
    heading1: `
      font-family: ${fontFamily.display};
      font-size: ${fontSize.heading1}px;
      font-weight: ${fontWeight.light};
      line-height: ${lineHeight.heading1}px;
    `,
    bodyLead: `
      font-family: ${fontFamily.body};
      font-size: ${fontSize.bodyLead}px;
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.bodyLead}px;
    `,
    bodyEmphasis: `
      font-family: ${fontFamily.body};
      font-size: ${fontSize.bodyEmphasis}px;
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.bodyDefault}px;
    `,
    bodyDefault: `
      font-family: ${fontFamily.body};
      font-size: ${fontSize.bodyDefault}px;
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.bodyDefault}px;
    `,
    bodySmall: `
      font-family: ${fontFamily.body};
      font-size: ${fontSize.bodySmall}px;
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.bodySmall}px;
    `,
    labelDefault: `
      font-family: ${fontFamily.body};
      font-size: ${fontSize.labelDefault}px;
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.labelDefault}px;
      letter-spacing: ${letterSpacing.label};
      text-transform: uppercase;
    `,
    labelEyebrow: `
      font-family: ${fontFamily.body};
      font-size: ${fontSize.labelEyebrow}px;
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.labelEyebrow}px;
      letter-spacing: ${letterSpacing.labelEyebrow};
      text-transform: uppercase;
    `,
    labelTag: `
      font-family: ${fontFamily.body};
      font-size: ${fontSize.labelTag}px;
      font-weight: ${fontWeight.semiBold};
      line-height: ${lineHeight.labelTag}px;
      letter-spacing: ${letterSpacing.label};
      text-transform: uppercase;
    `,
    labelStat: `
      font-family: ${fontFamily.body};
      font-size: ${fontSize.labelStat}px;
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.labelStat}px;
      letter-spacing: ${letterSpacing.label};
      text-transform: uppercase;
    `,
  }

  return base[variant]
}

const defaultColorByVariant: Record<TextVariant, TextColor> = {
  display: 'inverse',
  displayStat: 'accent',
  heading1: 'inverse',
  bodyLead: 'inverse',
  bodyEmphasis: 'bodyInverse',
  bodyDefault: 'bodyInverse',
  bodySmall: 'secondary',
  labelDefault: 'secondary',
  labelEyebrow: 'accent',
  labelTag: 'accent',
  labelStat: 'secondary',
}

const StyledText = styled.span<{
  $variant: TextVariant
  $color: TextColor
  $italic: boolean
}>`
  ${({ $variant, theme }) => getVariantStyles($variant, theme)}
  color: ${({ $color, theme }) => theme.color.text[$color]};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
`

export default function Text({
  variant,
  as,
  color,
  italic = false,
  className,
  children,
}: TextProps) {
  const resolvedColor = color ?? defaultColorByVariant[variant]
  const resolvedAs = as ?? defaultElementByVariant[variant]

  return (
    <StyledText
      as={resolvedAs}
      $variant={variant}
      $color={resolvedColor}
      $italic={italic}
      className={className}
    >
      {children}
    </StyledText>
  )
}

const defaultElementByVariant: Record<TextVariant, ElementType> = {
  display: 'h1',
  displayStat: 'p',
  heading1: 'h2',
  bodyLead: 'p',
  bodyEmphasis: 'p',
  bodyDefault: 'p',
  bodySmall: 'p',
  labelDefault: 'span',
  labelEyebrow: 'span',
  labelTag: 'span',
  labelStat: 'span',
}
