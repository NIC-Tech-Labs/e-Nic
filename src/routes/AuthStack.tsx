import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgotPassword, LoginScreen } from '@screens'
import React from 'react'

export type AuthStackParamList = {
  LoginScreen: undefined
  ForgotPassword: undefined
  Confirmation: undefined
}

export function AuthStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>()

  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
  )
}
