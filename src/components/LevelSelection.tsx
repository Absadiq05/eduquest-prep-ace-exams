
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface LevelSelectionProps {
  onLevelSelected: () => void;
}

const LevelSelection: React.FC<LevelSelectionProps> = ({ onLevelSelected }) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleConfirmLevel = () => {
    if (selectedLevel) {
      console.log('Selected Level:', selectedLevel);
      onLevelSelected();
    }
  };

  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="container mx-auto max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Select Your Education Level</CardTitle>
            <CardDescription>
              This helps us provide questions appropriate for your level.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              onValueChange={setSelectedLevel} 
              value={selectedLevel || ''}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-secondary/50 cursor-pointer">
                <RadioGroupItem 
                  value="junior" 
                  id="junior"
                  className="text-primary"
                />
                <Label htmlFor="junior" className="w-full cursor-pointer font-medium">Junior Secondary School</Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-secondary/50 cursor-pointer">
                <RadioGroupItem 
                  value="senior" 
                  id="senior"
                  className="text-primary"
                />
                <Label htmlFor="senior" className="w-full cursor-pointer font-medium">Senior Secondary School</Label>
              </div>
            </RadioGroup>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleConfirmLevel} 
              className="w-full" 
              disabled={!selectedLevel}
            >
              Confirm Level
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default LevelSelection;
