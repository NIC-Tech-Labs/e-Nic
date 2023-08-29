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

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  function handleForgotPassword() {
    navigation.navigate('ForgotPassword')
  }

  return (
    <Container>
      <Logo />

      <Content>
        <TextInput
          label="Email"
          placeholder="teste"
          leftComponent={<Envelope size={16} />}
        />
        <TextInput
          label="Email"
          placeholder="teste"
          leftComponent={<Key size={16} />}
        />

        <Button title="INICIAR SESSÃO" />

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
          <SocialButton style={$Shadow}>
            <GoogleSVG />
          </SocialButton>

          <SocialButton style={$Shadow}>
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
