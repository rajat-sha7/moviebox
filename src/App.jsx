import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import DetailCard from './pages/detailCard';

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
