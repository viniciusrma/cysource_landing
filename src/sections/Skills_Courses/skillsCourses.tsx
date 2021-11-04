import React from 'react'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { Skills_Courses } from './style'

import skill_level from '../assets/img/skill-level.svg'
import schedule from '../assets/img/schedule.svg'
import pentest from '../assets/img/pentest.svg'

const SkillsCourses: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <Skills_Courses>
      <h1 className="skills-title">{lang.skillsCourses}</h1>
      <div>
        <div className="row">
          <div id="skill">
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
          <div id="skill">
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
          <div id="skill">
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
        <div className="second-row">
          <div id="skill">
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
          <div id="skill">
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
          <div id="skill">
            <img src={pentest} alt="" className="main" />
            <div id="card">
              <h1 className="title">Title</h1>
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
    </Skills_Courses>
  )
}

export default SkillsCourses
