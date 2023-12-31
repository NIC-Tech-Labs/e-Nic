import styled, { css } from 'styled-components/native'

type Props = {
  errorMessage: boolean
}

export const Container = styled.View`
  margin-bottom: 12px;
`

export const Label = styled.Text`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
`

export const ContentInput = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};

  ${({ errorMessage }) =>
    errorMessage &&
    css`
      border-color: ${({ theme }) => theme.COLORS.RED_500};
    `}
`

export const RNTextInput = styled.TextInput`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.medium};
`

export const LeftComponent = styled.View`
  margin-left: 8px;
  margin-right: 8px;
  justify-content: center;
`

export const ErrorMessage = styled.Text`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.COLORS.RED_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.regular};
`
