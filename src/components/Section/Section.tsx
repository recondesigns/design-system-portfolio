'use client'

import type { ElementType } from 'react'
import styled from '@emotion/styled'

export interface SectionProps {
  as?: ElementType
  borderTop?: boolean
  children: React.ReactNode
  className?: string
}

const Outer = styled.div<{ $borderTop: boolean }>`
  width: 100%;
  border-top: ${({ $borderTop, theme }) =>
    $borderTop ? `1px solid ${theme.color.border.inverse}` : 'none'};
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 ${({ theme }) => theme.spacing[48]}px;
  }
`

export default function Section({
  as,
  borderTop = true,
  children,
  className,
}: SectionProps) {
  return (
    <Outer
      $borderTop={borderTop}
      {...(as !== undefined ? { as } : {})}
      {...(className !== undefined ? { className } : {})}
    >
      <Inner>{children}</Inner>
    </Outer>
  )
}
