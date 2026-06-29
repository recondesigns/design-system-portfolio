import styled from '@emotion/styled'
import Text from '@/components/Text'

export interface CapabilityItemProps {
  label: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[24]}px;
  padding-top: ${({ theme }) => theme.spacing[16]}px;
  padding-bottom: ${({ theme }) => theme.spacing[16]}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
  width: 100%;
`

const Bullet = styled.div`
  width: ${({ theme }) => theme.size.bullet}px;
  height: ${({ theme }) => theme.size.bullet}px;
  min-width: ${({ theme }) => theme.size.bullet}px;
  border-radius: ${({ theme }) => theme.radius.full}px;
  background-color: ${({ theme }) => theme.color.interactive.accent};
`

export default function CapabilityItem({ label }: CapabilityItemProps) {
  return (
    <Wrapper>
      <Bullet />
      <Text variant="bodySmall" color="bodyInverse" as="span">
        {label}
      </Text>
    </Wrapper>
  )
}
