import React from "react";
import { HStack, Text, Input, FormControl } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <HStack justifyContent="end" spacing={7} p={5} mb={5} bg="teal">
      <FormControl>
        <Input type="text" placeholder="Search a quote" variant="filled" />
      </FormControl>
      <Link to="/home">
        <Text fontSize="xl" cursor="pointer" color="white" fontWeight="bold">
          Home
        </Text>
      </Link>
      <Link to="/profile">
        <Text fontSize="xl" cursor="pointer" color="white" fontWeight="bold">
          Profile
        </Text>
      </Link>
    </HStack>
  );
}

export default Navbar;
