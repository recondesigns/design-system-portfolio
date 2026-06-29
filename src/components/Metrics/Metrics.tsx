'use client'

import styled from '@emotion/styled'
import StatItem from '@/components/StatItem'

const STATS = [
  { value: '140+', label: 'Components' },
  { value: '09', label: 'Teams' },
  { value: '06', label: 'Themes' },
  { value: '60%', label: 'Faster ship' },
] as const

const MetricsOuter = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};
`

const MetricsInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[64]}px
    ${({ theme }) => theme.spacing[24]}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[32]}px;
    padding: ${({ theme }) => theme.spacing[96]}px
      ${({ theme }) => theme.spacing[48]}px;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[32]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex: 0 0 40%;
  }
`

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.fontSize.heading1}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.heading1}px;
  color: ${({ theme }) => theme.color.text.inverse};
`

const HeadingAccent = styled.em`
  color: ${({ theme }) => theme.color.text.secondary};
  font-style: italic;
`

const BodyText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};
  max-width: 400px;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[32]}px 0;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex: 1;
  }
`

export default function Metrics() {
  return (
    <MetricsOuter>
      <MetricsInner>
        <Details>
          <Heading>
            Scale requires rigor.{' '}
            <HeadingAccent>Impact requires craft.</HeadingAccent>
          </Heading>
          <BodyText>
            I don&apos;t just build components; I orchestrate the pipeline that
            delivers them. From foundational tokens to cross-platform adoption,
            the goal is always a frictionless developer experience.
          </BodyText>
        </Details>

        <StatsGrid>
          {STATS.map(({ value, label }) => (
            <StatItem key={label} value={value} label={label} />
          ))}
        </StatsGrid>
      </MetricsInner>
    </MetricsOuter>
  )
}
