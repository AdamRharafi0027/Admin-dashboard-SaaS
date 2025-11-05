import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Clients from './pages/Clients';


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
        </Routes>
      </Router>
    </>
  )
}

export default App