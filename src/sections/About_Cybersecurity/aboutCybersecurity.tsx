import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { InfoAboutCyberSecutity } from './style'
import questions from '../../assets/img/questions.svg'


function AboutCybersecurity() {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <InfoAboutCyberSecutity>
      <div id="left">
        <img src={questions} alt="" />
      </div>
      <div id="right">
        <h1>{lang.doYouHaveQuestions}</h1>
        <div>
          <button>{lang.moreInfo}</button>
        </div>
      </div>
    </InfoAboutCyberSecutity>
  )
}

export default AboutCybersecurity
