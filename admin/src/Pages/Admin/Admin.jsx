import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Admin.css";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../Components/AddpProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/listproduct" element={<ListProduct />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
