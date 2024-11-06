import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Practicas from "./Practicas";
import About from "./About";

const Inicio: React.FC = () => (
  <div className="bg-gray-200 p-6 rounded-lg shadow">
    <h1 className="text-2xl font-bold mb-4">Bienvenido al Dashboard</h1>
    <p>Aquí encontrarás un resumen de actividades.</p>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="practicas" element={<Practicas />} />
          <Route path="acerca-de-mi" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
