
import './App.css';
import { useState} from 'react';
import NavBar from './component/navbar';
import Footer from './component/Footer';

function App() {
  const [ value, setValue ] = useState(0)
  return (
    <div className="App">
      <NavBar/>
     <div className='value'> {value}</div>
     <button onClick={ ()=>{setValue(value + 1)}}>click me</button>
     <Footer/>
    </div>
  );
}

export default App;
