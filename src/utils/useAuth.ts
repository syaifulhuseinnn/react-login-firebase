import { useState, useEffect } from "react";
import auth from "./firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading(false);
        setUser(user);
      } else {
        setIsLoading(false);
        throw Error("User signed out!");
      }
    });
  }, []);

  return { isLoading, user };
}
