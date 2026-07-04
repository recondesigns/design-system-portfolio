'use client'

import styled from '@emotion/styled'
import ListItem from '@/components/ListItem'
import { projects } from '@/data/projects'

const WorkOuter = styled.section`
  width: 100%;
`

const WorkInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[96]}px
    ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) => theme.spacing[96]}px
      ${({ theme }) => theme.spacing[40]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: ${({ theme }) => theme.spacing[96]}px
      ${({ theme }) => theme.spacing[48]}px;
  }
`

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing[32]}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
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

const HeadingContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing[48]}px;
`

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: 72px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 66px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.display};
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.md} {
    font-size: ${({ theme }) => theme.fontSize.display}px;
    line-height: ${({ theme }) => theme.lineHeight.display}px;
  }
`

const HeadlineAccent = styled.em`
  font-style: italic;
  color: ${({ theme }) => theme.color.text.accent};
`

const BodyText = styled.p`
  margin-top: ${({ theme }) => theme.spacing[32]}px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyLead}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.bodyLead}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};

  ${({ theme }) => theme.mediaQuery.md} {
    max-width: 512px;
  }
`

const ListContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[112]}px;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};
`

const DesktopList = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQuery.md} {
    display: block;
  }
`

const MobileList = styled.div`
  display: block;

  ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`

export default function WorkList() {
  return (
    <WorkOuter>
      <WorkInner>
        <LabelRow>
          <SectionLabel>Selected work</SectionLabel>
          <SectionLabel>2022 — 2026</SectionLabel>
        </LabelRow>

        <HeadingContainer>
          <Headline>
            Four systems. <HeadlineAccent>One practice.</HeadlineAccent>
          </Headline>
          <BodyText>
            A decade of building the infrastructure behind products — the
            libraries, pipelines and documentation teams reach for every day.
            Each case study is a study in consistency at scale.
          </BodyText>
        </HeadingContainer>

        <ListContainer>
          <DesktopList>
            {projects.map((project) => (
              <ListItem
                key={project.slug}
                size="desktop"
                slug={project.slug}
                projectNumber={project.projectNumber}
                title={project.title}
                subtitle={project.tag}
                details={project.year}
              />
            ))}
          </DesktopList>
          <MobileList>
            {projects.map((project) => (
              <ListItem
                key={project.slug}
                size="mobile"
                slug={project.slug}
                projectNumber={project.projectNumber}
                title={project.title}
                subtitle={project.tag}
                details={project.year}
              />
            ))}
          </MobileList>
        </ListContainer>
      </WorkInner>
    </WorkOuter>
  )
}
