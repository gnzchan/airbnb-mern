import { useContext } from "react";
import { UserContext } from "../user-context";

export const AccountPage = () => {
  const userContext = useContext(UserContext);

  if (!userContext.user && userContext.isReady) {
    return <Navigate to="/login" />;
  }

  return <div>Account Page</div>;
};
