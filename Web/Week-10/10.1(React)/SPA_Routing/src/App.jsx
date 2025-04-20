
import { BrowserRouter, Routes, Route, Link, useNavigate, redirect, Outlet  } from 'react-router-dom'
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
      {/* <Link to="/">Allen</Link>
      |
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      |
      <Link to="/neet/online-coaching-class-11">Class 11</Link> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program />}> </Route>
          <Route path='/neet/online-coaching-class-12' element={<Class12Program />}> </Route>
          <Route path='/' element={<Landing />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Route>
      </Routes>
      Footer | contact us
    </BrowserRouter>

  </div>
}

function Layout(){
  return <div style={{height: "100vh",backgroundColor: 'green'}}>
     
     <Header/>
      {/* <Link to="/">Allen</Link>
      |
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      |
      <Link to="/neet/online-coaching-class-11">Class 11</Link> */}
      <div style={{height: "90vh", backgroundColor: 'red'}}>
        <Outlet/>
      </div>
      footer
  </div>
}

function Header(){
  return <>
        <Link to="/">Allen</Link>
      |
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      |
      <Link to="/neet/online-coaching-class-11">Class 11</Link>
  </>
}

function ErrorPage() {
  return <>
    Sorry page not found
  </>
}
function Landing() {
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
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/")
  }
  return <div>
    NEET program for class 12th
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}
export default App
