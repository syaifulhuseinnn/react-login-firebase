import React from "react";
import { Container, Spinner, Flex, Heading } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";
import ListOfQuotes from "./ListOfQuotes";
import { useListOfQuotes } from "../hooks/useListOfQuotes";
import Navbar from "./Navbar";

function Home() {
  const { user } = useAuth();
  const { status, quotes, error } = useListOfQuotes(user);
  console.log(error);
  if (status === "success") {
    return (
      <Container maxW="100%" p={0}>
        <Navbar />
        <ListOfQuotes quotes={quotes} />
      </Container>
    );
  }

  if (status === "failed") {
    return (
      <Container maxW="100%" p={0}>
        <Navbar />
        <Heading>{error}</Heading>
      </Container>
    );
  }

  return (
    <Container maxW="100%" p={0}>
      <Navbar />
      <Flex minHeight="90vh" justifyContent="center" alignItems="center">
        <Spinner color="tomato" />
      </Flex>
    </Container>
  );
}

export default Home;
