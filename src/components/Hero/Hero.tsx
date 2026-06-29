'use client'

import styled from '@emotion/styled'
import SocialLinks from '@/components/SocialLinks'

const HeroOuter = styled.section`
  width: 100%;
`

const HeroInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[48]}px
    ${({ theme }) => theme.spacing[24]}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[32]}px;
    padding: ${({ theme }) => theme.spacing[128]}px
      ${({ theme }) => theme.spacing[48]}px
      ${({ theme }) => theme.spacing[96]}px;
  }
`

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex: 0 0 57%;
  }
`

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.accent};
`

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 68px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.display};
  color: ${({ theme }) => theme.color.text.inverse};
  margin-top: ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    font-size: 80px;
    line-height: 84px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.display}px;
    line-height: ${({ theme }) => theme.lineHeight.display}px;
  }
`

const HeadlineAccent = styled.em`
  color: ${({ theme }) => theme.color.text.accent};
  font-style: italic;
`

const BodyRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[32]}px;
  margin-top: ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[64]}px;
    margin-top: ${({ theme }) => theme.spacing[80]}px;
  }
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};
  max-width: 380px;
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]}px;
`

const MetaLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

const ImageColumn = styled.div`
  flex-shrink: 0;
  width: 100%;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex: 0 0 40%;
  }
`

const Portrait = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: ${({ theme }) => theme.radius[6]}px;
  background-color: ${({ theme }) => theme.color.border.link};
`

export default function Hero() {
  return (
    <HeroOuter>
      <HeroInner>
        <TextColumn>
          <Eyebrow>Design Systems Engineer &amp; UX Designer</Eyebrow>
          <Headline>
            I build the <HeadlineAccent>systems</HeadlineAccent> behind the
            products.
          </Headline>
          <BodyRow>
            <Body>
              Component libraries, token pipelines, and the documentation that
              makes them stick. Half engineer, half designer — fully obsessed
              with consistency at scale.
            </Body>
            <Meta>
              <MetaLabel>Texas · Remote</MetaLabel>
              <MetaLabel>Design systems · UX Design</MetaLabel>
              <SocialLinks />
            </Meta>
          </BodyRow>
        </TextColumn>

        <ImageColumn>
          <Portrait />
        </ImageColumn>
      </HeroInner>
    </HeroOuter>
  )
}
