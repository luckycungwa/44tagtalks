import React, { useState } from "react";
import { Card, CardHeader, CardBody, Input, Button, Checkbox, Link, Spacer } from "@nextui-org/react";
import { useAuth } from "../context/AuthContext"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth(); // Ensure register is destructured correctly
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      console.error("Please fill in all fields");
      return;
    }

    try {
      await register(username, email, password);
      navigate('/login');
    } catch (error) {
      console.error("Registration failed:", error);
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
                helperText="Must be at least 8 characters"
              />
              <Checkbox defaultSelected size="sm" className="text-primary text-xs">
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