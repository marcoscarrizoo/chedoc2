import React from 'react';
import { Route } from 'react-router';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import Series from './components/series/Series';
import NavBar from './components/navbar/NavBar';

function App() {


  return (
 <React.Fragment>
   <Route path='/' component={NavBar}/>
   <Route exact path='/' component={Home}/>
   <Route path='/movies' component={Movies}/>
   <Route path='/series' component={Series}/>
 </React.Fragment>
  );
}

export default App;

