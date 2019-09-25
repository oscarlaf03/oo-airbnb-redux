import React, { Component } from 'react';
import Map from '../containers/map.jsx';
import FlatList from '../containers/flat_list.jsx';

class App extends Component{
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div className='row'>
                <FlatList />
                <Map />
            </div>
        );

    }
}


export default App;