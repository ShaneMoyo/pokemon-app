import React, { Component } from 'react'; 
import { 
    Switch, 
    Route
} from 'react-router-dom'; 
import Search from './Search'; 


export default class PokemonContainer extends Component { 

    render() { 
        return (
            <section style={{ width: '80%', margin: 'auto'}}>
                <h1 style={{ width: '30%', margin: 'auto'}}>Pokemon Container</h1> 
                <div>
                    <Switch>
                        <Route path="/" component={Search}/> 
                    </Switch>
                </div>
            </section>
        ); 
         
    }
}