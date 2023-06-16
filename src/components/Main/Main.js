import {
  AnchorContext,
  AnchorProvider,
  AnchorSection,
} from 'react-anchor-navigation'
import { useContext } from 'react'
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'

const Main = () => {
  const { hash, sections } = useContext(AnchorContext)
  return (
    <AnchorProvider>
      <Header loggedOut />
      <Promo />
      <AnchorSection id="about">
        <AboutProject />
      </AnchorSection>
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </AnchorProvider>
  )
}

export default Main
