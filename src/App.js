import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./Hooks/RequireAuth";
import Content from "./components/Content";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import DetailJob from "./components/DetailJob";
import Dashboard from "./components/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";
import DataJob from "./components/DataJob";
import AddJob from "./components/AddJob";
import Profile from "./components/Profile";
import ChangePassword from "./components/ChangePassword";
import EditForm from "./components/EditForm";
import Pembayaran from "./components/Pembayaran";
import PrintTicket from "./components/PrintTicket";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <GlobalProvider>
            <Routes>
              <Route path="/" index element={<Content />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/ticket/:id" element={<DetailJob />} />
              <Route path="/pembayaran/:id" element={<Pembayaran />} />
              <Route path="/print-ticket/:id" element={<PrintTicket />} />

              <Route exact path="/" element={<RequireAuth />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/list-ticket" element={<DataJob />} />
                <Route
                  path="/dashboard/list-ticket/create"
                  element={<AddJob />}
                />
                <Route path="/dashboard/profile" element={<Profile />} />
                <Route
                  path="/dashboard/change-password"
                  element={<ChangePassword />}
                />
                <Route
                  path="/dashboard/list-ticket/edit/:id"
                  element={<EditForm />}
                />
              </Route>
            </Routes>
          </GlobalProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default App;
