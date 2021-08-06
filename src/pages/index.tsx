import React from 'react'
import Head from 'next/head'
import logo from '../assets/logo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>CySource</title>
      </Head>

      <img src={logo} alt="CySource logo" />

      <h1>Welcome to the brand new CySource Website</h1>
      <p>Welcome to the brand new CySource Website</p>
    </Container>
  )
}

export default Home
