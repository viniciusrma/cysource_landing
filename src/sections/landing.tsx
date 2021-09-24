import React from 'react'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../i18n/ptBR'
import he from '../i18n/he'
import { LandingSection } from '../styles/sections/Landing'

const Landing: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he
  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  return (
    <LandingSection>
      <div id="texts">
        <h1>{lang.mainText}</h1>
        <p>
          {lang.secondtext} <span>{lang.highlightedPhrase}</span>
        </p>
        <div id="landing-buttons">
          <button id="start">{lang.startMyCareer}</button>
          <button>{lang.improveMyCareer}</button>
        </div>
      </div>
    </LandingSection>
  )
}

export default Landing
