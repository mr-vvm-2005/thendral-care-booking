import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import thendralLogo from '@/assets/thendral-logo.png';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={thendralLogo} 
                alt="Thendral Dental Care" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">
                  Thendral Dental Care
                </h3>
                <p className="text-accent-foreground/80 text-sm">Premium Dental Healthcare</p>
              </div>
            </div>
            <p className="text-accent-foreground/80 leading-relaxed">
              Providing exceptional dental care with state-of-the-art technology 
              and personalized treatment plans for every patient.
            </p>
            <div className="flex space-x-4">
              <div className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <div className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <div className="bg-primary/20 p-2 rounded-lg hover:bg-primary/30 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-accent-foreground/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-accent-foreground/80 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#doctor" className="text-accent-foreground/80 hover:text-white transition-colors">
                  About Dr. Suresh
                </a>
              </li>
              <li>
                <a href="#contact" className="text-accent-foreground/80 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-accent-foreground/80 hover:text-white transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-accent-foreground/80">Teeth Whitening</li>
              <li className="text-accent-foreground/80">Root Canal Treatment</li>
              <li className="text-accent-foreground/80">Braces & Aligners</li>
              <li className="text-accent-foreground/80">Dental Cleaning</li>
              <li className="text-accent-foreground/80">Dental Implants</li>
              <li className="text-accent-foreground/80">General Checkup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+91 8778038383</p>
                  <p className="text-accent-foreground/80 text-sm">Call us anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Bus stand, opposite to Municipality Office</p>
                  <p className="text-accent-foreground/80 text-sm">Shenkottai, Tamil Nadu 627809</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Mon-Sat: 9:30 AM - 1:00 PM</p>
                  <p className="text-white font-medium">5:00 PM - 8:00 PM</p>
                  <p className="text-accent-foreground/80 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent-foreground/80 text-sm">
              © 2025 Thendral Dental Care. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-accent-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-accent-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-accent-foreground/80 hover:text-white transition-colors">
                Emergency Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;