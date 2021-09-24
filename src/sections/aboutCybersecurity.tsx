import React from 'react'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../i18n/ptBR'
import he from '../i18n/he'
import { InfoAboutCyberSecutity } from '../styles/sections/InfoAboutCybersecurity'
import pentest from '../assets/pentest.svg'

const AboutCybersecurity: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he
  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  return (
    <InfoAboutCyberSecutity>
      <div id="left">
        <img src={pentest} alt="" />
      </div>
      <div id="right">
        <h1>{lang.doYouHaveQuestions}</h1>
        <div>
          <button>{lang.moreInfo}</button>
        </div>
      </div>
    </InfoAboutCyberSecutity>
  )
}

export default AboutCybersecurity
