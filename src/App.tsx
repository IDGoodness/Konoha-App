import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import ResetPassword from './Components/ResetPassword';
import Courses from './Pages/Courses';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './Components/ProtectedRoute';




function App() {
  

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    
    </>
  )
}

export default App
