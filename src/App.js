import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import RoleLogged from './components/RoleLogged';
import OrgCreate from './pages/OrgCreate';
import OrgView from './pages/OrgView';

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<RoleLogged/>}>
          <Route path='' element={<Dashboard/>}/>
          <Route path='organization'>
            <Route path='create' element={<OrgCreate/>}/>
            <Route path='view/:id' element={<OrgView/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
