import { useEffect } from 'react'
import { ContactSection, HeroSection, ProjectSection } from '../components'

const HomePage = () => {
  const title = 'Home | Portfolio'

  useEffect(() => {
    if (document.title !== title) document.title = title
  }, [title])

  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default HomePage
