'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import type { Project } from '@/data/projects'

type Props = Pick<Project, 'nextSlug' | 'nextTitle'>

const Outer = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};
  padding: ${({ theme }) => theme.spacing[80]}px
    ${({ theme }) => theme.spacing[24]}px
    ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) => theme.spacing[80]}px
      ${({ theme }) => theme.spacing[40]}px
      ${({ theme }) => theme.spacing[48]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: ${({ theme }) => theme.spacing[96]}px
      ${({ theme }) => theme.spacing[48]}px
      ${({ theme }) => theme.spacing[64]}px;
  }
`

const Label = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[8]}px;
`

const NextLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]}px;
  text-decoration: none;

  &:hover .next-title {
    color: ${({ theme }) => theme.color.text.accent};
  }

  &:hover .next-arrow {
    color: ${({ theme }) => theme.color.text.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 4px;
    border-radius: 2px;
  }
`

const NextTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.fontSize.display}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.display}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.display};
  font-style: italic;
  color: ${({ theme }) => theme.color.text.inverse};
  transition: color ${({ theme }) => theme.transition.duration.fast}ms
    ${({ theme }) => theme.transition.easing.standard};

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.displayXl}px;
    line-height: ${({ theme }) => theme.lineHeight.displayXl}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const Arrow = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.fontSize.heading1}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.text.secondary};
  transition: color ${({ theme }) => theme.transition.duration.fast}ms
    ${({ theme }) => theme.transition.easing.standard};

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.heading0}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export default function NextProject({ nextSlug, nextTitle }: Props) {
  return (
    <Outer>
      <Label>Next Project</Label>
      <NextLink href={`/work/${nextSlug}`}>
        <NextTitle className="next-title">{nextTitle}</NextTitle>
        <Arrow className="next-arrow">→</Arrow>
      </NextLink>
    </Outer>
  )
}
