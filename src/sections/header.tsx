import React from 'react'
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
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
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

          <li className="nav-item">
            <select
              className="languageSelector"
              name="languageSelector"
              onChange={changeLanguage}
              defaultValue={locale}
            >
              <option value="ptBR">pt-BR</option>
              <option value="he">he</option>
            </select>
          </li>
        </ul>
      </nav>
    </HeaderSection>
  )
}

export default Header1
