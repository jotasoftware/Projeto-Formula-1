import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import DriverProvider from './context/DriverContext';
import SeasonProvider from "./context/SeasonContext";
import Menu from "./components/menu/Menu";
import Driver from './components/driver/Driver';
import Table from "./components/table/Table";
import TeamProvider from "./context/TeamContext";

function App() {
  return (
    <BrowserRouter>
    <div className="screen">
      <SeasonProvider>
        <Menu />
        <main className="info">
          <Routes>
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
          </Routes>
        </main>
      </SeasonProvider>
    </div>
    </BrowserRouter>
    //menu - corridas, Driveros, equipes
    //criar component de tabela react-data-table-component ou meu proprio
    //corridas 


  );
}

export default App;
