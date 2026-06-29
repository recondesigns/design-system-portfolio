'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import { IconArrowUpRight } from '@tabler/icons-react'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import Text from '@/components/Text'

export interface ListItemProps {
  slug: string
  projectNumber: string
  title: string
  subtitle: string
  details: string
  size: 'desktop' | 'mobile'
}

// ─── Desktop variant ────────────────────────────────────────────────────────

const DesktopRow = styled(Link)`
  position: relative;
  display: block;
  height: 146px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
  text-decoration: none;
  transition: border-color ${({ theme }) => theme.transition.duration.base}ms
    ${({ theme }) => theme.transition.easing.standard};

  &:hover {
    border-color: ${({ theme }) => theme.color.interactive.accent};
  }

  &:hover .list-item-title {
    padding-left: ${({ theme }) => theme.spacing[20]}px;
  }

  &:hover .list-item-icon-button {
    background-color: ${({ theme }) => theme.color.interactive.accent};
    border-color: transparent;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover .list-item-title {
      padding-left: 0;
    }
  }
`

const DesktopNumber = styled.p`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8.33%;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

const DesktopTitleWrapper = styled.div`
  position: absolute;
  left: calc(8.33% + 1px);
  right: calc(58.33% + 11px);
  top: 50%;
  transform: translateY(-50%);
  transition: padding-left ${({ theme }) => theme.transition.duration.base}ms
    ${({ theme }) => theme.transition.easing.standard};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const DesktopSubtitle = styled.p`
  position: absolute;
  left: calc(41.67% + 9px);
  right: calc(33.33% + 6px);
  top: 50%;
  transform: translateY(-50%);
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelTag}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight.labelTag}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.accent};
`

const DesktopDetailsWrapper = styled.div`
  position: absolute;
  left: calc(66.67% + 14px);
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[20]}px;
`

const DesktopDetails = styled.p`
  flex: 1 0 0;
  min-width: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodySmall}px;
  color: ${({ theme }) => theme.color.text.secondary};
`

const StyledIconButton = styled(IconButton)`
  transition:
    background-color ${({ theme }) => theme.transition.duration.base}ms
      ${({ theme }) => theme.transition.easing.standard},
    border-color ${({ theme }) => theme.transition.duration.base}ms
      ${({ theme }) => theme.transition.easing.standard};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

function DesktopListItem({ slug, projectNumber, title, subtitle, details }: Omit<ListItemProps, 'size'>) {
  return (
    <DesktopRow href={`/work/${slug}`}>
      <DesktopNumber>{projectNumber}</DesktopNumber>
      <DesktopTitleWrapper className="list-item-title">
        <Text variant="heading1" as="span">
          {title}
        </Text>
      </DesktopTitleWrapper>
      <DesktopSubtitle>{subtitle}</DesktopSubtitle>
      <DesktopDetailsWrapper>
        <DesktopDetails>{details}</DesktopDetails>
        <StyledIconButton
          className="list-item-icon-button"
          aria-label={`View ${title}`}
          icon={IconArrowUpRight}
          state="default"
          as="span"
        />
      </DesktopDetailsWrapper>
    </DesktopRow>
  )
}

// ─── Mobile variant ─────────────────────────────────────────────────────────

const MobileRow = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]}px;
  padding-top: ${({ theme }) => theme.spacing[32]}px;
  padding-bottom: ${({ theme }) => theme.spacing[32]}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
  text-decoration: none;
  &:active {
    border-color: ${({ theme }) => theme.color.interactive.accent};
  }

  &:active .mobile-arrow {
    color: ${({ theme }) => theme.color.text.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 2px;
  }
`

const MobileHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MobileTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[12]}px;
`

const MobileNumber = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelStat}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

const MobileTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.text.inverse};
`

const MobileArrow = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
  flex-shrink: 0;
`

const MobileSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelTag}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.accent};
  width: 100%;
`

const MobileDetails = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.6;
  color: ${({ theme }) => theme.color.text.secondary};
  width: 100%;
`

function MobileListItem({ slug, projectNumber, title, subtitle, details }: Omit<ListItemProps, 'size'>) {
  return (
    <MobileRow href={`/work/${slug}`}>
      <MobileHeading>
        <MobileTitleGroup>
          <MobileNumber>{projectNumber}</MobileNumber>
          <MobileTitle>{title}</MobileTitle>
        </MobileTitleGroup>
        <MobileArrow className="mobile-arrow">
          <Icon icon={IconArrowUpRight} size="iconSm" />
        </MobileArrow>
      </MobileHeading>
      <MobileSubtitle>{subtitle}</MobileSubtitle>
      <MobileDetails>{details}</MobileDetails>
    </MobileRow>
  )
}

// ─── Public component ────────────────────────────────────────────────────────

export default function ListItem({ size, ...props }: ListItemProps) {
  if (size === 'desktop') return <DesktopListItem {...props} />
  return <MobileListItem {...props} />
}
