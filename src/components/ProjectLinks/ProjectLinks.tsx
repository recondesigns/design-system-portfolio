'use client'

import styled from '@emotion/styled'
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandStorybook,
  type TablerIcon,
} from '@tabler/icons-react'
import TextLink from '@/components/TextLink'
import type { ProjectLink } from '@/lib/content'

export interface ProjectLinksProps {
  links?: ProjectLink[] | undefined
  className?: string
}

const ICON_MATCHERS: [RegExp, TablerIcon][] = [
  [/figma/i, IconBrandFigma],
  [/git ?hub/i, IconBrandGithub],
  [/storybook/i, IconBrandStorybook],
]

function iconForLabel(label: string): TablerIcon | undefined {
  return ICON_MATCHERS.find(([pattern]) => pattern.test(label))?.[1]
}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[12]}px;
  margin-top: ${({ theme }) => theme.spacing[24]}px;
`

const Chip = styled(TextLink)`
  padding: ${({ theme }) => theme.spacing[8]}px ${({ theme }) => theme.spacing[16]}px;
  border: 1px solid ${({ theme }) => theme.color.border.inverse};
  border-radius: ${({ theme }) => theme.radius.full}px;
  color: ${({ theme }) => theme.color.text.inverse};
  text-transform: none;
  letter-spacing: normal;

  &:hover {
    border-color: ${({ theme }) => theme.color.interactive.accent};
    color: ${({ theme }) => theme.color.interactive.accent};
  }
`

export default function ProjectLinks({ links, className }: ProjectLinksProps) {
  if (!links || links.length === 0) return null

  return (
    <Row className={className}>
      {links.slice(0, 3).map(({ label, url }) => (
        <Chip key={label} href={url} external icon={iconForLabel(label)}>
          {label}
        </Chip>
      ))}
    </Row>
  )
}
