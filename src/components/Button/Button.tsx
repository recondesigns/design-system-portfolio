'use client'

import styled from '@emotion/styled'
import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'padding: 8px 16px; font-size: 12px;',
  md: 'padding: 12px 24px; font-size: 14px;',
  lg: 'padding: 16px 32px; font-size: 16px;',
}

const StyledButton = styled.button<{
  variant: ButtonVariant
  size: ButtonSize
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  letter-spacing: 0.01em;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 150ms ease;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant }) =>
    variant === 'primary'
      ? `
        background-color: #1a2b1f;
        color: #e8e0d0;
        border: none;
      `
      : `
        background-color: transparent;
        color: #1a2b1f;
        border: 1.5px solid #1a2b1f;
      `}

  ${({ size }) => sizeStyles[size]}
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
