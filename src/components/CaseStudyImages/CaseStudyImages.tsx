'use client'

import styled from '@emotion/styled'

const HeroImagePlaceholder = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.border.link};
  aspect-ratio: 390 / 440;

  ${({ theme }) => theme.mediaQuery.md} {
    aspect-ratio: 768 / 560;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    aspect-ratio: 1280 / 720;
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
  aspect-ratio: 4 / 3;

  ${({ theme }) => theme.mediaQuery.xl} {
    aspect-ratio: 16 / 7;
  }
`

export function CaseStudyHeroImage() {
  return <HeroImagePlaceholder aria-hidden="true" />
}

export function CaseStudyMockups() {
  return (
    <MockupsWrapper>
      <MockupsPlaceholder aria-hidden="true" />
    </MockupsWrapper>
  )
}
