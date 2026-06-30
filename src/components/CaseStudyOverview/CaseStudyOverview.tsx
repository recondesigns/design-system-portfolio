'use client'

import styled from '@emotion/styled'
import type { Project } from '@/data/projects'

type Props = Pick<Project, 'overview' | 'metrics'>

const Outer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[64]}px
    ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) => theme.spacing[64]}px
      ${({ theme }) => theme.spacing[40]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: ${({ theme }) => theme.spacing[96]}px
      ${({ theme }) => theme.spacing[48]}px;
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
  margin-bottom: ${({ theme }) => theme.spacing[16]}px;
`

const OverviewText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyLead}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.bodyLead}px;
  color: ${({ theme }) => theme.color.text.inverse};
  margin-bottom: ${({ theme }) => theme.spacing[32]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.bodyXl}px;
    line-height: ${({ theme }) => theme.lineHeight.bodyXl}px;
    margin-bottom: ${({ theme }) => theme.spacing[48]}px;
  }
`

const MetricsRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[12]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    gap: ${({ theme }) => theme.spacing[24]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    gap: ${({ theme }) => theme.spacing[32]}px;
  }
`

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]}px;
  flex: 1 0 0;
  min-width: 0;
`

const MetricValue = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.fontSize.displayStat}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.displayStat}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.displayStat};
  color: ${({ theme }) => theme.color.text.accent};

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: 72px;
    line-height: 72px;
  }
`

const MetricLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelStat}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelStat}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

export default function CaseStudyOverview({ overview, metrics }: Props) {
  return (
    <Outer>
      <SectionLabel>Overview</SectionLabel>
      <OverviewText>{overview}</OverviewText>
      <MetricsRow>
        {metrics.map(({ value, label }) => (
          <Metric key={label}>
            <MetricValue>{value}</MetricValue>
            <MetricLabel>{label}</MetricLabel>
          </Metric>
        ))}
      </MetricsRow>
    </Outer>
  )
}
