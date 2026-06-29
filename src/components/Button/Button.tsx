'use client'

import styled from '@emotion/styled'
import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const StyledButton = styled.button<{
  variant: ButtonVariant
  size: ButtonSize
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: 0.01em;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transition.duration.fast}ms
    ${({ theme }) => theme.transition.easing.standard};

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: ${({ theme }) => theme.opacity.muted};
    cursor: not-allowed;
  }

  ${({ variant, theme }) =>
    variant === 'primary'
      ? `
        background-color: ${theme.color.background.inverse};
        color: ${theme.color.text.inverse};
        border: none;
      `
      : `
        background-color: transparent;
        color: ${theme.color.text.primary};
        border: 1.5px solid ${theme.color.border.default};
      `}

  ${({ size, theme }) => {
    const s = theme.spacing
    const fs = theme.fontSize
    if (size === 'sm')
      return `padding: ${s[8]}px ${s[16]}px; font-size: ${fs.labelDefault}px;`
    if (size === 'lg')
      return `padding: ${s[16]}px ${s[32]}px; font-size: ${fs.bodyDefault}px;`
    return `padding: ${s[12]}px ${s[24]}px; font-size: ${fs.bodySmall}px;`
  }}
`

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  )
}
