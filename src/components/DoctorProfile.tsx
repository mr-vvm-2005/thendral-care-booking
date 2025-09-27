import React from 'react';
import { GraduationCap, Award, Clock, Calendar, Phone, MapPin } from 'lucide-react';

const DoctorProfile = () => {
  return (
    <section id="doctor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image & Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-luxury">
                <div className="w-64 h-64 rounded-2xl bg-white shadow-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">DS</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Dr. Suresh</h3>
                    <p className="text-muted-foreground">Senior Dental Surgeon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Education</h4>
                  <p className="text-muted-foreground">BDS (Bachelor of Dental Surgery)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Experience</h4>
                  <p className="text-muted-foreground">5+ Years in Dental Practice</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Direct Contact</h4>
                  <p className="text-muted-foreground">+91 8778038383</p>
                </div>
              </div>
            </div>
          </div>

          {/* About & Schedule */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Meet <span className="heading-luxury">Dr. Suresh</span>
              </h2>
              <p className="text-xl text-luxury leading-relaxed mb-6">
                With over 5 years of experience in dental care, Dr. Suresh is committed to providing 
                exceptional dental treatment in a comfortable and caring environment. His expertise 
                spans across all aspects of modern dentistry.
              </p>
              <p className="text-luxury leading-relaxed">
                Dr. Suresh believes in preventive care and patient education, ensuring every patient 
                receives personalized treatment plans that meet their specific needs and goals.
              </p>
            </div>

            {/* Clinic Schedule */}
            <div className="card-luxury">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="h-6 w-6 text-primary mr-3" />
                Clinic Schedule
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-medium text-foreground">Monday - Saturday</span>
                  <div className="text-right">
                    <div className="text-primary font-semibold">9:30 AM - 1:00 PM</div>
                    <div className="text-secondary font-semibold">5:00 PM - 8:00 PM</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-foreground">Sunday</span>
                  <span className="text-destructive font-semibold">Closed</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                <p className="text-sm text-primary font-medium mb-2">Emergency Services Available</p>
                <p className="text-sm text-muted-foreground">
                  For dental emergencies outside regular hours, please call our emergency line.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="card-luxury">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-secondary mr-3" />
                Clinic Location
              </h3>
              
              <div className="space-y-3">
                <p className="text-foreground font-medium">
                  Bus stand, opposite to Municipality Office
                </p>
                <p className="text-foreground">
                  Shenkottai, Tamil Nadu 627809
                </p>
                <p className="text-muted-foreground text-sm">
                  Google Plus Code: X7G2+J5 Shenkottai, Tamil Nadu
                </p>
              </div>

              <a 
                href="https://maps.google.com/?q=X7G2+J5+Shenkottai,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-luxury mt-6 w-full flex items-center justify-center"
              >
                Get Directions
              </a>
            </div>

            <a 
              href="https://wa.me/+918778038383?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Suresh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury w-full flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment with Dr. Suresh
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;