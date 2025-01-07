import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Products/Products/Products';
import { Route, Routes } from 'react-router';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/admin/*' element={<AdminRoutes></AdminRoutes>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
