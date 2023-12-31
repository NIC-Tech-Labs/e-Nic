import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
`
export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
  margin-top: 50px;
`

export const ForgotPassword = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  text-align: right;
  margin-right: 8px;
`

export const Link = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GREEN_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  text-align: center;
`

export const OrSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`

export const OrText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.regular};
  margin: 0 8px;
`

export const Separator = styled.View`
  height: 1.5px;
  width: 28%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const SocialContainer = styled.View`
  flex-direction: row;
  column-gap: 32px;
  justify-content: center;
  margin: 8px 0;
`

export const SocialButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`
