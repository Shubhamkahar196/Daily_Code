import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ViewFile from './pages/ViewFile';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Security from './pages/Security';
import ApiDocs from './pages/ApiDocs';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="App min-h-screen flex flex-col bg-gradient-to-br from-primary-500 to-purple-600 bg-fixed">
            <Navbar />
            <main className="main-content flex-1 px-4 py-8 max-w-6xl mx-auto w-full animate-fade-in">
              <Routes>
                <Route path="/" element={<Home key="home" />} />
                <Route path="/login" element={<Login key="login" />} />
                <Route path="/register" element={<Register key="register" />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute key="dashboard">
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/view/:shareLink" element={<ViewFile key="view" />} />
                <Route path="/help" element={<Help key="help" />} />
                <Route path="/contact" element={<Contact key="contact" />} />
                <Route path="/privacy" element={<Privacy key="privacy" />} />
                <Route path="/terms" element={<Terms key="terms" />} />
                <Route path="/about" element={<About key="about" />} />
                <Route path="/faq" element={<FAQ key="faq" />} />
                <Route path="/security" element={<Security key="security" />} />
                <Route path="/api-docs" element={<ApiDocs key="api-docs" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
