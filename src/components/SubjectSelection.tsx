
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SubjectSelectionProps {
  onSubjectSelected: () => void;
}

const SubjectSelection: React.FC<SubjectSelectionProps> = ({ onSubjectSelected }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  
  const subjects = [
    "Mathematics",
    "English Language",
    "Science",
    "Social Studies",
    "Biology",
    "Chemistry",
    "Physics",
    "Government",
    "Economics",
    "Literature"
  ];

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
  };

  const handleContinue = () => {
    if (selectedSubject) {
      console.log('Selected Subject:', selectedSubject);
      onSubjectSelected();
    }
  };

  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to EDUQUESTbot!</CardTitle>
            <CardDescription className="text-lg">
              Select your preferred subject to start practicing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {subjects.map((subject) => (
                <Button
                  key={subject}
                  variant={selectedSubject === subject ? "default" : "outline"}
                  className={`h-16 ${
                    selectedSubject === subject 
                      ? "bg-primary text-white" 
                      : "hover:bg-secondary hover:text-primary"
                  }`}
                  onClick={() => handleSubjectClick(subject)}
                >
                  {subject}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleContinue} 
              className="w-full" 
              disabled={!selectedSubject}
            >
              Continue to Questions
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default SubjectSelection;
