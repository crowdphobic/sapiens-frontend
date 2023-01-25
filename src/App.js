import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Preference from './components/Preference';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/preference" element={<Preference/>}/>
      </Routes>
    </div>
  );
}

export default App;
