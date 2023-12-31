/* eslint-disable react/react-in-jsx-scope */
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts,
} from '@expo-google-fonts/dm-sans'
import { Routes } from '@routes'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import * as navBar from 'expo-navigation-bar'

export default function App() {
  const [Fonts] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  })

  navBar.setBackgroundColorAsync('white')

  if (!Fonts) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent />
      <Routes />
    </ThemeProvider>
  )
}
