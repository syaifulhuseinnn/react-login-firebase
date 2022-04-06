import React from "react";
import { Container, Spinner, Flex } from "@chakra-ui/react";
import { useAuth } from "../utils/useAuth";
import ListOfQuotes from "./ListOfQuotes";
import { useListOfQuotes } from "../utils/useListOfQuotes";
import Navbar from "./Navbar";

function Home() {
  const { isLoading, user } = useAuth();
  const { status, quotes, error } = useListOfQuotes();

  if (status === "success" && Object.keys(quotes).length !== 0) {
    return (
      <Container maxW="100%" p={0}>
        <Navbar />
        <ListOfQuotes quotes={quotes} />
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
