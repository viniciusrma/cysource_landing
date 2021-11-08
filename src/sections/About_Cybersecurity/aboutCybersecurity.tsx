import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { InfoAboutCyberSecutity } from './style'
import questions from '../../public/questions.svg'

const AboutCybersecurity: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <InfoAboutCyberSecutity>
      <div id="left">
        <Image src={questions} layout="fill" alt="" />
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
