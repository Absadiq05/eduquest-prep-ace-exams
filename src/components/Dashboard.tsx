
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, GraduationCap, Award, Calendar, AlertCircle } from 'lucide-react';

interface DashboardProps {
  onStartPractice: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartPractice }) => {
  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="container mx-auto">
        {/* Welcome Card */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Student!</h2>
                  <p className="text-gray-600 mb-4">Ready to continue your JAMB & Post-UTME preparation journey?</p>
                  <Button onClick={onStartPractice} className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Start Practicing
                  </Button>
                </div>
                <div className="hidden md:block">
                  <GraduationCap className="h-24 w-24 text-primary opacity-50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats & Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-sm font-medium">Questions Attempted</CardTitle>
                <CardDescription>Your progress</CardDescription>
              </div>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42/500</div>
              <div className="w-full h-2 bg-secondary rounded-full mt-3">
                <div className="h-2 bg-primary rounded-full" style={{ width: '8%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">8% complete</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-sm font-medium">Current Score</CardTitle>
                <CardDescription>Your performance</CardDescription>
              </div>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <div className="w-full h-2 bg-secondary rounded-full mt-3">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <p className="text-xs text-green-600 mt-2">Good progress! Keep it up!</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-sm font-medium">Days to JAMB</CardTitle>
                <CardDescription>Countdown</CardDescription>
              </div>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45 days</div>
              <div className="text-xs text-muted-foreground mt-2">Exam Date: June 30, 2025</div>
              <Button variant="link" className="text-primary p-0 h-auto mt-1 text-xs">
                View JAMB schedule
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Recommended actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Recommended Study Topics
              </CardTitle>
              <CardDescription>Based on your performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { topic: "Nigerian History (Colonial Period)", score: "45%" },
                  { topic: "Chemical Bonding", score: "52%" },
                  { topic: "Algebraic Expressions", score: "63%" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer">
                    <span>{item.topic}</span>
                    <span className="text-sm text-red-500 font-medium">{item.score}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-4">View All Topics</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Stay updated</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { event: "JAMB Mock Exam", date: "May 15, 2025" },
                  { event: "Chemistry Live Session", date: "May 2, 2025" },
                  { event: "Registration Deadline", date: "April 30, 2025" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-2 border rounded hover:bg-muted/50 cursor-pointer">
                    <span>{item.event}</span>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-4">View Calendar</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
