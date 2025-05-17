
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthFormsProps {
  onSuccessfulAuth: () => void;
}

const AuthForms: React.FC<AuthFormsProps> = ({ onSuccessfulAuth }) => {
  // Form state
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nationalId: '',
    username: ''
  });
  
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  });

  // Handle sign up form submission
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up Form Data:', signUpForm);
    
    // For demo purposes, we'll just proceed to the next step
    onSuccessfulAuth();
  };

  // Handle sign in form submission
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign In Form Data:', signInForm);
    
    // For demo purposes, we'll just proceed to the next step
    onSuccessfulAuth();
  };

  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="container mx-auto max-w-md">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>
                  Access your EDUQUEST account to continue your learning journey.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSignIn}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email or Phone"
                      value={signInForm.email}
                      onChange={(e) => setSignInForm({...signInForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      value={signInForm.password}
                      onChange={(e) => setSignInForm({...signInForm, password: e.target.value})}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full">Sign In</Button>
                  <Button variant="link" size="sm" className="w-full">
                    Forgot Password?
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>
                  Join EDUQUEST and start your exam preparation journey.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSignUp}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email or Phone"
                      value={signUpForm.email}
                      onChange={(e) => setSignUpForm({...signUpForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      value={signUpForm.password}
                      onChange={(e) => setSignUpForm({...signUpForm, password: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      value={signUpForm.confirmPassword}
                      onChange={(e) => setSignUpForm({...signUpForm, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="National ID (Optional)"
                      value={signUpForm.nationalId}
                      onChange={(e) => setSignUpForm({...signUpForm, nationalId: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Username"
                      value={signUpForm.username}
                      onChange={(e) => setSignUpForm({...signUpForm, username: e.target.value})}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">Create Account</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AuthForms;
