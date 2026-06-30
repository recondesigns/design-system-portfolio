'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import { IconArrowUpRight } from '@tabler/icons-react'
import Icon from '@/components/Icon'
import type { Theme } from '@/tokens/theme'

export interface TextLinkProps {
  href: string
  external?: boolean
  withArrow?: boolean
  underline?: boolean
  className?: string
  children: React.ReactNode
}

const sharedBase = (theme: Theme) => `
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[4]}px;
  font-family: ${theme.fontFamily.body};
  font-size: ${theme.fontSize.labelDefault}px;
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.lineHeight.labelDefault}px;
  text-decoration: none;
  transition: color ${theme.transition.duration.fast}ms ${theme.transition.easing.standard};

  &:hover {
    color: ${theme.color.text.inverse};
    border-bottom-color: transparent;
  }

  &:focus-visible {
    outline: 2px solid ${theme.color.interactive.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const InternalLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== '$underline',
})<{ $underline: boolean }>`
  ${({ theme }) => sharedBase(theme)}
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  border-bottom: ${({ $underline, theme }) =>
    $underline ? `1px solid ${theme.color.border.inverse}` : 'none'};
  padding-bottom: ${({ $underline }) => ($underline ? '2px' : '0')};
`

const ExternalAnchor = styled.a`
  ${({ theme }) => sharedBase(theme)}
  color: ${({ theme }) => theme.color.text.inverse};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.link};
  padding-bottom: 2px;
`

export default function TextLink({
  href,
  external = false,
  withArrow = false,
  underline = false,
  className,
  children,
}: TextLinkProps) {
  const showArrow = withArrow || external

  const content = (
    <>
      {children}
      {showArrow && <Icon icon={IconArrowUpRight} size="iconSm" />}
    </>
  )

  if (external) {
    return (
      <ExternalAnchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </ExternalAnchor>
    )
  }

  return (
    <InternalLink href={href} $underline={underline} className={className}>
      {content}
    </InternalLink>
  )
}
