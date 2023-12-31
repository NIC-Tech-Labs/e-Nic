import React from 'react'

import {
  Container,
  Content,
  MethodButton,
  MethodButtonText,
  MethodContainer,
  SubTitle,
  Title,
} from './ForgotPassword.styles'

import LogoSVG from '@assets/logo.svg'
import { Button, TextInput } from '@components'
import { At, Keyhole } from 'phosphor-react-native'

export function ForgotPassword() {
  return (
    <Container>
      <LogoSVG />

      <Content>
        <Title>Recuperação de senha</Title>
        <SubTitle style={{ width: '100%' }}>
          Informe seu e-mail ou número de telefone móvel
        </SubTitle>
        <SubTitle>
          Enviaremos um código para autenticação
        </SubTitle>

        <MethodContainer>
          <MethodButton active>
            <MethodButtonText>E-mail</MethodButtonText>
          </MethodButton>

          <MethodButton>
            <MethodButtonText>Telefone</MethodButtonText>
          </MethodButton>
        </MethodContainer>

        <TextInput
          label="Recuperação via e-mail"
          placeholder="Digite seu endereço e-mail"
          style={{ width: '90%' }}
          leftComponent={<At weight='bold' size={20} color="#30973B" />}
        />
      </Content>

      <Button
        title="ENVIAR CÓDIGO"
        activeOpacity={0.75}
        style={{ position: 'absolute', top: '95%', width: '90%' }}
        rightComponent={<Keyhole weight='fill' size={20} color="#FFFF" />}
      />
    </Container>
  )
}
