import React, {Component} from 'react'; 

export default class Search extends Component { 
    state={ 
        value: ''
    }

    handleChange = value => { 
        console.log('usrname: ', value); 
        this.setState({ 
            value
        }); 
    }

    handleSubmit = event => {
        event.preventDefault(); 
        console.log('submitting', this.state.value)
    }

    render() { 
        return (
            <form onSubmit={event => this.handleSubmit(event)} style={{ width: '50%', margin: 'auto'}}>
                <fieldset >
                    <label>Search Pokemon: </label>
                    <input type="text" onChange={({ target: { value }}) => this.handleChange(value)}/> 
                    <button type="submit" > Submit</button>
                </fieldset>
            </form> 
        ); 
    }
}