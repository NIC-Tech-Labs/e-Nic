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
        <Title>Recuperar de senha</Title>
        <SubTitle>
          Informe seu e-mail ou número de telefone móvel Enviaremos um código
          para autenticação
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
          label="Digite seu E-mail"
          placeholder="Digite seu E-mail"
          leftComponent={<At size={16} color="#30973B" />}
        />
      </Content>

      <Button
        title="INICIAR SESSÃO"
        rightComponent={<Keyhole size={16} color="#FFFF" />}
      />
    </Container>
  )
}
