"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Button from "@/components/Button";

const UserProfilePage = () => {
    const { user, updateProfile, loading } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        website: "",
        location: "",
        bio: "",
    });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                company: user.profile?.company || "",
                website: user.profile?.website || "",
                location: user.profile?.location || "",
                bio: user.profile?.bio || "",
            });
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        
        try {
            await updateProfile({
                name: formData.name,
                profile: {
                    company: formData.company,
                    website: formData.website,
                    location: formData.location,
                    bio: formData.bio,
                },
            });
        } catch (error) {
            console.error("Failed to update profile:", error);
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (loading) {
        return (
            <Layout title="Profile">
                <div className="center">
                    <div className="text-gray-600">Loading profile...</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Profile">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Card title="Personal Information">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Field
                                type="text"
                                name="name"
                                label="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            
                            <Field
                                type="email"
                                name="email"
                                label="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled
                            />
                            
                            <Field
                                type="text"
                                name="company"
                                label="Company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            
                            <Field
                                type="url"
                                name="website"
                                label="Website"
                                value={formData.website}
                                onChange={handleChange}
                            />
                            
                            <Field
                                type="text"
                                name="location"
                                label="Location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bio
                                </label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>
                            
                            <Button 
                                type="submit" 
                                disabled={saving}
                            >
                                {saving ? "Saving..." : "Save Changes"}
                            </Button>
                        </form>
                    </Card>
                </div>
                
                <div className="col-right">
                    <Card title="Account Information">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Plan
                                </label>
                                <div className="text-lg font-semibold text-blue-600">
                                    {user?.plan}
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status
                                </label>
                                <div className="text-lg font-semibold text-green-600">
                                    {user?.status}
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Member Since
                                </label>
                                <div className="text-lg">
                                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default UserProfilePage; 