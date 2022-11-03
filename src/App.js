import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
import Mru from './components/mru';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/home' element={ <Home/>} />
          <Route path='/about' element={ <About/> } />
          <Route path='/cinematica/mru' element={ <Mru/> }  />
          <Route path='/*' element={ <Page404/> } />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
