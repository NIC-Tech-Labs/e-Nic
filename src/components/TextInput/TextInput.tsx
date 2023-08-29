import React, { ReactElement, useRef } from 'react'
import {
  TextInput as Input,
  Pressable,
  TextInputProps as RNTextInputProps,
} from 'react-native'

import {
  Container,
  ContentInput,
  ErrorMessage,
  Label,
  LeftComponent,
  RNTextInput,
} from './TextInput.styles'

export interface TextInputProps extends RNTextInputProps {
  label?: string
  leftComponent?: ReactElement
  errorMessage?: string
}

export function TextInput({
  label,
  leftComponent,
  errorMessage,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<Input>(null)

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <Container>
      <Pressable onPress={focusInput}>
        {label && <Label>{label}</Label>}
        <ContentInput errorMessage={!!errorMessage}>
          {leftComponent && <LeftComponent>{leftComponent}</LeftComponent>}
          <RNTextInput
            autoCapitalize="none"
            style={$TextInputStyle}
            {...rnTextInputProps}
          />
        </ContentInput>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Pressable>
    </Container>
  )
}

const $TextInputStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
}
