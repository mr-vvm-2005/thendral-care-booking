import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import thendralLogo from '@/assets/thendral-logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-soft border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Top Info Bar */}
        <div className="hidden lg:flex flex-wrap items-center justify-between py-3 text-sm border-b border-border/30">
          <div className="flex items-center space-x-4 xl:space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 8778038383</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-secondary" />
              <span className="hidden xl:inline">Mon-Sat: 9:30 AM - 1:00 PM, 5:00 PM - 8:00 PM</span>
              <span className="xl:hidden">Mon-Sat: 9:30-13:00, 17:00-20:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Shenkottai, Tamil Nadu</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <img 
              src={thendralLogo} 
              alt="Thendral Dental Care" 
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                <span className="heading-luxury">Thendral</span>
                <span className="text-secondary font-bold ml-1">Dental Care</span>
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Premium Dental Healthcare</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#doctor" className="text-foreground hover:text-primary transition-colors font-medium">
              Doctor
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <button className="btn-luxury">
              <span className="hidden xl:inline">Book Appointment</span>
              <span className="xl:hidden">Book</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;