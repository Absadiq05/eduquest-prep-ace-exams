
import React from 'react';
import { Home, Award, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FooterProps {
  setCurrentSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentSection }) => {
  return (
    <footer className="bg-white border-t fixed bottom-0 left-0 right-0">
      <div className="container mx-auto">
        <nav className="flex justify-around items-center py-2">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentSection('dashboard')} 
            className="flex flex-col items-center gap-1"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => setCurrentSection('rewards')} 
            className="flex flex-col items-center gap-1"
          >
            <Award className="h-5 w-5" />
            <span className="text-xs">Rewards</span>
          </Button>
          
          <Button 
            variant="primary"
            onClick={() => setCurrentSection('questions')} 
            className="flex items-center justify-center bg-primary text-white rounded-full w-14 h-14 -mt-5 shadow-md hover:bg-primary/90"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
