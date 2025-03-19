'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Calendar from 'react-calendar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'react-calendar/dist/Calendar.css';

// Mock data for services
const services = [
  {
    id: 'ansiktsbehandling',
    title: 'Ansiktsbehandling',
    duration: 60,
    price: '895 kr',
    image: '/images/facial.jpg'
  },
  {
    id: 'massage',
    title: 'Massage',
    duration: 50,
    price: '750 kr',
    image: '/images/massage.jpg'
  },
  {
    id: 'fransforlangning',
    title: 'Fransförlängning',
    duration: 90,
    price: '1295 kr',
    image: '/images/eyelashes.jpg'
  },
  {
    id: 'hudvard',
    title: 'Avancerad Hudvård',
    duration: 75,
    price: '1195 kr',
    image: '/images/skincare.jpg'
  }
];

// Mock available time slots
const generateTimeSlots = (date: Date) => {
  // Generate time slots from 9:00 to 17:00 with 30-minute intervals
  const slots = [];
  const startHour = 9;
  const endHour = 17;
  
  // Make some slots unavailable (randomly)
  const randomUnavailable = new Set();
  const maxUnavailable = 8; // Maximum number of unavailable slots
  
  for (let i = 0; i < maxUnavailable; i++) {
    randomUnavailable.add(Math.floor(Math.random() * ((endHour - startHour) * 2)));
  }
  
  let slotIndex = 0;
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const isAvailable = !randomUnavailable.has(slotIndex);
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push({
        time: timeString,
        available: isAvailable
      });
      slotIndex++;
    }
  }
  
  return slots;
};

// Booking form steps
enum BookingStep {
  SelectService,
  SelectDate,
  SelectTime,
  PersonalInfo,
  Confirmation
}

