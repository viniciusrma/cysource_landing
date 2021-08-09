import React from 'react'
import Head from 'next/head'
import { Container, Header, Landing } from '../styles/pages/Home'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../i18n/ptBR'
import he from '../i18n/he'
import logo from '../assets/logo.svg'
import mainBackground from '../assets/mainBackground.svg'

const Home: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he
  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  return (
    <Container>
      <Head>
        <title>{lang.cysource}</title>
      </Head>
      <Header>
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
      </Header>
      <Landing>
        <div id="texts">
          <h1>{lang.mainText}</h1>
          <p>{lang.secondtext} <span>{lang.highlightedPhrase}</span></p>
        </div>
        <div>
          <img src={mainBackground} alt="rocket" />
        </div>
      </Landing>
    </Container>
  )
}

export default Home
