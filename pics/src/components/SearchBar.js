import React from 'react'; 

//create component 
class SearchBar extends React.Component {
    state = { term: ''}; 

    onFormSubmit = (event) => {  // arrow function indicates 'this' is direct 'SearchBar' 
        event.preventDefault(); // personal project,controlled - no longer automatically refresh itself

        this.props.onSubmit(this.state.term); 
    }; 

    render() {
        return ( 
            <div className="ui segment">  
            <form onSubmit={ this.onFormSubmit } className="ui form"> 
                <div className="field">
                    <label>Image Search</label>
                    <input 
                     type="text" 
                     value={this.state.term}
                     onChange={e => this.setState({ term: e.target.value })} 
                    />
                </div>
            </form>
            </div>
        ); 
    }
}

export default SearchBar; 