import React from 'react'
import Head from 'next/head'
import {
  AdvancedCourses,
  Container,
  ForOrgs,
  Header,
  InfoAboutCyberSecutity,
  Landing,
  ProfessionalCareer,
  SkillsCourses
} from '../styles/pages/Home'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../i18n/ptBR'
import he from '../i18n/he'
import logo from '../assets/logo.svg'
import arrowRight from '../assets/arrowRight.svg'
import forOrg from '../assets/forOrg.svg'
import pentest from '../assets/pentest.svg'

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
          <p>
            {lang.secondtext} <span>{lang.highlightedPhrase}</span>
          </p>
          <div id="landing-buttons">
            <button id="start">{lang.startMyCareer}</button>
            <button>{lang.improveMyCareer}</button>
          </div>
        </div>
      </Landing>
      <ForOrgs>
        <div>
          <img src={forOrg} alt="For orgs sticker" />
        </div>
        <div id="texts">
          <h1>{lang.expertsOrganizations}</h1>
          <div id="forOrg-buttons">
            <button id="start">{lang.knowMore}</button>
            <button>{lang.getInTouch}</button>
          </div>
        </div>
      </ForOrgs>
      <ProfessionalCareer>
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
          <div id="pentest">
            <img src={pentest} alt="" />
            <div id="card">
              <h4>Title</h4>
              <p>{lang.cardDescription}</p>
            </div>
          </div>
        </div>
      </ProfessionalCareer>
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
      <SkillsCourses>
        <h1>{lang.skillsCourses}</h1>
        <div>
          <div className="row">
            <div id="skill">
              <img src={pentest} alt="" />
              <div id="card">
                <h4>Title</h4>
                <p>{lang.cardDescription}</p>
              </div>
            </div>
            <div id="skill">
              <img src={pentest} alt="" />
              <div id="card">
                <h4>Title</h4>
                <p>{lang.cardDescription}</p>
              </div>
            </div>
            <div id="skill">
              <img src={pentest} alt="" />
              <div id="card">
                <h4>Title</h4>
                <p>{lang.cardDescription}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div id="skill">
              <img src={pentest} alt="" />
              <div id="card">
                <h4>Title</h4>
                <p>{lang.cardDescription}</p>
              </div>
            </div>
            <div id="skill">
              <img src={pentest} alt="" />
              <div id="card">
                <h4>Title</h4>
                <p>{lang.cardDescription}</p>
              </div>
            </div>
            <div id="skill">
              <img src={pentest} alt="" />
              <div id="card">
                <h4>Title</h4>
                <p>{lang.cardDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </SkillsCourses>
      <AdvancedCourses>
        <h1>{lang.advancedCourses}</h1>
      </AdvancedCourses>
    </Container>
  )
}

export default Home
