import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { ProCareer } from './style'
import arrowRight from '../../public/arrowRight.svg'
import logo from '../../public/logo.svg'
import pentest from '../../public/pentest.svg'
import skill_level from '../../public/skill-level.svg'
import schedule from '../../public/schedule.svg'

const ProfessionalCareer: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <ProCareer>
      <h1>{lang.professionalCareer}</h1>
      <div id="pentest-content">
        <div id="left">
          <Image id="logo" src={logo} layout="fill" alt="CySource logo" />
          <p>{lang.careerPathText1}</p>
          <br />
          <p>{lang.careerPathText2}</p>
          <div>
            <a>
              {lang.discoverPentest}
              <Image id="arrow" src={arrowRight} layout="fill" alt="Arrow right" />
            </a>
          </div>
        </div>
        <div id="right">
          <div id="pentest">
            <Image src={pentest} layout="fill" alt="" className="main" />
            <div id="card">
              <h1>Title</h1>
              <div id="info">
                <Image src={skill_level}  layout="fill" alt="" /> <p>{lang.beginner}</p>
                <Image src={schedule} layout="fill" alt="" /> <p>{lang.fourtyHour}</p>
              </div>
              <p>{lang.cardDescription}</p>
              <div id="actions">
                <button id="details">{lang.moreDetails}</button>
                <button id="getit">{lang.getItNow}</button>
              </div>
              <p>{lang.coordinator}</p>
              <p>{lang.instructor}</p>
            </div>
          </div>
          <div id="forensics-full">
            <Image src={pentest}  layout="fill" alt="" className="main" />
            <div id="card">
              <h1>Title</h1>
              <div id="info">
                <Image src={skill_level} layout="fill" alt="" /> <p>{lang.beginner}</p>
                <Image src={schedule} layout="fill" alt="" /> <p>{lang.fourtyHour}</p>
              </div>
              <p>{lang.cardDescription}</p>
              <div id="actions">
                <button id="details">{lang.moreDetails}</button>
                <button id="getit">{lang.getItNow}</button>
              </div>
              <p>{lang.coordinator}</p>
              <p>{lang.instructor}</p>
            </div>
          </div>
        </div>
      </div>
    </ProCareer>
  )
}

export default ProfessionalCareer
