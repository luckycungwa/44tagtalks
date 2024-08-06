import React, { useState, useEffect } from 'react';
import { Card, CardBody, Input, Button, Avatar } from "@nextui-org/react";
import { useAuth } from "../context/AuthContext";
import axios from 'axios';

const Profile = () => {
  const { user, setUser } = useAuth();
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [avatarUrl, setAvatarUrl] = useState(user?.image || '');
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setAvatarUrl(user.image);
    }
  }, [user]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    if (file) {
      formData.append('avatar', file);
    }

    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardBody>
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center mb-4">
              <Avatar
                src={avatarUrl}
                alt="Profile"
                className="w-24 h-24"
              />
            </div>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
            />
            <Input
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-4"
            />
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Button type="submit" color="primary" className="w-full">
              Update Profile
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;