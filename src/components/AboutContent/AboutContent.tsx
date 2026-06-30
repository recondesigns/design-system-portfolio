'use client'

import styled from '@emotion/styled'

const VALUES = [
  {
    number: '01',
    heading: 'A system is a product',
    body: 'It has users, a roadmap, and a duty of care. Treating it like internal plumbing is how systems die.',
  },
  {
    number: '02',
    heading: 'Consistency is a feature',
    body: 'Predictability lets teams move fast without thinking. The best system is the one nobody has to argue about.',
  },
  {
    number: '03',
    heading: 'Accessibility is the floor',
    body: "Not a phase, not a backlog item. If it isn't accessible, it isn't done — and CI should say so.",
  },
  {
    number: '04',
    heading: 'Adoption over perfection',
    body: 'A system unused is a system that failed. Documentation and DX are where adoption is won or lost.',
  },
] as const

const CAPABILITIES = [
  'Design system architecture',
  'Design tokens & theming',
  'Component API design',
  'Token pipelines (DTCG)',
  'Accessibility (WCAG 2.2)',
  'Documentation & DX',
  'Systems governance',
  'Figma → code workflows',
] as const

const RECOGNITION = [
  'Speaker · Config 2025',
  "Author · 'Tokens at Scale'",
  'Mentor · ADPList',
  'Jury · Awwwards 2024',
] as const

const EXPERIENCE = [
  {
    title: 'Principal Design Systems Engineer',
    company: 'Northwind',
    description: 'Leading Helix across web, iOS and Android.',
  },
  {
    title: 'Staff Design Technologist',
    company: 'Cobalt Health',
    description: 'Token pipelines, docs and accessibility at scale.',
  },
  {
    title: 'Senior Product Designer',
    company: 'Meridian',
    description: 'Where design and engineering finally clicked into one craft.',
  },
  {
    title: 'UX Designer',
    company: 'Studio Verres',
    description: 'Agency years — many products, many constraints.',
  },
] as const

// ---- Layout ----

const Outer = styled.section`
  width: 100%;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[48]}px ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) => theme.spacing[64]}px ${({ theme }) => theme.spacing[40]}px
      ${({ theme }) => theme.spacing[96]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: ${({ theme }) => theme.spacing[48]}px;
  }
`

// ---- Hero ----

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[40]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[40]}px;
  }
`

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    flex: 1;
    gap: ${({ theme }) => theme.spacing[32]}px;
  }
`

const RoleLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.accent};
`

const HeroHeadline = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-style: normal;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.display};
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.md} {
    font-size: 60px;
    line-height: 64px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: 88px;
    line-height: 88px;
  }
`

const HeroAccent = styled.em`
  font-style: italic;
  color: ${({ theme }) => theme.color.text.accent};
`

const HeroBodyStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[20]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    gap: ${({ theme }) => theme.spacing[24]}px;
  }
`

const HeroBody = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyLead}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.bodyLead}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};
`

const PortraitPlaceholder = styled.div`
  width: 100%;
  height: 320px;
  border-radius: ${({ theme }) => theme.radius[6]}px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.border.link};
  flex-shrink: 0;

  ${({ theme }) => theme.mediaQuery.md} {
    width: 280px;
    height: 350px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    width: 456px;
    height: 570px;
  }
`

// ---- Shared ----

const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

// ---- Values ----

const ValuesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[32]}px;
  margin-top: ${({ theme }) => theme.spacing[80]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    gap: ${({ theme }) => theme.spacing[48]}px;
    margin-top: ${({ theme }) => theme.spacing[120]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    margin-top: ${({ theme }) => theme.spacing[96]}px;
  }
`

const ValuesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[40]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${({ theme }) => theme.spacing[40]}px;
    row-gap: ${({ theme }) => theme.spacing[48]}px;
  }
`

const ValueItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]}px;
  padding-top: ${({ theme }) => theme.spacing[24]}px;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};
`

const ValueNumber = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.accent};
`

const ValueHeading = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-style: normal;
  font-size: 32px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.md} {
    font-size: ${({ theme }) => theme.fontSize.heading1}px;
    line-height: ${({ theme }) => theme.lineHeight.heading1}px;
  }
`

const ValueBody = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodySmall}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};

  ${({ theme }) => theme.mediaQuery.md} {
    font-size: ${({ theme }) => theme.fontSize.bodyDefault}px;
    line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  }
`

