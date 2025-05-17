
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="py-12 px-4 md:py-16 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 bg-gradient-to-r from-purple-50 to-white">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
              Welcome to EDUQUEST!
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 italic text-center md:text-left">
              "Embark on your learning journey and ace your exams."
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Join EDUQUEST?</h3>
              <ul className="space-y-3">
                {[
                  "Practice with questions based on your level.",
                  "Get helpful tips and learning suggestions.",
                  "Prepare effectively for WAEC, NECO, and Post-UTME.",
                  "Find your exam center locations."
                ].map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={onGetStarted} 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
