import { useState, useEffect } from "react";
import auth from "../utils/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const navigation = useNavigate();

  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigation("/", { replace: true });
      }
    });
  }, []);

  return { user };
}
