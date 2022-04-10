import React from "react";
import { HStack, Text, Input, FormControl, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import auth from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";

function Navbar() {
  const navigation = useNavigate();

  const handleSignOutButton = async () => {
    try {
      await signOut(auth);
      navigation("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HStack justifyContent="end" spacing={7} p={5} mb={5} bg="teal">
      {/* <FormControl>
        <Input type="text" placeholder="Search a quote" variant="filled" />
      </FormControl> */}
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
      <Button
        colorScheme="red"
        rightIcon={<FaSignOutAlt />}
        onClick={handleSignOutButton}
      >
        Sign Out
      </Button>
    </HStack>
  );
}

export default Navbar;
