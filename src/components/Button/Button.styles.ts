import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_500};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
`

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  align-items: center;
`

export const RightComponent = styled.View`
  margin-left: 8px;
  margin-right: 8px;
  justify-content: center;
`
