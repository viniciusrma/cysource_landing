import React, { useEffect } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import { useRouter } from 'next/dist/client/router'
import ptBR from '../../i18n/ptBR'
import he from '../../i18n/he'
import { CarouselOfCases } from './Style/Carousel'
import facebook from '../assets/facebook.svg'
import amazon from '../assets/amazon.svg'
import tiktok from '../assets/tiktok.svg'
import lg from '../assets/lg.svg'
import dji from '../assets/dji.svg'
import whatsapp from '../assets/whatsapp.svg'
import paypal from '../assets/paypal.svg'
import aliexpress from '../assets/aliexpress.svg'
import ebay from '../assets/ebay.svg'
import snapchat from '../assets/snapchat.svg'
import telegram from '../assets/telegram.svg'

const CompaniesCarousel: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const lang = locale === 'ptBR' ? ptBR : he

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  })

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <CarouselOfCases className="embla" ref={emblaRef}>
      <div className="carousel">
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
      </div>
    </CarouselOfCases>
  )
}

export default CompaniesCarousel
