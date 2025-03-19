import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Anna Lindström',
    role: 'Grundare & Chefsestetiker',
    bio: 'Anna har över 15 års erfarenhet inom skönhetsbranschen och är certifierad inom flera områden, inklusive avancerad hudvård och anti-aging behandlingar.',
    image: '/images/team1.jpg'
  },
  {
    name: 'Erik Johansson',
    role: 'Massageterapeut',
    bio: 'Med sin expertis inom olika massagetekniker, hjälper Erik våra kunder att hitta avkoppling och lindra spänningar i kroppen.',
    image: '/images/team2.jpg'
  }
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-montserrat font-bold text-center mb-4">
            Om <span className="text-gold">Oss</span>
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-12 text-charcoal/70">
            Upptäck mer om SkönhetsKlinik, vår filosofi och vårt dedikerade team av experter.
          </p>

          {/* Our Story */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
              <h2 className="text-2xl font-montserrat font-semibold mb-4">Vår Historia</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="mb-4">
                    SkönhetsKlinik grundades 2015 med en vision att erbjuda högkvalitativa skönhetsbehandlingar i en lyxig och avslappnande miljö. Vår grundare, Anna Lindström, såg ett behov av en klinik som fokuserade lika mycket på kvalitet och resultat som på kundupplevelsen.
                  </p>
                  <p>
                    Vi har växt stadigt under åren och byggt upp ett starkt rykte för vår expertis, personliga service och hängivenhet till våra kunder. Vår filosofi är att skönhet börjar med hälsa och välbefinnande, och att varje kund förtjänar en skräddarsydd upplevelse.
                  </p>
                </div>
                <div className="md:w-1/2 relative min-h-[250px]">
                  <Image
                    src="/images/clinic.jpg"
                    alt="SkönhetsKlinik"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <div className="bg-light-pink p-8 rounded-lg shadow-md max-w-4xl mx-auto">
              <h2 className="text-2xl font-montserrat font-semibold mb-6 text-center">Våra Värderingar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-montserrat font-semibold mb-3 text-gold">Kvalitet</h3>
                  <p>Vi använder endast premiumprodukte och de mest effektiva teknikerna för att ge dig bästa möjliga resultat.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-montserrat font-semibold mb-3 text-gold">Expertis</h3>
                  <p>Vårt team är välutbildat och certifierat, med gedigen erfarenhet inom sina specialområden.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-montserrat font-semibold mb-3 text-gold">Personlig Service</h3>
                  <p>Vi anpassar varje behandling efter dina unika behov och ger dig en skräddarsydd upplevelse.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section>
            <h2 className="text-3xl font-montserrat font-bold text-center mb-10">
              Vårt <span className="text-gold">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                  <div className="relative h-80 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold mb-1">{member.name}</h3>
                  <p className="text-gold font-medium mb-4">{member.role}</p>
                  <p className="text-charcoal/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 