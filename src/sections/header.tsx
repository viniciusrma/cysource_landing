import React from 'react'
import 'antd/dist/antd.css'
import { HeaderSection } from '../styles/sections/Header'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../i18n/ptBR'
import he from '../i18n/he'
import logo from '../assets/logo.svg'

const Header1: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he
  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  return (
    <HeaderSection>
      <nav className="navbar">
        <img className="logo" src={logo} alt="CySource logo" />
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">
              {lang.career}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {lang.plans}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {lang.community}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {lang.forOrganizations}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {lang.partners}
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div>
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

export default Header1
