import React from 'react'
import Head from 'next/head'
import {
  AdvancedCourses,
  CompaniesCarousel,
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
import skill_level from '../assets/skill-level.svg'
import schedule from '../assets/schedule.svg'
import facebook from '../assets/facebook.svg'
import amazon from '../assets/amazon.svg'
import tiktok from '../assets/tiktok.svg'
import lg from '../assets/lg.svg'
import dji from '../assets/dji.svg'
import whatsapp from '../assets/whatsapp.svg'
import paypal from '../assets/paypal.svg'
import aliexpress from '../assets/aliexpress.svg'
import ebay from '../assets/ebay.svg'
import snapchat from '../assets/snapchat.svg'
import telegram from '../assets/telegram.svg'


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
      </SkillsCourses>
      <AdvancedCourses>
        <h1 className="advanced-title">{lang.advancedCourses}</h1>
        <h4>
          Advanced research courses (for hacking and programming connoisseurs).
        </h4>
        <div className="container">
          <div id="left">
            <div id="malware-analysis">
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
          <div id="right">
            <h1> New courses comming soon... </h1>
          </div>
        </div>
      </AdvancedCourses>
      <CompaniesCarousel>
        <div className="carousel">
          <h1>{lang.companiesCarouselTitle}</h1>
          <div id="cards-section">
            <div className="company">
              <div id="top">
                <img src={facebook} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={amazon} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={tiktok} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={lg} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={dji} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={whatsapp} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={paypal} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={aliexpress} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={ebay} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={snapchat} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
            <div className="company">
              <div id="top">
                <img src={telegram} alt="facebook logo" />
                <p>Handling messages on facebook</p>
              </div>
              <div id="bottom">
                <a href="">Our Research</a>
                <a href="">Canaltech</a>
                <a href="">ComputerWorld</a>
                <a href="">PCWorld</a>
              </div>
            </div>
          </div>
        </div>
      </CompaniesCarousel>
    </Container>
  )
}

export default Home
