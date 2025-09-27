import React from 'react';
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="heading-luxury">Touch</span>
          </h2>
          <p className="text-xl text-luxury max-w-2xl mx-auto">
            Ready to transform your smile? Contact us today to schedule your consultation 
            with Dr. Suresh at Thendral Dental Care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="card-luxury">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-luxury">+91 8778038383</p>
                    <p className="text-sm text-muted-foreground">Quick booking and queries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-luxury">Bus stand, opposite to Municipality Office</p>
                    <p className="text-luxury">Shenkottai, Tamil Nadu 627809</p>
                    <p className="text-sm text-muted-foreground">Google Plus Code: X7G2+J5</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                    <p className="text-luxury">Monday - Saturday</p>
                    <p className="text-sm text-secondary">9:30 AM - 1:00 PM</p>
                    <p className="text-sm text-secondary">5:00 PM - 8:00 PM</p>
                    <p className="text-sm text-destructive mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold mb-4">Quick Booking</h3>
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="https://wa.me/+918778038383?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Suresh%20at%20Thendral%20Dental%20Care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury flex items-center justify-center w-full"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="card-luxury">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-input"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-input"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-input"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-input">
                    <option>Select a service</option>
                    <option>General Checkup</option>
                    <option>Teeth Whitening</option>
                    <option>Root Canal Treatment</option>
                    <option>Braces & Aligners</option>
                    <option>Dental Cleaning</option>
                    <option>Dental Implants</option>
                    <option>Emergency Treatment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-input resize-none"
                    placeholder="Tell us about your dental needs or any questions you have..."
                  ></textarea>
                </div>

                <a 
                  href="https://wa.me/+918778038383?text=Hi,%20I%20would%20like%20to%20send%20you%20a%20message%20about%20dental%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury w-full flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Send via WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 animate-slide-up">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center">Find Us on Map</h3>
            <div className="h-96 bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Google Maps integration would go here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  X7G2+J5 Shenkottai, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;