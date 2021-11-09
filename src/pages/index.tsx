import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/Container'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../i18n/ptBR'
import he from '../i18n/he'
import Header1 from '../sections/Header/header'
import Landing from '../sections/Landing/landing'
import ForOrganizations from '../sections/For_Organizations/forOrganizations'
import ProfessionalCareer from '../sections/Professional_Career/professionalCareer'
import AboutCybersecurity from '../sections/About_Cybersecurity/aboutCybersecurity'
import SkillsCourses from '../sections/Skills_Courses/skillsCourses'
import CompaniesCarousel from '../sections/Companies_Caroulsel/companiesCarousel'
import AdvancedCourses from '../sections/Advanced_Courses/advancedCourses'

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
      <Header1 />
      <Landing />
      <ForOrganizations />
      <ProfessionalCareer />
      <AboutCybersecurity />
      <SkillsCourses />
      <AdvancedCourses />
      <CompaniesCarousel />
    </Container>
  )
}

export default Home
