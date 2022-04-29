import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from "./pages/sharedPages/NavigationBar/NavigationBar"
import NotFound from './pages/sharedPages/NotFound/NotFound';
import Home from './pages/HomePage/Home/Home';
import UploadItems from './pages/UploadItems/UploadItems';
import Login from './pages/Login-Register-RequireAuth/Login/Login';
import Register from './pages/Login-Register-RequireAuth/Register/Register';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/itemsUp" element={<UploadItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    
      <ToastContainer />
    </div>
  );
}

export default App;
