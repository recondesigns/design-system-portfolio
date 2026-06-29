import Link from 'next/link'
import styled from '@emotion/styled'
import { IconArrowUpRight } from '@tabler/icons-react'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

export interface SidebarNavItemProps {
  href: string
  label: string
  subtitle?: string
  onNavigate?: () => void
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[40]}px ${({ theme }) => theme.spacing[24]}px;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
  &:active {
    border-color: ${({ theme }) => theme.color.interactive.accent};
  }

  &:active .sidebar-nav-arrow {
    color: ${({ theme }) => theme.color.text.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`

const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]}px;
`

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
  flex-shrink: 0;
  padding-top: ${({ theme }) => theme.spacing[8]}px;
`

export default function SidebarNavItem({
  href,
  label,
  subtitle,
  onNavigate,
}: SidebarNavItemProps) {
  return (
    <StyledLink href={href} {...(onNavigate !== undefined ? { onClick: onNavigate } : {})}>
      <LabelGroup>
        <Text variant="heading1" as="span">
          {label}
        </Text>
        {subtitle && (
          <Text variant="bodySmall" color="secondary" as="span">
            {subtitle}
          </Text>
        )}
      </LabelGroup>
      <IconWrapper className="sidebar-nav-arrow">
        <Icon icon={IconArrowUpRight} size="icon" />
      </IconWrapper>
    </StyledLink>
  )
}
