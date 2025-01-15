import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from './hooks/useGetAppliedJobs';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const { user } = useSelector(state => state.auth);

    // Custom hook to get applied jobs
    useGetAppliedJobs();

    // Check if user profile is available
    const profile = user?.profile || {};
    const profilePhoto = profile?.profilePhoto || "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg";
    const resumeLink = profile?.resume;
    const resumeOriginalName = profile?.resumeOriginalName;
    const skills = profile?.skills || [];

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl my-10 p-8 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-28 w-28 border-4 border-indigo-500 rounded-full">
                            <AvatarImage src={profilePhoto} alt="Profile Photo" />
                        </Avatar>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800">{user?.fullname || 'User Name'}</h1>
                            <p className="text-gray-500 text-sm mt-1">{profile?.bio || 'No bio available'}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} variant="outline" className="hover:bg-indigo-100 text-indigo-500 border-indigo-500">
                        <Pen /> Edit
                    </Button>
                </div>

                <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4">
                        <Mail className="text-indigo-500" />
                        <span className="text-gray-700">{user?.email || 'No email provided'}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Contact className="text-indigo-500" />
                        <span className="text-gray-700">{user?.phoneNumber || 'No phone number provided'}</span>
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.length > 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span className="text-gray-500">NA</span>}
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    <Label className="text-md font-semibold text-gray-800">Resume</Label>
                    {resumeLink ? (
                        <a target="_blank" href={resumeLink} className="text-indigo-500 hover:underline">
                            {resumeOriginalName || 'Resume not named'}
                        </a>
                    ) : (
                        <span className="text-gray-500">NA</span>
                    )}
                </div>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 text-center">Applied Jobs</h2>
                <AppliedJobTable />
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;
