import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    </Container>
  )
}

export default Home
