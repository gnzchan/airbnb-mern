import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { Layout } from "./layout";
import { IndexPage } from "./pages";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { AccountPage } from "./pages/account";

import "./App.css";
import { UserContextProvider } from "./user-context";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
