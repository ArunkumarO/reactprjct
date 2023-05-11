import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Resturant from './Resturant';
import Restview from './Restview';
function App() {
  return (
    <div className="App">
      <Header/>

<Routes>
  <Route path='/' element={<Resturant/>
  }/>
    <Route path='/viewRest/:id' element={<Restview/>}/>
    
</Routes>
   <Footer/>

      </div>
  );
}

export default App;
