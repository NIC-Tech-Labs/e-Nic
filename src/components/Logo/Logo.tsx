import React from 'react'
import LogoSVG from '../../assets/logo.svg'
import { LogoContainer } from './Logo.styles'

export function Logo() {
  return (
    <LogoContainer>
      <LogoSVG width={141} height={109} />
    </LogoContainer>
  )
}
