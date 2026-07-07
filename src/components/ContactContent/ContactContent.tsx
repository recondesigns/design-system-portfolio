'use client'

import { useState } from 'react'
import styled from '@emotion/styled'
import { IconArrowUpRight, IconMapPin, IconBriefcase } from '@tabler/icons-react'
import Input from '@/components/Input'

const TOPICS = [
  'UX Design',
  'Design System',
  'Token Pipeline',
  'Documentation',
  'Accessibility Audit',
  'Something else',
] as const

// ---- Layout ----

const Outer = styled.section`
  width: 100%;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[96]}px ${({ theme }) => theme.spacing[24]}px
    ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) => theme.spacing[96]}px ${({ theme }) => theme.spacing[40]}px
      ${({ theme }) => theme.spacing[48]}px;
  }

  ${({ theme }) => theme.mediaQuery.xl} {
    padding: ${({ theme }) => theme.spacing[96]}px ${({ theme }) => theme.spacing[48]}px
      ${({ theme }) => theme.spacing[48]}px;
  }
`

// ---- Hero ----

const Hero = styled.div`
  padding-top: ${({ theme }) => theme.spacing[48]}px;
`

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-style: normal;
  font-size: 56px;
  line-height: 54px;
  letter-spacing: -1.12px;
  color: ${({ theme }) => theme.color.text.inverse};

  ${({ theme }) => theme.mediaQuery.xl} {
    font-size: ${({ theme }) => theme.fontSize.displayXl}px;
    line-height: ${({ theme }) => theme.lineHeight.displayXl}px;
    letter-spacing: ${({ theme }) => theme.letterSpacing.display};
  }
`

const HeadlineAccent = styled.em`
  font-style: italic;
  color: ${({ theme }) => theme.color.text.accent};
`

const HeroBody = styled.p`
  margin-top: ${({ theme }) => theme.spacing[32]}px;
  max-width: 480px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  color: ${({ theme }) => theme.color.text.bodyInverse};
`

// ---- Two-column content ----

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[80]}px;
  margin-top: ${({ theme }) => theme.spacing[80]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[96]}px;
  }
`

// ---- Form ----

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    flex: 1;
  }
`

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[48]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[40]}px;

    & > * {
      flex: 1;
    }
  }
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const FieldLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[12]}px;
`

const TopicList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[8]}px;
`

interface TopicChipProps {
  $selected: boolean
}

const TopicChip = styled('button', {
  shouldForwardProp: (prop) => prop !== '$selected',
})<TopicChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[8]}px ${({ theme }) => theme.spacing[16]}px;
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.color.interactive.accent : theme.color.border.input};
  border-radius: ${({ theme }) => theme.radius.full}px;
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.bodySmall}px;
  color: ${({ theme, $selected }) =>
    $selected ? theme.color.interactive.accent : theme.color.text.bodyInverse};
  transition:
    border-color ${({ theme }) => theme.transition.duration.base}ms
      ${({ theme }) => theme.transition.easing.standard},
    color ${({ theme }) => theme.transition.duration.base}ms
      ${({ theme }) => theme.transition.easing.standard};

  &:hover {
    border-color: ${({ theme }) => theme.color.border.link};
    color: ${({ theme }) => theme.color.text.inverse};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const SubmitRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]}px;

  ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: row;
    align-items: center;
  }
`

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[12]}px;
  padding: ${({ theme }) => theme.spacing[12]}px ${({ theme }) => theme.spacing[24]}px;
  background-color: ${({ theme }) => theme.color.interactive.accent};
  border: none;
  border-radius: ${({ theme }) => theme.radius.full}px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.color.text.primary};
  transition: background-color ${({ theme }) => theme.transition.duration.base}ms
    ${({ theme }) => theme.transition.easing.standard};

  &:hover {
    background-color: ${({ theme }) => theme.color.interactive.accentHover};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const SubmitHint = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  color: ${({ theme }) => theme.color.text.placeholder};
`

// ---- Contact aside ----

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[40]}px;

  ${({ theme }) => theme.mediaQuery.xl} {
    width: 360px;
    flex-shrink: 0;
  }
`

const AsideLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[12]}px;
`

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]}px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodyDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodyDefault}px;
  color: ${({ theme }) => theme.color.text.inverse};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.duration.base}ms
    ${({ theme }) => theme.transition.easing.standard};

  &:hover {
    color: ${({ theme }) => theme.color.text.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]}px;
`

const InfoRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[16]}px;
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spacing[24]}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.inverse};
`

const InfoIconWrapper = styled.div`
  flex-shrink: 0;
  padding-top: 2px;
  color: ${({ theme }) => theme.color.text.secondary};
`

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const InfoCaption = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelDefault}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelDefault}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
`

const InfoValue = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodySmall}px;
  color: ${({ theme }) => theme.color.text.inverse};
`

const ElsewhereLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[12]}px;
`

const SocialRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[32]}px;
`

const SocialLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.bodySmall}px;
  color: ${({ theme }) => theme.color.text.secondary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transition.duration.base}ms
    ${({ theme }) => theme.transition.easing.standard};

  &:hover {
    color: ${({ theme }) => theme.color.text.inverse};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

// ---- Component ----

export default function ContactContent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Outer>
      <Inner>
        <Hero>
          <Headline>
            Start a <HeadlineAccent>conversation.</HeadlineAccent>
          </Headline>
          <HeroBody>
            Whether you&apos;re scaling a system or starting from zero, tell me
            where you are and where you want to be. I read every message myself.
          </HeroBody>
        </Hero>

        <ContentRow>
          <Form onSubmit={handleSubmit} noValidate>
            <InputRow>
              <Input
                id="contact-name"
                label="Your name"
                placeholder="Jane Doe"
                value={name}
                onChange={setName}
              />
              <Input
                id="contact-email"
                label="Email"
                placeholder="jane@company.com"
                value={email}
                onChange={setEmail}
              />
            </InputRow>

            <FieldGroup>
              <FieldLabel>What can I help with?</FieldLabel>
              <TopicList>
                {TOPICS.map((topic) => (
                  <TopicChip
                    key={topic}
                    type="button"
                    $selected={selectedTopics.includes(topic)}
                    onClick={() => toggleTopic(topic)}
                    aria-pressed={selectedTopics.includes(topic)}
                  >
                    {topic}
                  </TopicChip>
                ))}
              </TopicList>
            </FieldGroup>

            <Input
              id="contact-message"
              label="Tell me more"
              placeholder="What are you building, what's the current state, and what does success look like?"
              value={message}
              onChange={setMessage}
              multiline
            />

            <SubmitRow>
              <SubmitButton type="submit">
                Send message
                <IconArrowUpRight size={16} aria-hidden />
              </SubmitButton>
              <SubmitHint>Replies within 2 working days</SubmitHint>
            </SubmitRow>
          </Form>

          <Aside>
            <div>
              <AsideLabel>Prefer email?</AsideLabel>
              <EmailLink
                href="mailto:michaelstedman81@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                michaelstedman81@gmail.com
                <IconArrowUpRight size={16} aria-hidden />
              </EmailLink>
            </div>

            <InfoList>
              <InfoRow>
                <InfoIconWrapper>
                  <IconMapPin size={16} aria-hidden />
                </InfoIconWrapper>
                <InfoContent>
                  <InfoCaption>Based in</InfoCaption>
                  <InfoValue>Texas · Remote</InfoValue>
                </InfoContent>
              </InfoRow>
              <InfoRow>
                <InfoIconWrapper>
                  <IconBriefcase size={16} aria-hidden />
                </InfoIconWrapper>
                <InfoContent>
                  <InfoCaption>Teams include</InfoCaption>
                  <InfoValue>Startups to enterprise</InfoValue>
                </InfoContent>
              </InfoRow>
            </InfoList>

            <div>
              <ElsewhereLabel>Elsewhere</ElsewhereLabel>
              <SocialRow>
                <SocialLink
                  href="https://github.com/recondesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </SocialLink>
                <SocialLink
                  href="https://figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </SocialLink>
                <SocialLink
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </SocialLink>
              </SocialRow>
            </div>
          </Aside>
        </ContentRow>
      </Inner>
    </Outer>
  )
}
