import React from 'react'
import Image from 'next/image'

import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { ForOrgs } from './style'
import forOrg from '../../public/forOrg.svg'

const ForOrganizations: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <ForOrgs>
      <div>
        <Image src={forOrg} layout="fill" alt="For orgs sticker" />
      </div>
      <div id="texts">
        <h1>{lang.expertsOrganizations}</h1>
        <div id="forOrg-buttons">
          <button id="start">{lang.knowMore}</button>
          <button>{lang.getInTouch}</button>
        </div>
      </div>
    </ForOrgs>
  )
}

export default ForOrganizations
