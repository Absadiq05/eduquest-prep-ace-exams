
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  // Only show header navigation when user is logged in
  const isLoggedIn = currentSection !== 'welcome' && 
                     currentSection !== 'auth';
  
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight cursor-pointer" 
            onClick={() => setCurrentSection('welcome')}>
          EDUQUEST
        </h1>
        
        {isLoggedIn && (
          <nav className="mt-4 md:mt-0">
            <ul className="flex gap-4 md:gap-6 flex-wrap justify-center">
              <li>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-primary/30"
                  onClick={() => setCurrentSection('dashboard')}
                >
                  Dashboard
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-primary/30"
                  onClick={() => setCurrentSection('rewards')}
                >
                  Coin Rewards
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-primary/30"
                  onClick={() => setCurrentSection('support')}
                >
                  Support
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-primary/30"
                  onClick={() => setCurrentSection('welcome')}
                >
                  Sign Out
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
