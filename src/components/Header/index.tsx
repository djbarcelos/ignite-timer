import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from '@phosphor-icons/react'

import logoIgnite from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} />
      <nav>
        <NavLink to="/" title="Cronômetro">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
