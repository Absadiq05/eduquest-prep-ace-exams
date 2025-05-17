
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, User, Send, BookOpen, HelpCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm EDUQUESTbot, your personal AI study assistant. How can I help with your JAMB or Post-UTME preparation today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage('');
    
    // Simulate bot response (in a real app, this would call an AI API)
    setTimeout(() => {
      const botResponses = [
        "That's a great question about JAMB Physics! The formula for calculating electrical resistance is R = V/I, where R is resistance, V is voltage, and I is current.",
        "For your Post-UTME preparation, I recommend focusing on past questions for at least 1 hour daily. Would you like me to provide some practice questions?",
        "The key topics for JAMB Chemistry this year include Stoichiometry, Periodic Table, Chemical Bonding, and Organic Chemistry. Which one would you like to study first?",
        "Based on your recent practice test results, I notice you're having difficulty with Algebraic Expressions. Let's work through some examples together."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Quick prompts that students might find useful
  const quickPrompts = [
    "Help me with JAMB Physics",
    "How do I prepare for Post-UTME?",
    "Explain chemical bonding",
    "Practice math questions"
  ];

  return (
    <section className="py-8 px-4 pb-20 animate-fade-in">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg">
          <CardHeader className="border-b bg-primary text-white">
            <div className="flex items-center">
              <Bot className="h-6 w-6 mr-2" />
              <CardTitle>EDUQUESTbot</CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            {/* Chat messages */}
            <div className="h-[500px] overflow-y-auto p-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="bg-primary text-white p-2 rounded-full mr-2 flex-shrink-0">
                      <Bot className="h-5 w-5" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white rounded-br-none' 
                        : 'bg-secondary text-foreground rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                  </div>
                  
                  {msg.sender === 'user' && (
                    <div className="bg-primary text-white p-2 rounded-full ml-2 flex-shrink-0">
                      <User className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Quick prompts */}
            <div className="p-3 bg-muted/30 border-t overflow-x-auto">
              <div className="flex gap-2">
                {quickPrompts.map((prompt, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    className="whitespace-nowrap"
                    onClick={() => {
                      setInputMessage(prompt);
                    }}
                  >
                    {idx === 0 ? <BookOpen className="h-3 w-3 mr-1" /> : 
                     idx === 1 ? <HelpCircle className="h-3 w-3 mr-1" /> : null}
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="p-3 border-t">
            <div className="flex w-full gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask EDUQUESTbot anything about your studies..."
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ChatBot;
