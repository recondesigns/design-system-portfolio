'use client'

import styled from '@emotion/styled'
import type { TablerIcon } from '@tabler/icons-react'
import Icon from '@/components/Icon'

export type IconButtonState = 'default' | 'accent'
export type IconButtonAs = 'button' | 'span'

export interface IconButtonProps {
  'aria-label': string
  icon: TablerIcon
  state?: IconButtonState
  as?: IconButtonAs
  onClick?: () => void
  className?: string
}

const StyledIconButton = styled.button<{ $state: IconButtonState }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.size.iconButton}px;
  height: ${({ theme }) => theme.size.iconButton}px;
  min-width: ${({ theme }) => theme.size.iconButton}px;
  border-radius: ${({ theme }) => theme.radius.full}px;
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transition.duration.base}ms
      ${({ theme }) => theme.transition.easing.standard},
    border-color ${({ theme }) => theme.transition.duration.base}ms
      ${({ theme }) => theme.transition.easing.standard};

  color: ${({ theme }) => theme.color.text.inverse};
  background-color: ${({ $state, theme }) =>
    $state === 'accent' ? theme.color.interactive.accent : 'transparent'};
  border: ${({ $state, theme }) =>
    $state === 'accent'
      ? 'none'
      : `1px solid ${theme.color.border.inverse}`};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export default function IconButton({
  'aria-label': ariaLabel,
  icon,
  state = 'default',
  as = 'button',
  onClick,
  className,
}: IconButtonProps) {
  const iconColor = state === 'accent' ? '#ffffff' : undefined

  return (
    <StyledIconButton
      as={as}
      $state={state}
      aria-label={ariaLabel}
      {...(onClick !== undefined ? { onClick } : {})}
      className={className}
    >
      <Icon icon={icon} size="icon" {...(iconColor !== undefined ? { color: iconColor } : {})} />
    </StyledIconButton>
  )
}
