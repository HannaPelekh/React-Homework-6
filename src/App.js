import { 
  BrowserRouter,
  Routes,
  Route  
} from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Popular from './components/popular/Popular';
import Home from './components/home/Home';
import Battle from './components/battle/Battle';
import Nav from './components/header/Nav';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className='container'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='popular' element={<Popular/>}/>
          <Route path='battle' element={<Battle/>}/>
          <Route path='*' element={<NoMatch/>}/>       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
