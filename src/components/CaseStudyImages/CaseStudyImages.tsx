'use client'

import Image from 'next/image'
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

const StyledHeroImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`

interface HeroImageProps {
  src?: string | undefined
  alt?: string
}

export function CaseStudyHeroImage({ src, alt = '' }: HeroImageProps) {
  return (
    <HeroImageWrapper>
      {src ? (
        <StyledHeroImage src={src} alt={alt} width={1184} height={592} priority />
      ) : (
        <HeroImagePlaceholder aria-hidden="true" />
      )}
    </HeroImageWrapper>
  )
}
