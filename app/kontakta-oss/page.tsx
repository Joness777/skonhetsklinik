'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send this data to your backend
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-montserrat font-bold text-center mb-4">
            Kontakta <span className="text-gold">Oss</span>
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-12 text-charcoal/70">
            Har du frågor om våra behandlingar eller vill boka en tid? Tveka inte att kontakta oss.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-montserrat font-semibold mb-6">Skicka ett meddelande</h2>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Tack för ditt meddelande! Vi återkommer till dig så snart som möjligt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-charcoal font-medium mb-2">Namn</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-charcoal font-medium mb-2">E-post</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-charcoal font-medium mb-2">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-charcoal font-medium mb-2">Meddelande</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? 'Skickar...' : 'Skicka Meddelande'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-montserrat font-semibold mb-6">Kontaktinformation</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-light-pink p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold">Adress</h3>
                      <p>Skönhetsgatan 123<br />114 35 Stockholm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-light-pink p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold">Telefon</h3>
                      <p>08-123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-light-pink p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold">E-post</h3>
                      <p>info@skonhetsklinik.se</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-light-pink p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold">Öppettider</h3>
                      <p>Måndag - Fredag: 09:00 - 18:00<br />
                         Lördag: 10:00 - 16:00<br />
                         Söndag: Stängt</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map (Placeholder - in a real app you'd use Google Maps or similar) */}
              <div className="bg-light-pink h-64 rounded-lg flex items-center justify-center shadow-md">
                <p className="text-center p-4">
                  [Här kommer en interaktiv karta visas med vår kliniks plats]<br />
                  <span className="text-sm text-charcoal/60">I en riktig implementation skulle detta vara en Google Maps-widget</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 