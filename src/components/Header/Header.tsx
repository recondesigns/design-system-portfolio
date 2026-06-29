'use client'

import Link from 'next/link'
import styled from '@emotion/styled'
import { IconMenu2 } from '@tabler/icons-react'
import Icon from '@/components/Icon'
import { useUiStore } from '@/store/uiStore'

const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  background-color: ${({ theme }) => theme.color.background.nav};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    height: 64px;
    padding: 0 ${({ theme }) => theme.spacing[48]}px;
  }
`

const TitleLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyEmphasis}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  color: ${({ theme }) => theme.color.text.inverse};
  text-decoration: none;
`

const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[32]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    display: flex;
  }
`

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.duration.fast}ms
    ${({ theme }) => theme.transition.easing.standard};

  &:hover {
    color: ${({ theme }) => theme.color.text.inverse};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing[4]}px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.inverse};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }

  ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`

export default function Header() {
  const { isSidebarOpen, toggleSidebar } = useUiStore()

  return (
    <StyledHeader>
      <HeaderInner>
        <TitleLink href="/">Michael Stedman</TitleLink>

        <Nav aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </Nav>

        <HamburgerButton
          aria-label="Open navigation"
          aria-expanded={isSidebarOpen}
          aria-controls="sidebar"
          onClick={toggleSidebar}
        >
          <Icon icon={IconMenu2} size="icon" />
        </HamburgerButton>
      </HeaderInner>
    </StyledHeader>
  )
}
