import React, {Component} from 'react'; 
import SearchContext from '../../../contexts/SearchContext'; 


export default class Search extends Component { 
    state={ 
        value: ''
    }

    handleChange = value => { 
        this.setState({ 
            value
        }); 
    }

    handleSubmit = (event, handleSearch) => {
        event.preventDefault(); 
        handleSearch(this.state.value)
    }

    render() { 
        return (
            <SearchContext.Consumer>
                { handleSearch => (
                    <form onSubmit={event => this.handleSubmit(event, handleSearch)} style={{ width: '50%', margin: 'auto'}}>
                        <fieldset >
                            <label>Search Pokemon: </label>
                            <input type="text" onChange={({ target: { value }}) => this.handleChange(value)}/> 
                            <button type="submit" > Submit</button>
                        </fieldset>
                    </form> 
                )}
            </SearchContext.Consumer>
        );  
    }
}