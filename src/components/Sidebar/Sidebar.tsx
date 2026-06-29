'use client'

import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { IconX } from '@tabler/icons-react'
import Icon from '@/components/Icon'
import SidebarNavItem from '@/components/SidebarNavItem'
import SocialLinks from '@/components/SocialLinks'
import { useUiStore } from '@/store/uiStore'

const NAV_ITEMS = [
  { href: '/work', label: 'Work', subtitle: 'Selected case studies · 2022–2026' },
  { href: '/about', label: 'About', subtitle: 'Philosophy & capabilities' },
  { href: '/contact', label: 'Contact' },
] as const

const Root = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: visibility ${({ $open, theme }) =>
    $open ? '0ms' : `${theme.transition.duration.slow}ms`};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const Backdrop = styled.div<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition.duration.slow}ms
    ${({ theme }) => theme.transition.easing.standard};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const Panel = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.inverse};
  z-index: ${({ theme }) => theme.zIndex.sidebar};
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform ${({ theme }) => theme.transition.duration.slow}ms
    ${({ theme }) => theme.transition.easing.standard};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing[24]}px;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
  flex-shrink: 0;
`

const BrandLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing[4]}px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.secondary};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.interactive.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`

const Nav = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[32]}px 0;
`

const PanelFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]}px;
  padding: ${({ theme }) => theme.spacing[32]}px ${({ theme }) => theme.spacing[24]}px;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};
  flex-shrink: 0;
`

const Location = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useUiStore()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isSidebarOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement
      closeButtonRef.current?.focus()
    } else {
      previouslyFocused.current?.focus()
      previouslyFocused.current = null
    }
  }, [isSidebarOpen])

  useEffect(() => {
    if (!isSidebarOpen) return

    const panel = panelRef.current
    if (!panel) return

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      )

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeSidebar()
        return
      }

      if (e.key === 'Tab') {
        const focusable = getFocusable()
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isSidebarOpen, closeSidebar])

  return (
    <Root $open={isSidebarOpen} aria-hidden={!isSidebarOpen}>
      <Backdrop $open={isSidebarOpen} onClick={closeSidebar} aria-hidden="true" />
      <Panel
        id="sidebar"
        ref={panelRef}
        $open={isSidebarOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <PanelHeader>
          <BrandLabel>Michael Stedman</BrandLabel>
          <CloseButton
            ref={closeButtonRef}
            aria-label="Close navigation"
            onClick={closeSidebar}
          >
            <Icon icon={IconX} size="icon" />
          </CloseButton>
        </PanelHeader>

        <Nav aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ href, label, ...rest }) => (
            <SidebarNavItem
              key={href}
              href={href}
              label={label}
              onNavigate={closeSidebar}
              {...('subtitle' in rest ? { subtitle: rest.subtitle } : {})}
            />
          ))}
        </Nav>

        <PanelFooter>
          <Location>Texas · Remote</Location>
          <SocialLinks />
        </PanelFooter>
      </Panel>
    </Root>
  )
}
