import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage.jsx';

import DetailCard from './pages/DetailCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>       
        <Route path="/:id" element={<DetailCard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
