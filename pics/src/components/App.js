import React from 'react'; 
import axios from 'axios';  // third party package goes upper position
import SearchBar from './SearchBar'; 



class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {  // two arguments 
        params: { query: term }, // the end result
        headers: {
            Authorization: 
            'Client-ID Cw7bYYtse76GRuLBkZxSZvxU0rZJs8ta0876OvFCL3s'
            }
        }); 
    }

    render () {
        return (
            <div className="ui container" style= {{marginTop: '10px'}}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
            </div>
        ); 
    }
}

export default App; 


// const App = () => {
//     return(
//     <div className="ui container" style={{ marginTop: '10px'}}>
//        <SearchBar /> 
//     </div>
//     );
// }

