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
import Debug from './pages/Debug';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home key="home" />} />
                <Route path="/login" element={<Login key="login" />} />
                <Route path="/register" element={<Register key="register" />} />
                <Route path="/debug" element={<Debug key="debug" />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute key="dashboard">
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/view/:shareLink" element={<ViewFile key="view" />} />
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
