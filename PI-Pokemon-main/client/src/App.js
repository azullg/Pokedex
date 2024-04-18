import './App.css';

import DetailPage from './Pages/DetailPage/DetailPage';
import NewPage from './Pages/NewPage/NewPage'
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';


function App() {
  
  const location = useLocation()
 
 
  return (
    
       <div className="App"> 
       {location.pathname !== '/'? 
       <NavBar />: undefined

       }
      
      <Routes>
   
        <Route path='/' element ={<LandingPage/>}/>
        <Route  path='/home' element = {<HomePage/>} />
        <Route path= "/home/:id"element={<DetailPage/>}/>
        <Route path='/new' element={<NewPage/>}/>
    
      </Routes>
        
           </div> 

    

  );

  
}

export default App;
