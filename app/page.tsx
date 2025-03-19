import Image from "next/image";
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Skönhetsklinik"
              fill
              priority
              className="object-cover brightness-[0.85]"
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-center md:text-left">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg md:max-w-xl">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-charcoal mb-4">
                Få Din Perfekta <span className="text-gold">Glow</span>
              </h1>
              <p className="text-lg mb-8 text-charcoal/80">
                Professionella behandlingar för ansikte och kropp i en lyxig och avslappnande miljö.
              </p>
              <Link href="/boka-tid" className="btn-primary">
                Boka Nu
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-light-pink">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
              Våra <span className="text-gold">Behandlingar</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Facial Treatment */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                <div className="relative h-64">
                  <Image 
                    src="/images/facial.jpg" 
                    alt="Ansiktsbehandling" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Ansiktsbehandling</h3>
                  <p className="text-charcoal/70 mb-4">Återställ din huds naturliga glans med vår lyxiga ansiktsbehandling.</p>
                  <Link href="/tjanster#ansiktsbehandling" className="text-gold hover:underline font-medium">
                    Läs mer
                  </Link>
                </div>
              </div>

              {/* Massage */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                <div className="relative h-64">
                  <Image 
                    src="/images/massage.jpg" 
                    alt="Massage" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Massage</h3>
                  <p className="text-charcoal/70 mb-4">Släpp daglig stress med vår djupgående avslappnande massage.</p>
                  <Link href="/tjanster#massage" className="text-gold hover:underline font-medium">
                    Läs mer
                  </Link>
                </div>
              </div>

              {/* Eyelash Extensions */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                <div className="relative h-64">
                  <Image 
                    src="/images/eyelashes.jpg" 
                    alt="Fransförlängning" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-2">Fransförlängning</h3>
                  <p className="text-charcoal/70 mb-4">Få fylliga och långa fransar som förbättrar dina ögons naturliga skönhet.</p>
                  <Link href="/tjanster#fransforlangning" className="text-gold hover:underline font-medium">
                    Läs mer
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/tjanster" className="btn-secondary">
                Se Alla Behandlingar
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
              Vad <span className="text-gold">Kunder Säger</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-blush-pink">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal/80 italic mb-6">
                  "Min ansiktsbehandling var helt fantastisk! Personalen var professionell och omtänksam. Min hud har aldrig känts så bra förut. Jag kommer definitivt tillbaka!"
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-montserrat font-semibold">Lisa Andersson</h4>
                    <p className="text-sm text-charcoal/60">Ansiktsbehandling</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-blush-pink">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal/80 italic mb-6">
                  "Jag har varit på många skönhetssalonger men SkönhetsKlinik är i särklass. Atmosfären är så lyxig och avslappnande. Min massage var perfekt anpassad efter mina behov."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-montserrat font-semibold">Johan Karlsson</h4>
                    <p className="text-sm text-charcoal/60">Massage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="luxurious-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">
              Redo Att Förbättra Din Skönhet?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Boka din behandling idag och ta det första steget mot den bästa versionen av dig själv.
            </p>
            <Link href="/boka-tid" className="btn-primary">
              Boka Din Tid Nu
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
