
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Award, LightbulbIcon, Bot } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  // Inspirational quotes for students
  const quotes = [
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The beautiful thing about learning is that no one can take it away from you."
  ];
  
  // Randomly select a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <section className="py-8 px-4 md:py-16 animate-fade-in bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left content */}
            <div className="p-6 md:p-10 lg:w-2/3">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Welcome to EDUQUEST!
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 italic border-l-4 border-primary pl-4">
                "{randomQuote}"
              </p>
              
              <div className="bg-secondary/50 p-6 rounded-lg shadow-sm mb-8 border border-primary/10">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Why Join EDUQUEST?</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Specialized JAMB & Post-UTME preparation materials.",
                    "Interactive practice tests with real-time feedback.",
                    "Get personalized learning paths based on your performance.",
                    "Access to EDUQUESTbot AI assistant for 24/7 help.",
                    "Find nearby exam centers and registration information."
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

              <div className="bg-accent/50 p-6 rounded-lg mb-8 border border-primary/10">
                <div className="flex items-center mb-3">
                  <Bot className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Meet EDUQUESTbot</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Your personal AI study companion that adapts to your learning style.
                  EDUQUESTbot provides instant answers, monitors your progress, and suggests 
                  personalized study plans to help you excel in your exams.
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <Button 
                  onClick={onGetStarted} 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg"
                >
                  <LightbulbIcon className="h-5 w-5 mr-2" />
                  Start Learning Now
                </Button>
              </div>
            </div>
            
            {/* Right image */}
            <div className="lg:w-1/3 bg-white">
              <div className="h-full flex items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-white">
                <img 
                  src="/african-students-learning.jpg" 
                  alt="African students learning with technology" 
                  className="rounded-lg shadow-md max-h-[500px] object-cover" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats or callout section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">5,000+ Questions</h3>
            <p className="text-gray-600">Access our extensive question bank</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">90% Success Rate</h3>
            <p className="text-gray-600">Join thousands of successful students</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Bot className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 AI Support</h3>
            <p className="text-gray-600">Get help anytime with EDUQUESTbot</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
