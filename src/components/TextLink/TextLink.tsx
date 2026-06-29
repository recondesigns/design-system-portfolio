'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import { IconArrowUpRight } from '@tabler/icons-react'
import Icon from '@/components/Icon'

export interface TextLinkProps {
  href: string
  external?: boolean
  withArrow?: boolean
  underline?: boolean
  className?: string
  children: React.ReactNode
}

const StyledAnchor = styled.a<{ $external: boolean; $underline: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]}px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.duration.fast}ms
    ${({ theme }) => theme.transition.easing.standard};

  ${({ $external, $underline, theme }) =>
    $external
      ? `
    color: ${theme.color.text.inverse};
    border-bottom: 1px solid ${theme.color.border.link};
    padding-bottom: 2px;
  `
      : `
    letter-spacing: ${theme.letterSpacing.label};
    text-transform: uppercase;
    color: ${theme.color.text.secondary};
    border-bottom: ${$underline ? `1px solid ${theme.color.border.inverse}` : 'none'};
    padding-bottom: ${$underline ? '2px' : '0'};
  `}

  &:hover {
    color: ${({ theme }) => theme.color.text.inverse};
    border-bottom-color: transparent;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
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
      <StyledAnchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        $external
        $underline={underline}
        className={className}
      >
        {content}
      </StyledAnchor>
    )
  }

  return (
    <StyledAnchor
      as={Link}
      href={href}
      $external={false}
      $underline={underline}
      className={className}
    >
      {content}
    </StyledAnchor>
  )
}
