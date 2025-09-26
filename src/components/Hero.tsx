import React from 'react';
import { Calendar, Star, Award, Users } from 'lucide-react';
import dentalHero from '@/assets/dental-hero.jpg';
import thendralLogo from '@/assets/thendral-logo.png';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center space-x-3">
              <img 
                src={thendralLogo} 
                alt="Thendral Dental Care" 
                className="h-16 w-16 object-contain animate-float"
              />
              <div>
                <h1 className="text-5xl font-bold leading-tight">
                  <span className="heading-luxury">Thendral</span><br />
                  <span className="text-secondary">Dental Care</span>
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Premium Dental Healthcare in Shenkottai
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Your Smile is Our
              <span className="heading-luxury block">Priority</span>
            </h2>

            <p className="text-xl text-luxury leading-relaxed">
              Experience world-class dental care with Dr. Suresh at our state-of-the-art clinic. 
              We provide comprehensive dental treatments in a comfortable, luxury environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-luxury flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
              <button className="btn-outline-luxury">
                View Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mx-auto mb-2">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury">
              <img 
                src={dentalHero} 
                alt="Modern Dental Clinic Interior" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-6 shadow-luxury">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-foreground">Dr. Suresh</h3>
                  <p className="text-muted-foreground">Senior Dental Surgeon</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
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