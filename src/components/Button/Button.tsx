import { TouchableOpacityProps } from 'react-native'

import { ReactElement } from 'react'
import { Container, RightComponent, Title } from './Button.styles'

type Props = TouchableOpacityProps & {
  title: string
  rightComponent?: ReactElement
}

export function Button({ title, rightComponent, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      {rightComponent && <RightComponent>{rightComponent}</RightComponent>}
    </Container>
  )
}
