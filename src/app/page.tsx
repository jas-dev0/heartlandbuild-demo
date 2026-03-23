import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import Services    from '@/components/Services'
import Gallery     from '@/components/Gallery'
import Team        from '@/components/Team'
import QuoteForm   from '@/components/QuoteForm'
import ServiceArea from '@/components/ServiceArea'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Team />
      <QuoteForm />
      <ServiceArea />
      <Footer />
    </main>
  )
}
