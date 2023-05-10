
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './App.css'
import HomePage from './HomePage';

function Home() {


  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
         
        
        <Route path="/home" element={<HomePage />}/>
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
