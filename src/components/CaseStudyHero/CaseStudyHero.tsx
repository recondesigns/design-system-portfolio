'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import type { Project } from '@/data/projects'

type Props = Pick<Project, 'title' | 'tagline' | 'role' | 'year' | 'scope' | 'subtitle'>

const Outer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[48]}px
    ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) => theme.spacing[48]}px
      ${({ theme }) => theme.spacing[40]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: ${({ theme }) => theme.spacing[64]}px
      ${({ theme }) => theme.spacing[48]}px
      0;
  }
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.caption}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing[32]}px;
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

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.accent};
  margin-bottom: ${({ theme }) => theme.spacing[12]}px;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.fontSize.display}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.display}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.display};
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.displayXl}px;
    line-height: ${({ theme }) => theme.lineHeight.displayXl}px;
  }
`

const SubtitleLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-top: ${({ theme }) => theme.spacing[12]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    display: none;
  }
`

const Tagline = styled.p`
  display: none;

  ${({ theme }) => theme.mediaQuery.xl} {
    display: block;
    font-family: ${({ theme }) => theme.fontFamily.display};
    font-size: ${({ theme }) => theme.fontSize.tagline}px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: ${({ theme }) => theme.lineHeight.tagline}px;
    letter-spacing: ${({ theme }) => theme.letterSpacing.tagline};
    font-style: italic;
    color: ${({ theme }) => theme.color.text.secondary};
    max-width: 640px;
    margin-top: ${({ theme }) => theme.spacing[24]}px;
  }
`

const MetaRow = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQuery.xl} {
    display: flex;
    gap: ${({ theme }) => theme.spacing[48]}px;
    margin-top: ${({ theme }) => theme.spacing[32]}px;
    padding-bottom: ${({ theme }) => theme.spacing[48]}px;
  }
`

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]}px;
`

const MetaLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelStat}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

const MetaValue = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.text.inverse};
`

const Divider = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQuery.xl} {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.color.text.secondary};
    opacity: 0.3;
  }
`

export default function CaseStudyHero({ title, tagline, role, year, scope, subtitle }: Props) {
  return (
    <Outer>
      <BackLink href="/work">← Work</BackLink>
      <Eyebrow>Case Study</Eyebrow>
      <Title>{title}</Title>
      <SubtitleLabel>{subtitle}</SubtitleLabel>
      <Tagline>{tagline}</Tagline>
      <MetaRow>
        <MetaItem>
          <MetaLabel>Role</MetaLabel>
          <MetaValue>{role}</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>Year</MetaLabel>
          <MetaValue>{year}</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>Scope</MetaLabel>
          <MetaValue>{scope}</MetaValue>
        </MetaItem>
      </MetaRow>
      <Divider />
    </Outer>
  )
}
