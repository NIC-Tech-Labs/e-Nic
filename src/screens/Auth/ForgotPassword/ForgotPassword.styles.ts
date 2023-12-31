import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
  padding: 56px 16px 0;
`

export const Content = styled.View`
  flex: 0.8;
  margin-top: 50px;
  align-items: center;
  padding: 0 20px;
`

export const Title = styled.Text`
  font-size: 26px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
`

export const SubTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.medium};
`

export const MethodContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 281px;
  height: 48px;
  padding: 6px 7px;
  margin-top: 65px;
  margin-bottom: 41px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_300};
`

interface MethodButtonProps {
  active?: boolean
}

export const MethodButton = styled.TouchableOpacity<MethodButtonProps>`
  padding: 8px 41px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  ${({ active }) =>
    active &&
    css`
      border-width: 2px;
      border-color: ${({ theme }) => theme.COLORS.GREEN_500};
      background-color: ${({ theme }) => theme.COLORS.WHITE};
    `}
`

export const MethodButtonText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.medium};
`
