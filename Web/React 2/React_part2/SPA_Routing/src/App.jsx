
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
// import this
import './App.css'

function App() {
  return <div>
   {/* <a href='/'>Allen</a>   */}

  
   {/* |  */}
   {/* <a href='/neet/online-coaching-class-11'a>Class 11 </a>   */}

   {/* | */}
    {/* <a href="/">Class 12</a>  */}

    <BrowserRouter>
    <Link to="/">Allen</Link>
    |
   <Link to="/neet/online-coaching-class-12">Class 12</Link>
   |
   <Link to="/neet/online-coaching-class-11">Class 11</Link>
    <Routes>
      <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}> </Route>
      <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}> </Route>
      <Route path='/' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  
  </div>
}

function Landing(){
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
    NEET programs for class 11th
  </div>
}

function Class12Program() {
  return <div>
    NEET program for class 12th
  </div>
}
export default App
