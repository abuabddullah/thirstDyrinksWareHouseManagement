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
import AllItems from './pages/AllItems/AllItems';
import Blogs from './pages/Blogs/Blogs';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import WriteBlogs from './pages/WriteBlogs/WriteBlogs';
import SingleBlogDetail from './pages/SingleBlogDetail/SingleBlogDetail';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allItems" element={<AllItems />} />

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
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:_id" element={<SingleBlogDetail />} />

        <Route path="/writeBlogs" element={
          <RequireAuth>
            <WriteBlogs />
          </RequireAuth>
        } />

        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />

        <Route path="/updateProfile" element={
          <RequireAuth>
            <UpdateProfile />
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
