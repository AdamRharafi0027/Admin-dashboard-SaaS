import SideBar from './components/SideBar/SideBar';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <SideBar/>
        <Routes>
          <Route path='/' element={<DashboardLayout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App