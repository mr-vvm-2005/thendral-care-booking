import React from 'react';
import { Sparkles, ShieldCheck, Smile, Stethoscope, Crown, Brush } from 'lucide-react';
import whiteningImg from '@/assets/whitening.jpg';
import rootCanalImg from '@/assets/root-canal.jpg';
import bracesImg from '@/assets/braces.jpg';
import cleaningImg from '@/assets/cleaning.jpg';
import implantsImg from '@/assets/implants.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile.",
      image: whiteningImg,
      icon: Sparkles,
      price: "From ₹3,000"
    },
    {
      id: 2,
      title: "Root Canal Treatment",
      description: "Pain-free root canal therapy to save your natural teeth.",
      image: rootCanalImg,
      icon: ShieldCheck,
      price: "From ₹5,000"
    },
    {
      id: 3,
      title: "Braces & Aligners",
      description: "Straighten your teeth with modern orthodontic solutions.",
      image: bracesImg,
      icon: Smile,
      price: "From ₹25,000"
    },
    {
      id: 4,
      title: "Dental Cleaning",
      description: "Professional cleaning and scaling for optimal oral health.",
      image: cleaningImg,
      icon: Brush,
      price: "From ₹1,500"
    },
    {
      id: 5,
      title: "Dental Implants",
      description: "Permanent tooth replacement with titanium implants.",
      image: implantsImg,
      icon: Crown,
      price: "From ₹20,000"
    },
    {
      id: 6,
      title: "General Checkup",
      description: "Comprehensive dental examination and consultation.",
      image: cleaningImg,
      icon: Stethoscope,
      price: "From ₹500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="heading-luxury">Premium Services</span>
          </h2>
          <p className="text-xl text-luxury max-w-2xl mx-auto">
            Comprehensive dental care with state-of-the-art technology and 
            personalized treatment plans for every patient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="card-service group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-soft">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <p className="text-luxury">
                  {service.description}
                </p>

                <button className="w-full btn-outline-luxury mt-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom treatment plan? Our experts are here to help.
          </p>
          <button className="btn-secondary-luxury">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;