export default function BookingPage() {
  const searchParams = useSearchParams();
  const initialServiceId = searchParams.get('service');
  
  const [currentStep, setCurrentStep] = useState<BookingStep>(BookingStep.SelectService);
  const [selectedService, setSelectedService] = useState<string | null>(initialServiceId);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<Array<{time: string, available: boolean}>>([]);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize selected service if provided in URL
  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
      setCurrentStep(BookingStep.SelectDate);
    }
  }, [initialServiceId]);

  // Generate time slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(generateTimeSlots(selectedDate));
    }
  }, [selectedDate]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentStep(BookingStep.SelectDate);
  };

  const handleDateSelect = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      setCurrentStep(BookingStep.SelectTime);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep(BookingStep.PersonalInfo);
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send booking data to your backend
    // await fetch('/api/bookings', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     service: selectedService,
    //     date: selectedDate,
    //     time: selectedTime,
    //     ...personalInfo
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(BookingStep.Confirmation);
    }, 1000);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return date.toLocaleDateString('sv-SE', options);
  };
  
  const getSelectedServiceData = () => {
    return services.find(service => service.id === selectedService);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {[
          { step: BookingStep.SelectService, label: 'Välj tjänst' },
          { step: BookingStep.SelectDate, label: 'Välj datum' },
          { step: BookingStep.SelectTime, label: 'Välj tid' },
          { step: BookingStep.PersonalInfo, label: 'Dina uppgifter' }
        ].map((step, index) => (
          <div key={index} className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= step.step 
                  ? 'bg-gold text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            <div 
              className={`hidden sm:block ml-2 mr-4 text-sm ${
                currentStep >= step.step 
                  ? 'text-charcoal' 
                  : 'text-gray-400'
              }`}
            >
              {step.label}
            </div>
            {index < 3 && (
              <div 
                className={`w-8 h-0.5 sm:w-12 ${
                  currentStep > step.step 
                    ? 'bg-gold' 
                    : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (currentStep) {
      case BookingStep.SelectService:
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-montserrat font-semibold mb-6 text-center">Välj tjänst</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map(service => (
                <div 
                  key={service.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02] ${
                    selectedService === service.id 
                      ? 'ring-2 ring-gold' 
                      : ''
                  }`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <div className="relative h-48">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-montserrat font-semibold mb-2">{service.title}</h3>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">{service.duration} min</span>
                      <span className="font-medium">{service.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case BookingStep.SelectDate:
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-montserrat font-semibold mb-6 text-center">Välj datum</h2>
            
            {selectedService && (
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image 
                    src={getSelectedServiceData()?.image || ''}
                    alt={getSelectedServiceData()?.title || ''}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-montserrat font-semibold">{getSelectedServiceData()?.title}</h3>
                  <div className="flex gap-4 text-sm">
                    <span>{getSelectedServiceData()?.duration} min</span>
                    <span>{getSelectedServiceData()?.price}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setCurrentStep(BookingStep.SelectService)}
                  className="ml-auto text-sm text-gold hover:underline"
                >
                  Ändra
                </button>
              </div>
            )}
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Calendar
                onChange={handleDateSelect as any}
                value={selectedDate}
                minDate={new Date()}
                className="mx-auto"
                locale="sv-SE"
                prev2Label={null}
                next2Label={null}
                navigationLabel={({ date }) => 
                  date.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' })
                }
                tileDisabled={({ date }) => date.getDay() === 0} // Disable Sundays
              />
            </div>
          </div>
        );

      case BookingStep.SelectTime:
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-montserrat font-semibold mb-6 text-center">Välj tid</h2>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-montserrat font-semibold">{getSelectedServiceData()?.title}</h3>
                  <p className="text-charcoal/70">{formatDate(selectedDate)}</p>
                </div>
                <button 
                  onClick={() => setCurrentStep(BookingStep.SelectDate)}
                  className="text-sm text-gold hover:underline"
                >
                  Ändra
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold mb-4">Tillgängliga tider</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    disabled={!slot.available}
                    onClick={() => slot.available && handleTimeSelect(slot.time)}
                    className={`py-2 rounded-md text-center transition-colors ${
                      !slot.available 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : selectedTime === slot.time
                          ? 'bg-gold text-white'
                          : 'bg-light-pink hover:bg-blush-pink'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case BookingStep.PersonalInfo:
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-montserrat font-semibold mb-6 text-center">Dina uppgifter</h2>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-montserrat font-semibold">{getSelectedServiceData()?.title}</h3>
                  <p className="text-charcoal/70">
                    {formatDate(selectedDate)} kl. {selectedTime}
                  </p>
                </div>
                <button 
                  onClick={() => setCurrentStep(BookingStep.SelectTime)}
                  className="text-sm text-gold hover:underline"
                >
                  Ändra
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-charcoal font-medium mb-2">Förnamn</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={personalInfo.firstName}
                      onChange={handlePersonalInfoChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-charcoal font-medium mb-2">Efternamn</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={personalInfo.lastName}
                      onChange={handlePersonalInfoChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-charcoal font-medium mb-2">E-post</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-charcoal font-medium mb-2">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={personalInfo.phone}
                      onChange={handlePersonalInfoChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Bekräftar...' : 'Bekräfta bokning'}
                </button>
              </form>
            </div>
          </div>
        );

      case BookingStep.Confirmation:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-montserrat font-semibold mb-4">Bokning bekräftad!</h2>
              <p className="mb-6">
                Tack för din bokning, {personalInfo.firstName}! Vi har skickat bokningsdetaljer till {personalInfo.email}.
              </p>
              
              <div className="bg-light-pink p-4 rounded-lg mb-6">
                <div className="text-left">
                  <h3 className="font-montserrat font-semibold mb-2">Bokningsdetaljer:</h3>
                  <p><span className="font-medium">Behandling:</span> {getSelectedServiceData()?.title}</p>
                  <p><span className="font-medium">Datum:</span> {formatDate(selectedDate)}</p>
                  <p><span className="font-medium">Tid:</span> {selectedTime}</p>
                  <p><span className="font-medium">Pris:</span> {getSelectedServiceData()?.price}</p>
                </div>
              </div>
              
              <p className="text-sm text-charcoal/70 mb-6">
                Om du behöver ändra eller avboka din tid, vänligen kontakta oss på 08-123 45 67 senast 24 timmar före bokad tid.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-montserrat font-bold text-center mb-4">
            Boka <span className="text-gold">Tid</span>
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-12 text-charcoal/70">
            Välj den behandling du önskar och boka en tid som passar dig.
          </p>
          
          {currentStep !== BookingStep.Confirmation && renderStepIndicator()}
          
          {renderContent()}
        </div>
      </main>
      <Footer />
    </>
  );
} 