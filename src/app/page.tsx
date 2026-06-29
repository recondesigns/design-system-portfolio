'use client'

import styled from '@emotion/styled'
import Button from '@/components/Button'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  padding: 0 64px;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.fontSize.display}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.display}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.display};
  color: ${({ theme }) => theme.color.text.primary};
  margin: 0 0 24px;
`

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyLead}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodyLead}px;
  color: ${({ theme }) => theme.color.text.secondary};
  margin: 0 0 48px;
  max-width: 480px;
`

export default function Home() {
  return (
    <Main>
      <Title>Design Systems Portfolio</Title>
      <Subtitle>
        A showcase of component architecture, design tokens, and the craft of
        building scalable UI systems.
      </Subtitle>
      <Button size="lg">View Work</Button>
    </Main>
  )
}
