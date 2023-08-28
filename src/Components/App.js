import '../Styles/App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import OrigamiPage from '../Pages/OrigamiPage';

function App() {
  return (
    <>
        <BrowserRouter>
            <ul>
                <li><Link to='/boxes'>Voir les boîtes</Link></li>
                <li><Link to='/animals'>Voir les animaux</Link></li>
            </ul>

            <Routes>
                <Route exact path='*' element={ <Navigate to='/home' /> } />
                <Route exact path='/home' element={ <Home /> } />
                <Route exact path='/boxes' element={ <OrigamiPage /> } />
                <Route exact path='/animals' element={ <OrigamiPage /> } />
            </Routes>
        </BrowserRouter>
        
    </>
    
  );
}

export default App;
