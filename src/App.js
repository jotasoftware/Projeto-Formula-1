import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';

import DriverProvider from './context/DriverContext';
import SeasonProvider from "./context/SeasonContext";
import TeamProvider from "./context/TeamContext";
import RaceProvider from "./context/RaceContext";

import Menu from "./components/menu/Menu";
import Driver from './components/driver/Driver';
import Table from "./components/table/Table";
import Races from "./components/races/Races";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter basename="/Projeto-Formula-1">
    <div className="screen">
      <SeasonProvider>
        <Menu />
        <main className="info">
          <Routes>
            <Route path="/Projeto-Formula-1" element={
              <Home></Home>
            } />
            <Route path="/pilots" element={
              <DriverProvider>  
                <Driver></Driver>
                <Table type={"drivers"}></Table>
              </DriverProvider>
            } />
            <Route path="/teams" element={
              <TeamProvider>
                <Table type={"teams"}></Table>
              </TeamProvider>
            } />
            <Route path="/races" element={
              <RaceProvider>
                <Races></Races>
              </RaceProvider>
            } />
          </Routes>
        </main>
      </SeasonProvider>
    </div>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
