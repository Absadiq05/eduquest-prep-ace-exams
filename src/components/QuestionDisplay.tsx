
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Question {
  id: number;
  text: string;
  options: { label: string; value: string }[];
  answer: string;
}

interface QuestionDisplayProps {
  onQuestionAnswered: () => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ onQuestionAnswered }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  
  // Sample question data - in a real app this would come from an API
  const sampleQuestion: Question = {
    id: 1,
    text: "What is the capital of Nigeria?",
    options: [
      { label: "Abuja", value: "a" },
      { label: "Lagos", value: "b" },
      { label: "Kano", value: "c" },
      { label: "Ibadan", value: "d" }
    ],
    answer: "a"
  };

  const handleOptionSelect = (value: string) => {
    if (!hasSubmitted) {
      setSelectedOption(value);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setHasSubmitted(true);
      setShowFeedback(true);
      // In a real app, you would send this data to the backend
      console.log('Submitted answer:', selectedOption);
    }
  };

  const handleNext = () => {
    onQuestionAnswered();
  };

  const isCorrect = selectedOption === sampleQuestion.answer;

  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="container mx-auto max-w-2xl">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                {sampleQuestion.id}
              </span>
              Question
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-lg">{sampleQuestion.text}</div>
            
            <RadioGroup 
              value={selectedOption || ''} 
              className="space-y-3"
              onValueChange={handleOptionSelect}
            >
              {sampleQuestion.options.map((option) => (
                <div 
                  key={option.value} 
                  className={`flex items-center space-x-2 border rounded-lg p-4 cursor-pointer ${
                    hasSubmitted && option.value === sampleQuestion.answer 
                      ? 'bg-green-50 border-green-300' 
                      : hasSubmitted && option.value === selectedOption && option.value !== sampleQuestion.answer
                      ? 'bg-red-50 border-red-300'
                      : 'hover:bg-secondary/50'
                  }`}
                >
                  <RadioGroupItem 
                    value={option.value} 
                    id={`option-${option.value}`} 
                    disabled={hasSubmitted}
                  />
                  <Label 
                    htmlFor={`option-${option.value}`} 
                    className="w-full cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            {showFeedback && (
              <div className={`p-4 rounded-md ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                <p className="font-medium">
                  {isCorrect ? 'Correct!' : 'Incorrect!'}
                </p>
                <p>
                  {isCorrect 
                    ? 'Well done! You got it right.' 
                    : `The correct answer is: ${sampleQuestion.options.find(o => o.value === sampleQuestion.answer)?.label}.`
                  }
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {!hasSubmitted ? (
              <Button 
                onClick={handleSubmit} 
                className="w-full" 
                disabled={!selectedOption}
              >
                Submit Answer
              </Button>
            ) : (
              <Button 
                onClick={handleNext} 
                className="w-full"
              >
                Next Question
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default QuestionDisplay;
