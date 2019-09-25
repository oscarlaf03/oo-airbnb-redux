import React,{ Component } from 'react';

class Flat extends Component {
    // constructor (props){
    //     super(props);
    // }

    render () {
        
        const style = {
            backgroundImage: `url(${this.props.flat.imageUrl})`
        };
        return (
            <div className="flat card-container">
                <div className="card" style={style}>
                    <h2>{this.props.flat.name}</h2>
                    <p>{this.props.flat.price}  </p>
                
                </div>
            </div>
        );
    };
}

export default Flat;