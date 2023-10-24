import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isReady: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get("/profile");

      setUser(data);
      setIsReady(true);
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isReady }}>
      {children}
    </UserContext.Provider>
  );
};
