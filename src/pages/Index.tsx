
import React, { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuthForms from "@/components/AuthForms";
import ProfileSetup from "@/components/ProfileSetup";
import LevelSelection from "@/components/LevelSelection";
import SubjectSelection from "@/components/SubjectSelection";
import QuestionDisplay from "@/components/QuestionDisplay";
import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('welcome');
  
  // Progress through application sections
  const handleGetStarted = () => {
    setCurrentSection('auth');
  };
  
  const handleSuccessfulAuth = () => {
    setCurrentSection('profile');
  };
  
  const handleProfileComplete = () => {
    setCurrentSection('level');
  };
  
  const handleLevelSelected = () => {
    setCurrentSection('subject');
  };
  
  const handleSubjectSelected = () => {
    setCurrentSection('questions');
  };
  
  const handleQuestionAnswered = () => {
    setCurrentSection('dashboard');
  };
  
  const handleStartPractice = () => {
    setCurrentSection('questions');
  };
  
  // Determine if footer should be shown
  const showFooter = currentSection !== 'welcome' && 
                    currentSection !== 'auth' && 
                    currentSection !== 'profile' && 
                    currentSection !== 'level';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-16">
      <Header 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
      />
      
      <main className="flex-1">
        {currentSection === 'welcome' && (
          <Hero onGetStarted={handleGetStarted} />
        )}
        
        {currentSection === 'auth' && (
          <AuthForms onSuccessfulAuth={handleSuccessfulAuth} />
        )}
        
        {currentSection === 'profile' && (
          <ProfileSetup onProfileComplete={handleProfileComplete} />
        )}
        
        {currentSection === 'level' && (
          <LevelSelection onLevelSelected={handleLevelSelected} />
        )}
        
        {currentSection === 'subject' && (
          <SubjectSelection onSubjectSelected={handleSubjectSelected} />
        )}
        
        {currentSection === 'questions' && (
          <QuestionDisplay onQuestionAnswered={handleQuestionAnswered} />
        )}
        
        {currentSection === 'dashboard' && (
          <Dashboard onStartPractice={handleStartPractice} />
        )}
        
        {currentSection === 'chatbot' && (
          <ChatBot />
        )}
        
        {currentSection === 'rewards' && (
          <div className="container mx-auto py-16 px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Coin Rewards</h2>
            <p className="text-lg text-gray-600">
              Earn coins by completing quizzes and challenges!
            </p>
          </div>
        )}
        
        {currentSection === 'support' && (
          <div className="container mx-auto py-16 px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Support</h2>
            <p className="text-lg text-gray-600">
              Need help? Our support team is here for you!
            </p>
          </div>
        )}
      </main>
      
      {showFooter && (
        <Footer setCurrentSection={setCurrentSection} />
      )}
    </div>
  );
};

export default Index;
