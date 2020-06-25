import React, { Component } from 'react'; 

export default class PokemonDetail extends Component { 

    render() { 
        const{ data: { error, loading, data: pokemon}} = this.props
        console.log('pokemon: ', pokemon); 
        if(loading) { 
            return (
                <div style={{ width: '50%', margin: 'auto'}}>
                    loading
                </div>
            )        
        } else if(error) { 
            return (
                <div style={{ width: '50%', margin: 'auto'}}>
                    error
                </div>
            )        
        } else if(pokemon) { 
            return (
                <div style={{ width: '50%', margin: 'auto'}}>
                    <ul>
                        <li>{pokemon.name}</li>
                        <li>
                            <img src={pokemon.sprites.front_default}/>
                        </li>
                    </ul>
                </div>
            )        
        } else {
            return <div> Well shit, there is no pokemon</div>
        }
    }
}