'use client'

import styled from '@emotion/styled'
import TextLink from '@/components/TextLink'
import ListItem from '@/components/ListItem'
import { projects } from '@/data/projects'

const SelectedWorkOuter = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};
`

const SelectedWorkInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[64]}px
    ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: ${({ theme }) => theme.spacing[96]}px
      ${({ theme }) => theme.spacing[48]}px;
  }
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[32]}px;
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

export default function SelectedWork() {
  return (
    <SelectedWorkOuter>
      <SelectedWorkInner>
        <SectionHeader>
          <SectionLabel>Selected work</SectionLabel>
          <TextLink href="/work" withArrow>
            View all work
          </TextLink>
        </SectionHeader>

        <DesktopList>
          {projects.map((project) => (
            <ListItem key={project.slug} size="desktop" {...project} />
          ))}
        </DesktopList>

        <MobileList>
          {projects.map((project) => (
            <ListItem key={project.slug} size="mobile" {...project} />
          ))}
        </MobileList>
      </SelectedWorkInner>
    </SelectedWorkOuter>
  )
}
