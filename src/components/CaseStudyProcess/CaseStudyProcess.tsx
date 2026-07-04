'use client'

import styled from '@emotion/styled'
import type { Project } from '@/data/projects'

type Props = Pick<Project, 'phases'>

const Outer = styled.section`
  width: 100%;
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

const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[32]}px;
`

const PhaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[32]}px;
`

const Phase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]}px;
  padding-bottom: ${({ theme }) => theme.spacing[32]}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};

  ${({ theme }) => theme.mediaQuery.xl} {
    gap: ${({ theme }) => theme.spacing[16]}px;
    padding-bottom: ${({ theme }) => theme.spacing[48]}px;
  }
`

const PhaseHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[12]}px;
`

const PhaseNumber = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelStat}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.accent};
`

const PhaseTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.fontSize.heading1}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.heading1}px;
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.heading0}px;
    line-height: ${({ theme }) => theme.lineHeight.heading0}px;
  }
`

const PhaseBody = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.bodyLead}px;
    line-height: ${({ theme }) => theme.lineHeight.bodyLead}px;
  }
`

export default function CaseStudyProcess({ phases }: Props) {
  return (
    <Outer>
      <SectionLabel>Process</SectionLabel>
      <PhaseList>
        {phases.map((phase) => (
          <Phase key={phase.number}>
            <PhaseHeader>
              <PhaseNumber>{phase.number}</PhaseNumber>
              <PhaseTitle>{phase.title}</PhaseTitle>
            </PhaseHeader>
            <PhaseBody>{phase.body}</PhaseBody>
          </Phase>
        ))}
      </PhaseList>
    </Outer>
  )
}
