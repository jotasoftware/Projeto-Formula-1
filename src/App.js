import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import DriverProvider from './context/DriverContext';
import Menu from "./components/menu/Menu";
import Driver from './components/driver/Driver';
import Table from "./components/table/Table";

function App() {
  return (
    <BrowserRouter>
    <div className="screen">
      <Menu />
      <main className="info">
        <Routes>
          <Route path="/pilots" element={
            <DriverProvider>  
              <Driver></Driver>
              <Table type={"drivers"}></Table>
            </DriverProvider>
          } />
          {/* <Route path="/teams" element={<TeamsPage />} /> */}
        </Routes>
      </main>
    </div>
    </BrowserRouter>
    //menu - corridas, Driveros, equipes
    //criar component de tabela react-data-table-component ou meu proprio
    //corridas 


  );
}

export default App;
