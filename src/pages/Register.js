import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Checkbox,
  Link,
  Spacer,
} from "@nextui-org/react";
import { useAuth } from "../context/AuthContext"; // Ensure this path is correct

import { FiEyeOff, FiMail, FiUser } from "react-icons/fi";
import { PiPassword } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, error } = useAuth(); // Ensure register is destructured correctly
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username || !email || !password) {
      console.error("Please fill in all fields");
      return;
    }
   
    await register(username, email, password); // Call the register function
    if (!error) {
      console.log("Registration successful:", { username, email, password });
      navigate('/login');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Card className="flex flex-row max-w-4xl w-full">
        <div className="flex-1 py-8">
          <CardHeader className="flex flex-col items-center pb-0 pt-6">
            <h1 className="text-2xl font-bold">Register</h1>
            <p className="text-small text-default-500">Create your account</p>
          </CardHeader>
          <CardBody className="overflow-visible">
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
              <Input
                type="text"
                label="Name"
                labelPlacement="outside"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                size="sm"
                startContent={
                  <FiUser className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                }
                helperText="First and last name"
              />
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                labelPlacement="outside"
                size="sm"
                startContent={
                  <FiMail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                }
                helperText="We'll never share your email"
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                labelPlacement="outside"
                size="sm"
                clearable
                endContent={
                  <FiEyeOff className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                }
                startContent={
                  <PiPassword className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                }
                helperText="Must be at least 8 characters"
              />
              <Checkbox
                defaultSelected
                size="sm"
                className="text-primary text-xs"
              >
                I agree to the{" "}
                <Link href="#" className="text-primary text-xs">
                  Terms and Conditions
                </Link>
              </Checkbox>
              <Button size="sm" color="primary" type="submit" fullWidth>
                Register
              </Button>
            </form>
            <Spacer y={2} />
            <p className="text-center text-small">
              Already have an account?{" "}
              <Link href="/login" size="sm">
                Log in
              </Link>
            </p>
          </CardBody>
        </div>
        <div className="flex-1 relative hidden lg:block">
          <img
            alt="Register background"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh5.googleusercontent.com/OSCUnDefJnssYovrpDq1yC1ww-RxDGJQyF24S2z4jQS1mGXmogjcmCKjKfewzAL6QhIfeSgwtHgIsvdDQ96IT5YHnK4-UVddpfu42uZg7pN2SXJlnPqKZPKxGfHXfworox6ji3Cu=s0"
          />
        </div>
      </Card>
    </div>
  );
};

export default Register;