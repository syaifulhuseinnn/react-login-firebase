import React, { useRef, useState, useEffect } from "react";
import {
  updateProfile,
  getAuth,
  User,
  UserInfo,
  onAuthStateChanged,
} from "firebase/auth";
import {
  Container,
  FormControl,
  Button,
  Heading,
  Input,
  FormLabel,
  Stack,
  Box,
} from "@chakra-ui/react";
import auth from "../utils/firebaseConfig";

function Profile() {
  const [isSetProfileSuccess, setIsSetProfileSuccess] =
    useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);
  const [displayName, setDisplayName] = useState(user.displayName);

  const setUpdateProfile = async (displayName: any) => {
    try {
      await updateProfile(user, {
        displayName: displayName,
      });
      setIsSetProfileSuccess(true);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode: errorCode, errorMessage: errorMessage });
    }
  };

  const handleUpdateProfileSubmit = (event: any) => {
    event.preventDefault();

    setUpdateProfile(displayName);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.error("User signed out!");
      }
    });
  }, []);

  return (
    <Container>
      <form onSubmit={handleUpdateProfileSubmit}>
        <Stack direction="column" spacing={5}>
          <Box>
            <Heading>Profile</Heading>
            <small>Complete your profile info!</small>
          </Box>
          <FormControl>
            <FormLabel>Display Name</FormLabel>
            <Input
              type="text"
              name="display-name"
              id="display-name"
              defaultValue={user.displayName!}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Save
          </Button>
          {isSetProfileSuccess && <span>Update profile success!</span>}
        </Stack>
      </form>
    </Container>
  );
}

export default Profile;
