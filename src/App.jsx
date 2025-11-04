import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';


const App = () => {
  return (
    <>
      <Router>
        <SideBar/>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </Router>
    </>
  )
}

export default App