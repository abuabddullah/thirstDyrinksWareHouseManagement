import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from "./pages/sharedPages/NavigationBar/NavigationBar"
import NotFound from './pages/sharedPages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    
      <ToastContainer />
    </div>
  );
}

export default App;
