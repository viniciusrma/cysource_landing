import React from 'react'
import { HeaderSection } from '../styles/sections/Header'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../i18n/ptBR'
import he from '../i18n/he'
import logo from '../assets/logo.svg'

const Header: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he
  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  return (
    <HeaderSection>
      <div>
        <img className="logo" src={logo} alt="CySource logo" />
        <button id="nav-button">{lang.career}</button>
        <button id="nav-button">{lang.plans}</button>
        <button id="nav-button">{lang.community}</button>
        <button id="nav-button">{lang.forOrganizations}</button>
        <button id="nav-button">{lang.partners}</button>
      </div>
      <select
        name="languageChanger"
        onChange={changeLanguage}
        defaultValue={locale}
      >
        <option value="ptBR">pt-BR</option>
        <option value="he">he</option>
      </select>
    </HeaderSection>
  )
}

export default Header
