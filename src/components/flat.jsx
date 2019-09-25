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
            <div className="flat card-trip">
                <img src={this.props.flat.imageUrl} />
            
                <div className="card-trip-infos" >
                    <div>
                        <h2>{this.props.flat.name}</h2>
                        <p>{this.props.flat.price}</p>
                    </div>
                    <h2 className='card-trip-pricing'>{this.props.flat.price}</h2>
                </div>
            </div>
        );
    };
}

export default Flat;