import React from 'react';
import { Mail, Send } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <Mail size={16} />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Let's talk about your project</h3>
              <p className="text-gray-600 mb-6">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              <a 
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                Send me an email <Send size={16} />
              </a>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}