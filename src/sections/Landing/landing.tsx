import React from 'react'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { LandingSection } from './Style/Landing'

const Landing: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

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
