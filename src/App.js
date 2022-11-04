import Home from './pages/index'
import SingleCocktail from './pages/SingleConcktail'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      

      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cocktail/:id' element={<SingleCocktail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
