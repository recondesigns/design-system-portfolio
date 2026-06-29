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

const StyledAnchor = styled.a<{ $underline: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]}px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  text-decoration: none;
  border-bottom: ${({ $underline, theme }) =>
    $underline ? `1px solid ${theme.color.border.inverse}` : 'none'};
  padding-bottom: ${({ $underline }) => ($underline ? '2px' : '0')};
  transition: color ${({ theme }) => theme.transition.duration.fast}ms
    ${({ theme }) => theme.transition.easing.standard};

  &:hover {
    color: ${({ theme }) => theme.color.text.inverse};
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
  const sharedProps = {
    $underline: underline,
    className,
  }

  const content = (
    <>
      {children}
      {withArrow && <Icon icon={IconArrowUpRight} size="iconSm" />}
    </>
  )

  if (external) {
    return (
      <StyledAnchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...sharedProps}
      >
        {content}
      </StyledAnchor>
    )
  }

  return (
    <StyledAnchor as={Link} href={href} {...sharedProps}>
      {content}
    </StyledAnchor>
  )
}
