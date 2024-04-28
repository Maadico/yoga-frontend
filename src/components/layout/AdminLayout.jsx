import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import AdminNav from "./AdminNav";
import Footer from "./Footer";
const AdminLayout = ({ children }) => {
  return (
    <div>
      <main style={{ minHeight: "90vh" }}>
        <Header />
        <AdminNav />
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default AdminLayout;
