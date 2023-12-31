import { Button, Logo, TextInput } from '@components'
import { Envelope, Key } from 'phosphor-react-native'
import React from 'react'
import { Pressable, View, ViewStyle } from 'react-native'
import {
  Container,
  Content,
  ForgotPassword,
  Link,
  OrSection,
  OrText,
  Separator,
  SocialButton,
  SocialContainer,
} from './LoginScreen.styles'

import FacebookSVG from '@assets/logoFacebook.svg'
import GoogleSVG from '@assets/logoGoogle.svg'
import { AuthScreenProps } from '@routes'
import theme from '@theme'

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  function handleForgotPassword() {
    navigation.navigate('ForgotPassword')
  }

  const iconColour = theme.COLORS.GRAY_400
  const iconSize = 20

  return (
    <Container>
      <Logo />

      <Content>
        <TextInput
          label="Email"
          placeholder="Digite seu e-mail"
          leftComponent={<Envelope size={iconSize} color={iconColour} />}
        />
        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          leftComponent={<Key size={iconSize} color={iconColour}/>}
        />

        <Button activeOpacity={0.8} title="INICIAR SESSÃO" />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
        >
          <ForgotPassword>Esqueceu a senha?</ForgotPassword>
          <Pressable onPress={handleForgotPassword}>
            <Link>Toque aqui</Link>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 56,
          }}
        >
          <ForgotPassword>Ainda não possui conta?</ForgotPassword>
          <Link>Toque aqui</Link>
        </View>

        <OrSection>
          <Separator />
          <OrText>Ou use redes sociais</OrText>
          <Separator />
        </OrSection>

        <SocialContainer>
          <SocialButton style={$Shadow} activeOpacity={0.65}>
            <GoogleSVG />
          </SocialButton>

          <SocialButton style={$Shadow} activeOpacity={0.65}>
            <FacebookSVG />
          </SocialButton>
        </SocialContainer>
      </Content>
    </Container>
  )
}

const $Shadow: ViewStyle = {
  shadowOffset: { width: 0, height: 4 },
  shadowColor: '#000000',
  shadowRadius: 20,
  shadowOpacity: 0.15,
  elevation: 6,
}
