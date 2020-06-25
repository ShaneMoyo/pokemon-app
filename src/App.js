import React from 'react';
import PokemonContainer from './components/pokemon'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
} from 'react-router-dom'; 

function App() {
  const About = () => (
    <section> 
      <h1>Pokemon App</h1> 
      <p>
        Welcome to my pokemon app. This application wraps the pokemon api.
        Have fun looking up different pokemon.  
      </p>
    </section> 
  );
  return (
    <div className="App">
      <Router> 
        <nav>
          <Link to='/'>Home</Link> 
          <Link to='/about'>About</Link> 
        </nav> 
        <Switch>
          <Route path='/about' render={() => <About/>} />
          <Route path='/' component={PokemonContainer} />
        </Switch> 
      </Router> 
    </div>
  );
}

export default App;
