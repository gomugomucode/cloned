import { AboutContent } from '../components/about/FounderSection'
import { FAQ } from '../components/home/FAQ'
import { CTASection } from '../components/home/CTASection'

export function AboutPage() {
  return (
    <>
      <AboutContent />
      <FAQ />
      <CTASection variant="support" />
    </>
  )
}
