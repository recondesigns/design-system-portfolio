'use client'

import styled from '@emotion/styled'
import Text from '@/components/Text'

export interface StatItemProps {
  value: string
  label: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.color.border.inverse};
  padding-left: ${({ theme }) => theme.spacing[24]}px;
`

const LabelWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing[12]}px;
`

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <Wrapper>
      <Text variant="displayStat" as="p">
        {value}
      </Text>
      <LabelWrapper>
        <Text variant="labelStat" as="p">
          {label}
        </Text>
      </LabelWrapper>
    </Wrapper>
  )
}
