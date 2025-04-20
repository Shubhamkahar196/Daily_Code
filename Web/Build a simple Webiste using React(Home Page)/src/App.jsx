import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Exams from "./components/Exams";
import Programs from "./components/Programs";
import Scholarships from "./components/Scholarships";
import { BrowserRouter ,Routes, Route} from 'react-router-dom'


function App() {
    

  return (
       <BrowserRouter>
        <NavBar/>
      <Routes>

        <Route path="/" element={<Layout/>}></Route>
        <Route path="/exams" element={<Exams/>}></Route>
        <Route path="/programs" element={<Programs/>}></Route>
        <Route path="/scholarships" element={<Scholarships/>}></Route>
      </Routes>
       
       <Footer/>
       </BrowserRouter>
  )
}

export default App
