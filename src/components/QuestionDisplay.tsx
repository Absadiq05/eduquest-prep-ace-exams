
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Book, HelpCircle, Check, X, AlertCircle } from 'lucide-react';

interface QuestionDisplayProps {
  onQuestionAnswered: () => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ onQuestionAnswered }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showAIHelp, setShowAIHelp] = useState(false);
  
  // Sample question data
  const question = {
    id: 1,
    text: "Which of the following is NOT a major feature of the Nigerian colonial economy up to 1945?",
    options: [
      { id: "A", text: "Predominance of import-export trade" },
      { id: "B", text: "Major economic activities in the hands of foreign companies" },
      { id: "C", text: "Development of manufacturing industries" },
      { id: "D", text: "Focus on production of raw materials" },
    ],
    correctAnswer: "C",
    explanation: "The Nigerian colonial economy up to 1945 was characterized by import-export trade, foreign company dominance, and raw material production. There was minimal development of manufacturing industries, as the colonial policy focused on making Nigeria a producer of raw materials and a consumer of imported manufactured goods.",
  };

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowExplanation(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowAIHelp(false);
    onQuestionAnswered();
  };

  const toggleAIHelp = () => {
    setShowAIHelp(!showAIHelp);
  };

  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg">
          <CardHeader className="border-b bg-muted/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Book className="h-6 w-6 text-primary mr-2" />
                <CardTitle>JAMB History & Government Question</CardTitle>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={toggleAIHelp}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Ask EDUQUESTbot
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">{question.text}</h3>
              
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div 
                    key={option.id}
                    className={`flex items-start p-3 border rounded-md cursor-pointer transition-colors ${
                      selectedAnswer === option.id 
                        ? 'bg-primary/10 border-primary' 
                        : 'hover:bg-muted/50'
                    } ${
                      showExplanation && option.id === question.correctAnswer 
                        ? 'bg-green-50 border-green-500' 
                        : ''
                    } ${
                      showExplanation && selectedAnswer === option.id && option.id !== question.correctAnswer 
                        ? 'bg-red-50 border-red-500' 
                        : ''
                    }`}
                    onClick={() => !showExplanation && handleAnswerSelect(option.id)}
                  >
                    <div className={`flex justify-center items-center w-8 h-8 rounded-full mr-3 border ${
                      selectedAnswer === option.id ? 'bg-primary text-white border-primary' : 'border-gray-300'
                    } ${
                      showExplanation && option.id === question.correctAnswer ? 'bg-green-500 text-white border-green-500' : ''
                    } ${
                      showExplanation && selectedAnswer === option.id && option.id !== question.correctAnswer ? 'bg-red-500 text-white border-red-500' : ''
                    }`}>
                      {showExplanation && option.id === question.correctAnswer ? (
                        <Check className="h-4 w-4" />
                      ) : showExplanation && selectedAnswer === option.id && option.id !== question.correctAnswer ? (
                        <X className="h-4 w-4" />
                      ) : (
                        option.id
                      )}
                    </div>
                    <span className="pt-1">{option.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {showExplanation && (
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4 animate-fade-in">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-1">Explanation</h4>
                    <p className="text-blue-800">{question.explanation}</p>
                  </div>
                </div>
              </div>
            )}
            
            {showAIHelp && (
              <div className="border rounded-md p-4 mb-4 bg-purple-50 border-primary animate-fade-in">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-3">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">EDUQUESTbot</h4>
                    <p className="text-gray-800">
                      This question is testing your knowledge of Nigeria's economic history during the colonial period. 
                      Remember that colonial economies were typically structured to benefit the colonizing power, 
                      with an emphasis on raw material production rather than industrialization or manufacturing.
                      Think about which option would be counter to the typical colonial economic model.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between border-t py-4">
            {!showExplanation ? (
              <Button 
                onClick={handleSubmit} 
                className="w-full" 
                disabled={!selectedAnswer}
              >
                Submit Answer
              </Button>
            ) : (
              <Button 
                onClick={handleNextQuestion} 
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
