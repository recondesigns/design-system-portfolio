'use client'

import styled from '@emotion/styled'
import { IconArrowUpRight } from '@tabler/icons-react'
import Icon from '@/components/Icon'
import SocialLinks from '@/components/SocialLinks'

const StyledFooter = styled.footer`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};
`

const FooterInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[24]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 ${({ theme }) => theme.spacing[48]}px;
  }
`

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]}px;
  padding-top: ${({ theme }) => theme.spacing[80]}px;
  padding-bottom: ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: ${({ theme }) => theme.spacing[129]}px;
  }
`

const Headline = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: 52px;
  line-height: 56px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: ${({ theme }) => theme.letterSpacing.display};
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.md} {
    font-size: 72px;
    line-height: 76px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.display}px;
    line-height: ${({ theme }) => theme.lineHeight.display}px;
  }
`

const HeadlineAccent = styled.span`
  color: ${({ theme }) => theme.color.text.accent};
  font-style: italic;
`

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]}px;
`

const ContactLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]}px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyLead}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.bodyLead}px;
  color: ${({ theme }) => theme.color.text.inverse};
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transition.duration.fast}ms
    ${({ theme }) => theme.transition.easing.standard};

  &:hover {
    opacity: 0.8;
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

const FooterLegal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]}px;
  padding-top: ${({ theme }) => theme.spacing[48]}px;
  padding-bottom: ${({ theme }) => theme.spacing[48]}px;
  border-top: 1px solid ${({ theme }) => theme.color.border.inverse};

  ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const LegalText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

export default function Footer() {
  return (
    <StyledFooter>
      <FooterInner>
        <FooterTop>
          <Headline>
            {"Let's build something "}
            <HeadlineAccent>consistent.</HeadlineAccent>
          </Headline>

          <ContactBlock>
            <ContactLabel>Get in touch</ContactLabel>
            <EmailLink
              href="mailto:michaelstedman81@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              michaelstedman81@gmail.com
              <Icon icon={IconArrowUpRight} size="icon" />
            </EmailLink>
            <SocialLinks />
          </ContactBlock>
        </FooterTop>

        <FooterLegal>
          <LegalText>© 2026 Stedman Designs</LegalText>
          <LegalText>Designed and Engineered in Texas</LegalText>
        </FooterLegal>
      </FooterInner>
    </StyledFooter>
  )
}
