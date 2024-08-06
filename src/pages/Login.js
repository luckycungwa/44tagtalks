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
import { useAuth } from "../context/AuthContext";

import { FiEyeOff, FiMail, FiUser } from "react-icons/fi";
import { PiPassword } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, error} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      console.log("User submitted:", { email, password });
      navigate('/');
    }
    else {
      console.error("Login failed");
      console.error(error);
    }
  };

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Card className="flex flex-row max-w-4xl w-full">
      <div className="flex-1 relative hidden lg:block">
          <img
            alt="Register background"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/Hn-6CixRH1vyODR1kxHNA7S2SL6X_5YFuqbfs6xhqMhZKn07FVuAVAgwISKAuZjPBiZshFIr7AYPvqkV3ByB33PwTyfFlsT_Nac8FDvfxRe2yjZdVe0W5nEoinbkxXwz6tgmEFA_=s0"
          />
        </div>
        <div className="flex-1 py-8">
          <CardHeader className="flex flex-col items-center pb-0 pt-6">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-small text-default-500">Welcome ton untapped Point. Tap in!</p>
          </CardHeader>
          <CardBody className="overflow-visible">
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
              
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
                  // toggleVisibility using FieyeOff & fiEyeOn
                  <FiEyeOff
                    className="text-lg text-default-400 pointer-events-none flex-shrink-0"
                    onClick={toggleVisibility}
                  />

                }
                startContent={
                  <PiPassword className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                }
                helperText="Must be at least 8 characters"
              />
              
                
                <Link href="#" className="text-primary text-xs" onClick={() => {console.log("Attempting to reset password")}}>
                  Forgot password?
                </Link>
              
              <Button size="sm" color="primary" type="submit" fullWidth>
                Login
              </Button>
            </form>
            <Spacer y={2} />
            <p className="text-center text-small">
              I dont have an account?{" "}
              <Link href="/register" size="sm">
                Register
              </Link>
            </p>
          </CardBody>
        </div>
        
      </Card>
    </div>
  );
};

export default Login;
