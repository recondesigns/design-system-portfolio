'use client'

import { useState } from 'react'
import styled from '@emotion/styled'
import type { Theme } from '@/tokens/theme'

export interface InputProps {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  multiline?: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSize.labelEyebrow}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.labelEyebrow}px;
  letter-spacing: ${({ theme }) => theme.letterSpacing.labelEyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text.secondary};
  padding-bottom: ${({ theme }) => theme.spacing[12]}px;
  display: block;
`

interface FieldProps {
  $focused: boolean
  $hasValue: boolean
}

const sharedFieldStyles = ({ theme, $focused }: { theme: Theme; $focused: boolean }) => `
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${$focused ? theme.color.interactive.accent : theme.color.border.input};
  outline: none;
  padding: ${theme.spacing[12]}px 0;
  font-family: ${theme.fontFamily.body};
  font-size: ${theme.fontSize.bodyDefault}px;
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.lineHeight.bodyDefault}px;
  color: ${theme.color.text.inverse};
  transition: border-color ${theme.transition.duration.base}ms ${theme.transition.easing.standard};

  &::placeholder {
    color: ${theme.color.text.placeholder};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const StyledInput = styled('input', {
  shouldForwardProp: (prop) => prop !== '$focused' && prop !== '$hasValue',
})<FieldProps>`
  ${({ theme, $focused }) => sharedFieldStyles({ theme: theme as Theme, $focused })}
`

const StyledTextarea = styled('textarea', {
  shouldForwardProp: (prop) => prop !== '$focused' && prop !== '$hasValue',
})<FieldProps>`
  ${({ theme, $focused }) => sharedFieldStyles({ theme: theme as Theme, $focused })}
  resize: none;
  min-height: 120px;
`

export default function Input({
  id,
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
}: InputProps) {
  const [focused, setFocused] = useState(false)

  const fieldProps = {
    id,
    placeholder,
    value,
    $focused: focused,
    $hasValue: value.length > 0,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  }

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {multiline ? (
        <StyledTextarea
          {...fieldProps}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <StyledInput
          {...fieldProps}
          type="text"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </Wrapper>
  )
}
