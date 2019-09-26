import React, { Component } from 'react';
import Flat from './flat.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';


class FlatList extends Component {

    componentWillMount() {
        this.props.setFlats();        
    } 

    constructor(props) {
        super(props);
        this.state={

        }

    }

    // static defaultProps = {
    //     flats: [{
    //         "name": "Charm at the Steps of Montmartre",
    //         "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    //         "price": 164,
    //         "priceCurrency": "EUR"
    //     }]
    // }

   
    render () {
        return(
            <div className='flat-list col-sm-7 card-category'> 
                {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { setFlats: setFlats },
        dispatch 
    );
}

function mapReduxStateToProps(reduxState) {
    return {
        flats: reduxState.flats
    };
}



export default connect(mapReduxStateToProps, mapDispatchToProps) (FlatList);