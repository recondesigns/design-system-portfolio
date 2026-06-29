'use client'

import styled from '@emotion/styled'
import TextLink from '@/components/TextLink'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stedman/' },
  { label: 'Github', href: 'https://github.com/recondesigns' },
  { label: 'Figma', href: 'https://www.figma.com/@thestedman' },
] as const

export interface SocialLinksProps {
  className?: string
}

const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[32]}px;
  align-items: center;
`

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <Wrapper className={className}>
      {SOCIAL_LINKS.map(({ label, href }) => (
        <TextLink key={label} href={href} external>
          {label}
        </TextLink>
      ))}
    </Wrapper>
  )
}
