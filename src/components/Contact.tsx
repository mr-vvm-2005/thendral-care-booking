import React from 'react';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';

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
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-luxury">+91 7604825665</p>
                    <p className="text-sm text-muted-foreground">Call for appointments</p>
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
                    <p className="text-sm text-secondary">9:30 AM - 1:30 PM</p>
                    <p className="text-sm text-secondary">4:30 PM - 8:00 PM</p>
                    <p className="text-sm text-primary mt-1">Sunday: Available only for appointments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold mb-4">Quick Booking</h3>
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="tel:+917604825665"
                  className="btn-luxury flex items-center justify-center w-full"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
                <a 
                  href="mailto:tsureshapr497@gmail.com?subject=Appointment Request&body=Hi, I would like to book an appointment with Dr. Suresh at Thendral Dental Care."
                  className="btn-secondary flex items-center justify-center w-full"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
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
                  href="mailto:tsureshapr497@gmail.com?subject=Dental Service Inquiry&body=Hi, I would like to inquire about dental services."
                  className="btn-luxury w-full flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 animate-slide-up">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center">Find Us on Map</h3>
            <div className="h-96 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5877458916864!2d77.30054931478!3d8.976162993574892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042f8e6d8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sThendral%20Dental%20Care!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thendral Dental Care Location"
              />
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://maps.app.goo.gl/8v8sKDiRTSd51t9r9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;