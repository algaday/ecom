import Accordion from '../../components/Accordion/Accordion'
import Advantages from '../../components/Advantages/Advantages'
import Banner from '../../components/Banner/Banner'
import Feedback from '../../components/Feedback/Feedback'
import FullMenu from '../../components/FullMenu/FullMenu'
import Hero from '../../components/Hero/Hero'
import OfferBanner from '../../components/OfferBanner/OfferBanner'
import SpecialMenu from '../../components/SpecialMenu/SpecialMenu'

function MainPage() {
  return (
    <>
      <Hero />
      <Advantages />
      <SpecialMenu />
      <Banner />
      <OfferBanner />
      <FullMenu />
      <Feedback />
      <Accordion />
    </>
  )
}

export default MainPage
