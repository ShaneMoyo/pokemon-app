import React, { Component } from 'react'; 
import { 
    Switch, 
    Route
} from 'react-router-dom'; 
import Search from './Search';
import api from '../../services/pokemonAPI';  


export default class PokemonContainer extends Component { 
    state = { 
        loading: false, 
        error: false, 
        data: null,
    }

    handleSearch = async value => { 
        this.setState({ 
            loading: true, 
            error: false
        }); 
        try { 
            const data = await api.getPokemonByName(value);
            this.setState({ 
                loading: false, 
                data
            }); 
        } catch(error) { 
            console.log('error: ', error); 
            this.setState({ 
                loading: false, 
                error: true
            }); 
        }
    }

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