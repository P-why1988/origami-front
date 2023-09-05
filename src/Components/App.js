import '../Styles/App.css';
import '../Styles/bootstrap.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import OrigamiPage from '../Pages/OrigamiPage';
import { TYPE } from '../Data/origamiList';
import MySpecialNavbar from './MySpecialNavbar';
import { Container } from 'react-bootstrap';

function App() {
    
    function url(link) {
        return 'origami-front/' + link;
    }
    
    return (
        <Container fluid className='p-0 ori-fullsize'>
            <HashRouter>
                <MySpecialNavbar />
                <Container fluid className='p-0 ori-body'>
                    <Routes>
                        <Route exact path='*' element={ <Navigate to={ url('home') } /> } />
                        <Route exact path={ url('home') } element={ <Home /> } />
                        <Route 
                            exact path={ url('boxes') }
                            element={
                                <OrigamiPage
                                    type={ TYPE.box }
                                /> 
                            }
                        />
                        <Route 
                            exact path={ url('animals') }
                            element={
                                <OrigamiPage
                                    type={ TYPE.animal }
                                /> 
                            }
                        />
                        <Route 
                            exact path={ url('other') }
                            element={
                                <OrigamiPage
                                    type={ TYPE.other }
                                /> 
                            }
                        />
                        <Route 
                            exact path={ url('all') }
                            element={
                                <OrigamiPage
                                /> 
                            }
                        />
                    </Routes>
                </Container>
            </HashRouter>
        </Container>
  );
}

export default App;
