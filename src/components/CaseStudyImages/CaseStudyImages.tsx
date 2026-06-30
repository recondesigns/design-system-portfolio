'use client'

import styled from '@emotion/styled'

const HeroImageWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 ${({ theme }) => theme.spacing[40]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: 0 ${({ theme }) => theme.spacing[48]}px;
  }
`

const HeroImagePlaceholder = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.border.link};
  aspect-ratio: 3 / 2;

  ${({ theme }) => theme.mediaQuery.md} {
    aspect-ratio: 3 / 1;
  }
`

const MockupsWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[24]}px
    ${({ theme }) => theme.spacing[64]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 ${({ theme }) => theme.spacing[40]}px
      ${({ theme }) => theme.spacing[64]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: 0 ${({ theme }) => theme.spacing[48]}px
      ${({ theme }) => theme.spacing[96]}px;
  }
`

const MockupsPlaceholder = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.border.link};
  border-radius: ${({ theme }) => theme.radius[6]}px;
  aspect-ratio: 3 / 2;

  ${({ theme }) => theme.mediaQuery.md} {
    aspect-ratio: 3 / 1;
  }
`

export function CaseStudyHeroImage() {
  return (
    <HeroImageWrapper>
      <HeroImagePlaceholder aria-hidden="true" />
    </HeroImageWrapper>
  )
}

export function CaseStudyMockups() {
  return (
    <MockupsWrapper>
      <MockupsPlaceholder aria-hidden="true" />
    </MockupsWrapper>
  )
}
