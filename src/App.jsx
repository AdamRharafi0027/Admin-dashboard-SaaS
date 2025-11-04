import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';


const App = () => {
  return (
    <>
      <Router>
        <SideBar/>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </>
  )
}

export default App