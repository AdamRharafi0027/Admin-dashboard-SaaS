import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Clients from './pages/Clients';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';


const App = () => {
  return (
    <>
      <Router>
        <SideBar/>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/notifications' element={<Notifications />} />
           <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App