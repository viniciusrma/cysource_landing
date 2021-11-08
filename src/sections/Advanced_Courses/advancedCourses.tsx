import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { Advanced } from './style'

import skill_level from '../../public/skill-level.svg'
import schedule from '../../public/schedule.svg'
import pentest from '../../public/pentest.svg'

const AdvancedCourses: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <Advanced>
      <h1 className="advanced-title">{lang.advancedCourses}</h1>
      <h4>
        Advanced research courses (for hacking and programming connoisseurs).
      </h4>
      <div className="container">
        <div id="left">
          <div id="malware-analysis">
            <Image src={pentest} layout="fill" alt="" className="main" />
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
        <div id="right">
          <h1> New courses comming soon... </h1>
        </div>
      </div>
    </Advanced>
  )
}

export default AdvancedCourses
