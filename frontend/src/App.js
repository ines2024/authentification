
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar1 from './Component/Navbar';
import Login from './Component/Login';
import Register from './Component/Register';
import Profile from './Component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alerterror from './Component/Alerterror';
function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Alerterror/>
<Routes>
<Route path='/Login' element={<Login/>}/>
<Route path='/Profile' element={<Profile/>}/>
<Route path='/Register' element={<Register/>}/>
</Routes>
    </div>
  );
}

export default App;
