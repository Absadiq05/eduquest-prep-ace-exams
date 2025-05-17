
import React, { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuthForms from "@/components/AuthForms";
import ProfileSetup from "@/components/ProfileSetup";
import LevelSelection from "@/components/LevelSelection";
import SubjectSelection from "@/components/SubjectSelection";
import QuestionDisplay from "@/components/QuestionDisplay";
import Footer from "@/components/Footer";

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
    // For demo purposes, we'll just show another question
    // In a real app, this would load the next question or show results
    console.log('Answered question, would load next question here');
    setCurrentSection('dashboard');
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
          <div className="container mx-auto py-16 px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your learning journey is just beginning! 
              Click the AI Bot button below to start practicing.
            </p>
          </div>
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
