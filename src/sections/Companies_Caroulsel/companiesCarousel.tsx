import { useRouter } from 'next/dist/client/router'

import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import CompanyCarousel from '../../components/CompanyCarousel'
import { companies } from '../../utils/companies'
import { CarouselOfCases } from './style'

function CompaniesCarousel() {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <>
      <CarouselOfCases>
        <div className="carousel">
          <h1>{lang.companiesCarouselTitle}</h1>
          <CompanyCarousel CarouselItemsObject={companies.attended} />
        </div>
      </CarouselOfCases>
    </>
  )
}

export default CompaniesCarousel
