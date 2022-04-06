import React, { useRef, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../utils/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  VStack,
  FormControl,
  Input,
  FormLabel,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const displayNameRef = useRef<HTMLInputElement>(null);

  const signIn = async (email: any, password: any) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/home", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log("Pa$$w0rd!");
    signIn(email, password);
  };

  return (
    <Container>
      <form onSubmit={handleLoginSubmit}>
        <Flex
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          flexGrow={1}
        >
          <VStack boxShadow="base" p={5} borderRadius="md" flex={1} spacing={5}>
            <Heading>Login</Heading>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </FormControl>
            <Button isFullWidth={true} colorScheme="teal" type="submit">
              Login
            </Button>
          </VStack>
        </Flex>
      </form>
    </Container>
  );
}

export default Login;
