import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import PublisherDashboard from "./pages/Publisher/Dashboard";
import Products from "./pages/Publisher/Products";
import Promos from "./pages/Publisher/Promos";
import Orders from "./pages/Publisher/Orders";
import Profile from "./pages/Publisher/Profile";
import Withdraw from "./pages/Publisher/Withdraw";
import Balance from "./pages/Publisher/Balance";
import Deposit from "./components/Forms/Deposit";
import Faq from "./pages/Publisher/Faq";
import AddWebsiteForm from "./components/Forms/AddWebsiteForm";
import Home from "./pages/Home";

// Import Advertiser components
import AdvertiserDashboard from "./pages/Advertiser/Dashboard";
import Projects from "./pages/Advertiser/Projects";
import Catalogue from "./pages/Advertiser/Catalogue";
import AdvertiserOrders from "./pages/Advertiser/Orders";
import Favorite from "./pages/Advertiser/Favorite";
import Cart from "./pages/Advertiser/Cart";
import AdvertiserDeposit from "./pages/Advertiser/Deposit";
import AdvertiserBalance from "./pages/Advertiser/Balance";
import AdvertiserFaq from "./pages/Advertiser/Faq";
import CreateProject from "./components/Forms/CreateProject";

const App = () => {
  const [mode, setMode] = useState("Publisher");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMode = () => setMode((prev) => (prev === "Publisher" ? "Advertiser" : "Publisher"));

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <Route element={<DashboardLayout mode={mode} toggleMode={toggleMode} />}>
          {/* Balance related routes */}
          <Route path="/balance" element={<Balance />} />
          <Route path="/balance/deposit" element={<Deposit />} />
          <Route path="/balance/withdraw" element={<Withdraw />} />

          {/* Publisher routes */}
          {mode === "Publisher" ? (
            <>
              <Route path="/publisher/dashboard" element={<PublisherDashboard />} />
              <Route path="/publisher/products" element={<Products toggleMode={toggleMode} />} />
              <Route path="/publisher/products/add" element={<AddWebsiteForm />} />
              <Route path="/publisher/promos" element={<Promos />} />
              <Route path="/publisher/orders" element={<Orders />} />
              <Route path="/publisher/profile" element={<Profile />} />
              <Route path="/publisher/faq" element={<Faq />} />
            </>
          ) : (
            <>
              <Route path="/advertiser/dashboard" element={<AdvertiserDashboard />} />
              <Route path="/advertiser/projects" element={<Projects />} />
              <Route path="/advertiser/projects/create" element={<CreateProject />} />
              <Route path="/advertiser/catalogue" element={<Catalogue />} />
              <Route path="/advertiser/orders" element={<AdvertiserOrders />} />
              <Route path="/advertiser/favorite" element={<Favorite />} />
              <Route path="/advertiser/profile" element={<Profile />} />
              <Route path="/advertiser/cart" element={<Cart />} />
              <Route path="/advertiser/deposit" element={<AdvertiserDeposit />} />
              <Route path="/advertiser/balance" element={<AdvertiserBalance />} />
              <Route path="/advertiser/faq" element={<AdvertiserFaq />} />
            </>
          )}

          {/* Default redirects */}
          <Route
            path="/"
            element={<Navigate to={mode === "Publisher" ? "/publisher/dashboard" : "/advertiser/dashboard"} />}
          />
          <Route
            path="*"
            element={<Navigate to={mode === "Publisher" ? "/publisher/dashboard" : "/advertiser/dashboard"} />}
          />
        </Route>
      )}
    </Routes>
  );
};

export default App;