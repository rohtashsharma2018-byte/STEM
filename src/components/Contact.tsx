import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-sky-50 text-sky-700 border border-sky-100 mb-4 shadow-sm shadow-sky-100/40">
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Find us at our campus or reach out via phone and email.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-brand-600">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Campus Address</h3>
              <p className="text-gray-600">Mansa Ram Park<br/>New Delhi, India</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-brand-600">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone & Email</h3>
              <p className="text-gray-600">+91 9654447775<br/>hello@stemacademy.edu</p>
            </div>
          </div>

          <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-100 shadow-sm">
            <iframe
              title="Mansa Ram Park Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Mansa%20Ram%20Park&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
