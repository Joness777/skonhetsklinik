import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-light-pink border-t border-blush-pink">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-semibold text-charcoal mb-4">
              <span className="text-gold">Skönhets</span>Klinik
            </h3>
            <p className="text-sm text-charcoal/70 mb-4">
              Vår professionella skönhetsklinik erbjuder förstklassiga behandlingar för ansikte och kropp i en lyxig och avslappnande miljö.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-charcoal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gold hover:text-charcoal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold text-charcoal mb-4">Öppettider</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Måndag - Fredag:</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lördag:</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Söndag:</span>
                <span>Stängt</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold text-charcoal mb-4">Kontakt</h3>
            <address className="not-italic">
              <p className="mb-2">Skönhetsgatan 123</p>
              <p className="mb-2">114 35 Stockholm</p>
              <p className="mb-2">Tel: 08-123 45 67</p>
              <p className="mb-2">Email: info@skonhetsklinik.se</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blush-pink mt-8 pt-8 text-center">
          <p className="text-sm text-charcoal/70">
            &copy; {new Date().getFullYear()} SkönhetsKlinik. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 