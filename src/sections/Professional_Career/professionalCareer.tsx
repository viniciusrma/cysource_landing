import React from 'react'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { ProCareer } from './Style/ProfessionalCareer'
import arrowRight from '../../assets/arrowRight.svg'
import logo from '../../assets/logo.svg'
import pentest from '../../assets/pentest.svg'
import skill_level from '../../assets/skill-level.svg'
import schedule from '../../assets/schedule.svg'

const ProfessionalCareer: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <ProCareer>
      <h1>{lang.professionalCareer}</h1>
      <div id="pentest-content">
        <div id="left">
          <img id="logo" src={logo} alt="CySource logo" />
          <p>{lang.careerPathText1}</p>
          <br />
          <p>{lang.careerPathText2}</p>
          <div>
            <a>
              {lang.discoverPentest}
              <img id="arrow" src={arrowRight} alt="Arrow right" />
            </a>
          </div>
        </div>
        <div id="right">
          <div id="pentest">
            <img src={pentest} alt="" className="main" />
            <div id="card">
              <h1>Title</h1>
              <div id="info">
                <img src={skill_level} alt="" /> <p>{lang.beginner}</p>
                <img src={schedule} alt="" /> <p>{lang.fourtyHour}</p>
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
            <img src={pentest} alt="" className="main" />
            <div id="card">
              <h1>Title</h1>
              <div id="info">
                <img src={skill_level} alt="" /> <p>{lang.beginner}</p>
                <img src={schedule} alt="" /> <p>{lang.fourtyHour}</p>
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
