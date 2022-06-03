import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { ForOrgs } from './style'
import forOrg from '../../assets/img/forOrg.svg'

function ForOrganizations() {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
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
  )
}

export default ForOrganizations
