import React from 'react';
import { Phone, Mail, Star, Award, Users } from 'lucide-react';
import dentalHero from '@/assets/dental-hero.jpg';
import thendralLogo from '@/assets/thendral-logo.png';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh] py-16 lg:py-20">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-up text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3">
              <img 
                src={thendralLogo} 
                alt="Thendral Dental Care" 
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain animate-float"
              />
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="heading-luxury">Thendral</span><br />
                  <span className="text-secondary">Dental Care</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mt-2">
                  Premium Dental Healthcare in Shenkottai
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Your Smile is Our
              <span className="heading-luxury block">Priority</span>
            </h2>

            <p className="text-lg sm:text-xl text-luxury leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience world-class dental care with Dr. Suresh at our state-of-the-art clinic. 
              We provide comprehensive dental treatments in a comfortable, luxury environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="tel:+917604825665"
                className="btn-luxury flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a 
                href="mailto:tsureshapr497@gmail.com?subject=Appointment Request&body=Hi, I would like to book an appointment with Dr. Suresh at Thendral Dental Care."
                className="btn-outline-luxury flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full mx-auto lg:mx-0 mb-2">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full mx-auto lg:mx-0 mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full mx-auto lg:mx-0 mb-2">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">4.9</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in order-first lg:order-last">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-luxury">
              <img 
                src={dentalHero} 
                alt="Modern Dental Clinic Interior" 
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-luxury">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground">Dr. Suresh</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Senior Dental Surgeon</p>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;