// ---- Capabilities + Recognition ----

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[64]}px;
  margin-top: ${({ theme }) => theme.spacing[80]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    gap: ${({ theme }) => theme.spacing[80]}px;
    margin-top: ${({ theme }) => theme.spacing[120]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
    margin-top: ${({ theme }) => theme.spacing[96]}px;
  }
`

const CapabilitiesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    gap: ${({ theme }) => theme.spacing[32]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    flex: 1;
  }
`

const CapabilitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[12]}px;
`

const CapabilityChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[8]}px ${({ theme }) => theme.spacing[20]}px;
  border: 1px solid ${({ theme }) => theme.color.border.inverse};
  border-radius: ${({ theme }) => theme.radius.full}px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodySmall}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};
  white-space: nowrap;
`

const RecognitionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    gap: ${({ theme }) => theme.spacing[32]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    width: 352px;
    flex-shrink: 0;
  }
`

const RecognitionList = styled.div`
  display: flex;
  flex-direction: column;
`

const RecognitionItem = styled.p`
  padding: ${({ theme }) => theme.spacing[16]}px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyLead}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.bodyLead}px;
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.md} {
    font-size: ${({ theme }) => theme.fontSize.bodyDefault}px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  }
`

// ---- Experience ----

const ExperienceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]}px;
  margin-top: ${({ theme }) => theme.spacing[80]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    gap: ${({ theme }) => theme.spacing[48]}px;
    margin-top: ${({ theme }) => theme.spacing[120]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    margin-top: ${({ theme }) => theme.spacing[96]}px;
  }
`

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
`

const ExperienceRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]}px;
  padding: ${({ theme }) => theme.spacing[32]}px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};

  ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[32]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    gap: ${({ theme }) => theme.spacing[40]}px;
    padding: ${({ theme }) => theme.spacing[40]}px 0;
  }
`

const ExperienceTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-style: normal;
  font-size: 20px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.md} {
    flex: 1;
    font-size: 22px;
    line-height: 28px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: 27px;
  }
`

const ExperienceCompany = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.accent};

  ${({ theme }) => theme.mediaQuery.md} {
    width: 140px;
    flex-shrink: 0;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    width: 180px;
  }
`

const ExperienceDescription = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodySmall}px;
  color: ${({ theme }) => theme.color.text.secondary};

  ${({ theme }) => theme.mediaQuery.md} {
    width: 220px;
    flex-shrink: 0;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    width: 400px;
  }
`

// ---- Component ----

export default function AboutContent() {
  return (
    <Outer>
      <Inner>
        <HeroSection>
          <HeroTextWrapper>
            <RoleLabel>Design Systems Engineer &amp; UX Designer</RoleLabel>
            <HeroHeadline>
              I build the <HeroAccent>connective tissue</HeroAccent> between
              design and engineering.
            </HeroHeadline>
            <HeroBodyStack>
              <HeroBody>
                I&apos;m Iris Calderon — half engineer, half designer, fully
                obsessed with consistency at scale. For nearly a decade I&apos;ve
                built the libraries, token pipelines and documentation that let
                product teams ship faster without drifting apart.
              </HeroBody>
              <HeroBody>
                My work lives in the gap most people walk past: the moment a
                design decision becomes code, and the discipline required to keep
                it true across platforms, themes and teams.
              </HeroBody>
            </HeroBodyStack>
          </HeroTextWrapper>
          <PortraitPlaceholder aria-hidden="true" />
        </HeroSection>

        <ValuesSection>
          <SectionLabel>How I Think</SectionLabel>
          <ValuesGrid>
            {VALUES.map((value) => (
              <ValueItem key={value.number}>
                <ValueNumber>{value.number}</ValueNumber>
                <ValueHeading>{value.heading}</ValueHeading>
                <ValueBody>{value.body}</ValueBody>
              </ValueItem>
            ))}
          </ValuesGrid>
        </ValuesSection>

        <SkillsSection>
          <CapabilitiesBlock>
            <SectionLabel>Capabilities</SectionLabel>
            <CapabilitiesList>
              {CAPABILITIES.map((capability) => (
                <CapabilityChip key={capability}>{capability}</CapabilityChip>
              ))}
            </CapabilitiesList>
          </CapabilitiesBlock>
          <RecognitionBlock>
            <SectionLabel>Recognition</SectionLabel>
            <RecognitionList>
              {RECOGNITION.map((item) => (
                <RecognitionItem key={item}>{item}</RecognitionItem>
              ))}
            </RecognitionList>
          </RecognitionBlock>
        </SkillsSection>

        <ExperienceSection>
          <SectionLabel>Experience</SectionLabel>
          <ExperienceList>
            {EXPERIENCE.map((entry) => (
              <ExperienceRow key={entry.company}>
                <ExperienceTitle>{entry.title}</ExperienceTitle>
                <ExperienceCompany>{entry.company}</ExperienceCompany>
                <ExperienceDescription>{entry.description}</ExperienceDescription>
              </ExperienceRow>
            ))}
          </ExperienceList>
        </ExperienceSection>
      </Inner>
    </Outer>
  )
}
