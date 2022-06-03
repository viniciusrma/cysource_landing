import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { Skills_Courses } from './style'
import Carousel from "../../components/Carousel";
import { courses } from "../../utils/courses";

function SkillsCourses() {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <Skills_Courses>
      <h1 className="skills-title">{lang.skillsCourses}</h1>s
      <Carousel CarouselItemsObject={courses.active}/>
    </Skills_Courses>
  )
}

export default SkillsCourses
