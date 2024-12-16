import React from 'react';
import { Code, Palette, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate developer and designer with over 5 years of experience creating 
              digital solutions that combine beautiful design with efficient functionality.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Code className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Development</h3>
                  <p className="text-gray-600">Clean, modern development that follows best practices</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-100 rounded-lg">
                  <Palette className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Design</h3>
                  <p className="text-gray-600">Beautiful, intuitive designs that users love</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Lightbulb className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Problem Solving</h3>
                  <p className="text-gray-600">Creative solutions to complex challenges</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
              alt="Developer working"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}