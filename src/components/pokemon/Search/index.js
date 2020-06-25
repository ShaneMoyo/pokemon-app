import React, { Component } from 'react'; 
import Search from './Search'; 
import PokemonDetail from '../pokemon-detail';


export default class SearchContainer extends Component { 

    render() { 
        return (
            <section>
                <Search />
                <PokemonDetail data={this.props.data}/>
            </section>
        ); 

    }
}