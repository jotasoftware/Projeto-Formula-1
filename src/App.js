import logo from './logo.svg';
import './App.css';
import DriverProvider from './context/DriverContext';
import Pilots from './components/pilots/Pilots';

function App() {
  return (
    <DriverProvider>
      <Pilots></Pilots>
    </DriverProvider>
  );
}

export default App;
