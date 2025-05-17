
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfileSetupProps {
  onProfileComplete: () => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onProfileComplete }) => {
  const [profileData, setProfileData] = useState({
    profilePhoto: '',
    firstName: '',
    lastName: '',
    otherName: '',
    dob: '',
    stateOrigin: '',
    lgaOrigin: '',
    stateResident: '',
    lgaResident: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfileData({
      ...profileData,
      [id]: value
    });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile Data:', profileData);
    onProfileComplete();
  };

  return (
    <section className="py-8 px-4 animate-fade-in">
      <div className="container mx-auto max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Update Your Profile</CardTitle>
            <CardDescription>
              Tell us more about yourself so we can personalize your learning experience.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSaveProfile}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profilePhoto">Profile Photo</Label>
                <Input
                  id="profilePhoto"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="otherName">Other Name (Optional)</Label>
                <Input
                  id="otherName"
                  value={profileData.otherName}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={profileData.dob}
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stateOrigin">State of Origin</Label>
                  <Input
                    id="stateOrigin"
                    value={profileData.stateOrigin}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lgaOrigin">LGA of Origin</Label>
                  <Input
                    id="lgaOrigin"
                    value={profileData.lgaOrigin}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stateResident">State of Residence</Label>
                  <Input
                    id="stateResident"
                    value={profileData.stateResident}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lgaResident">LGA of Residence</Label>
                  <Input
                    id="lgaResident"
                    value={profileData.lgaResident}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Save Profile</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ProfileSetup;
