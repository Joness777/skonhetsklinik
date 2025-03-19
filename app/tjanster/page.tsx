import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Services data
const services = [
  {
    id: 'ansiktsbehandling',
    title: 'Ansiktsbehandling',
    image: '/images/facial.jpg',
    description: 'Vår signaturbehandling som rengör, återfuktar och ger näring åt huden. Inkluderar djuprengöring, peeling, extraction, mask och massage.',
    price: '895 kr',
    duration: '60 min'
  },
  {
    id: 'massage',
    title: 'Massage',
    image: '/images/massage.jpg',
    description: 'Avslappnande helkroppsmassage som löser upp spänningar och blockader. Våra utbildade terapeuter anpassar trycket efter dina behov.',
    price: '750 kr',
    duration: '50 min'
  },
  {
    id: 'fransforlangning',
    title: 'Fransförlängning',
    image: '/images/eyelashes.jpg',
    description: 'Få längre, tjockare och naturligt vackra fransar med vår fransförlängning. Resultatet är både dramatiskt och naturligt.',
    price: '1295 kr',
    duration: '90 min'
  },
  {
    id: 'hudvard',
    title: 'Avancerad Hudvård',
    image: '/images/skincare.jpg',
    description: 'Intensiv återfuktande behandling för torr och känslig hud. Innehåller högkoncentrerad hyaluronsyra och vitaminer.',
    price: '1195 kr',
    duration: '75 min'
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-montserrat font-bold text-center mb-4">
            Våra <span className="text-gold">Tjänster</span>
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-12 text-charcoal/70">
            På SkönhetsKlinik erbjuder vi ett brett utbud av skönhetsbehandlingar utförda av våra erfarna och certifierade terapeuter.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-1 gap-12 mt-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 bg-white rounded-lg overflow-hidden shadow-md`}
              >
                <div className="md:w-1/2 relative min-h-[300px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-montserrat font-semibold mb-4">{service.title}</h2>
                  <p className="mb-6 text-charcoal/80">{service.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-light-pink px-4 py-2 rounded-full text-sm">
                      <span className="font-semibold">Pris:</span> {service.price}
                    </div>
                    <div className="bg-light-pink px-4 py-2 rounded-full text-sm">
                      <span className="font-semibold">Tid:</span> {service.duration}
                    </div>
                  </div>
                  <Link href={`/boka-tid?service=${service.id}`} className="btn-primary self-start">
                    Boka Nu
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Info */}
        <section className="mt-20 luxurious-gradient py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-6">
              Specialpaket och Erbjudanden
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <div className="mb-8 pb-8 border-b border-blush-pink">
                <h3 className="text-xl font-montserrat font-semibold mb-3">Lyxpaket - Ansiktsbehandling + Massage</h3>
                <p className="mb-4 text-charcoal/80">
                  Njut av vår populära ansiktsbehandling följt av en avslappnande ryggmassage.
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-light-pink px-4 py-2 rounded-full text-sm">
                    <span className="font-semibold">Pris:</span> 1495 kr
                  </div>
                  <div className="bg-light-pink px-4 py-2 rounded-full text-sm">
                    <span className="font-semibold">Tid:</span> 110 min
                  </div>
                  <div className="bg-light-pink px-4 py-2 rounded-full text-sm">
                    <span className="font-semibold">Spara:</span> 150 kr
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Presentkort</h3>
                <p className="mb-4 text-charcoal/80">
                  Ge bort en lyxig upplevelse. Våra presentkort kan användas för alla behandlingar och är giltiga i 12 månader.
                </p>
                <Link href="/kontakta-oss" className="btn-secondary">
                  Kontakta Oss
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 