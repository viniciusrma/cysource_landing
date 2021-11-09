import React from 'react'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import Carousel from "../../components/Carousel";
import { companies } from "../../utils/companies";

const CompaniesCarousel: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  return (
    <>
    <Carousel CarouselItemsObject={companies.attended}/>
    {/* <div className="carousel">
        <h1>{lang.companiesCarouselTitle}</h1>
        <div className="embla__container">
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
          <div className="embla__slide">
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
      </div> */}
    </>
  )
}

export default CompaniesCarousel
