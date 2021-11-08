import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { Skills_Courses } from './style'

import skill_level from '../../public/skill-level.svg'
import schedule from '../../public/schedule.svg'
import pentest from '../../public/pentest.svg'

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
          <div id="skill">
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
          <div id="skill">
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
        <div className="second-row">
          <div id="skill">
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
          <div id="skill">
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
          <div id="skill">
            <Image src={pentest} layout="fill" alt="" className="main" />
            <div id="card">
              <h1 className="title">Title</h1>
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
    </Skills_Courses>
  )
}

export default SkillsCourses
