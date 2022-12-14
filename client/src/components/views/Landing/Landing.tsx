import './Landing.styles.scss'

import { HeroSection } from './sections/HeroSection'
import { MainSection } from './sections/MainSection'
import { TeamSection } from './sections/TeamSection'
import { FooterSection } from './sections/FooterSection'

export const Landing = () => {
  return (
    <>
      <HeroSection  />
      <MainSection />
      <TeamSection />
      <FooterSection />
    </>
  )
}
