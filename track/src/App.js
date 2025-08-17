import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Components/Homepage';
import DailyFinance from './Components/DailyFinance';
import Fd from './Components/Fd';
import RD from './Components/RD';
import MutualFunds from './Components/MutualFunds';
import Nav from './Components/Nav';
import SGB from './Components/SGB';
import MedicalPolicy from './Components/Medicalpolicy';
// import Dashboard from './Components/Dashboard';
// import Dashboard from './Components/DailyExpenseDashboard'; 
// import DailyExpenseDashboard from "./Components/DailyExpenseDashboard";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dailyfinance" element={<DailyFinance />} />
        <Route path="/fd" element={<Fd />} />
        <Route path="/rd" element={<RD />} />
        <Route path="/mutualfunds" element={<MutualFunds />} />
        <Route path="/sgb" element={<SGB />} />
        <Route path="/medicalpolicy" element={<MedicalPolicy />} />
         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          
     
      </Routes>
    </Router>
  );
}

export default App;
