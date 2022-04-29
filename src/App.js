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
import RequireAuth from './pages/Login-Register-RequireAuth/RequireAuth/RequireAuth'
import Footer from './pages/sharedPages/Footer/Footer';
import MyItems from './pages/MyItems/MyItems';
import UpdateInventory from './pages/UpdateInventory/UpdateInventory';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/itemsUp" element={
          <RequireAuth>
            <UploadItems />
          </RequireAuth>
        } />

        <Route path="/inventory/:id" element={
          <RequireAuth>
            <UpdateInventory />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="myItems" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
