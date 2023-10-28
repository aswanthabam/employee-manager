import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
