import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/sections/Container'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../i18n/ptBR'
import he from '../i18n/he'
import Header1 from '../sections/header'
import Landing from '../sections/landing'
import ForOrganizations from '../sections/forOrganizations'
import ProfessionalCareer from '../sections/professionalCareer'
import AboutCybersecurity from '../sections/aboutCybersecurity'
import SkillsCourses from '../sections/skillsCourses'
import CompaniesCarousel from '../sections/companiesCarousel'

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
    </Container>
  )
}

export default Home
