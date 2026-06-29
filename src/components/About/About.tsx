'use client'

import styled from '@emotion/styled'
import CapabilityItem from '@/components/CapabilityItem'

const CAPABILITIES = [
  'Scalable design systems',
  'Cross-platform component libraries',
  'Automated token pipelines',
  'Accessible-by-default products',
  'Figma → code workflows',
  'Documentation that drives adoption',
] as const

const AboutOuter = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};
`

const AboutInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[64]}px
    ${({ theme }) => theme.spacing[24]}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[32]}px;
    padding: ${({ theme }) => theme.spacing[96]}px
      ${({ theme }) => theme.spacing[48]}px;
  }
`

const BioColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[32]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex: 0 0 40%;
  }
`

const SectionLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

const BioHeading = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.fontSize.heading1}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.heading1}px;
  color: ${({ theme }) => theme.color.text.inverse};
`

const BioBody = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};
`

const CapabilitiesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex: 0 0 40%;
    margin-left: auto;
  }
`

export default function About() {
  return (
    <AboutOuter>
      <AboutInner>
        <BioColumn>
          <SectionLabel>About</SectionLabel>
          <BioHeading>
            Eight years bridging design and engineering.
          </BioHeading>
          <BioBody>
            My background as both a UX designer and a Frontend Engineer gives
            me a unique perspective on design systems. I don&apos;t just care
            about pixel perfection; I care about how APIs feel to consume, how
            tokens scale across codebases, and how teams govern change. I
            regularly write and speak about token pipelines, systems
            governance, and accessible components.
          </BioBody>
        </BioColumn>

        <CapabilitiesColumn>
          <SectionLabel>Capabilities</SectionLabel>
          {CAPABILITIES.map((item) => (
            <CapabilityItem key={item} label={item} />
          ))}
        </CapabilitiesColumn>
      </AboutInner>
    </AboutOuter>
  )
}
