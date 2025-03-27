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
import NotFound from './Pages/NotFound';
import Ask from './Pages/Ask';
import ScrollToTop from './Components/ScrollToTop';




function App() {
  

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="*" element={<NotFound />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/courses" element={<Courses />} />
                <Route path="/ask" element={<Ask />} />
              </Route>
            </Routes>
          <Footer />
        </AuthProvider>
        </BrowserRouter>
    
    </>
  )
}

export default App
