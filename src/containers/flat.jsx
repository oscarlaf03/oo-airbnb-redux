import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
    // constructor (props){
    //     super(props);
    // }

    handleClick = () => {
        this.props.selectFlat(this.props.flat)
    }

    render () {
        
        const style = {
            backgroundImage: `url(${this.props.flat.imageUrl})`
        };

        let classes = 'flat card-trip';
        if (this.props.flat === this.props.selectedFlat){
            classes += ' selected';
        }
        return (
            <div onClick={this.handleClick} className={classes}>
                <img src={this.props.flat.imageUrl} />
            
                <div className="card-trip-infos" >
                    <div>
                        <h2>{this.props.flat.name}</h2>
                        <p>Best flat</p>
                    </div>
                    <h2 className='card-trip-pricing'>{this.props.flat.price} {this.props.flat.priceCurrency}</h2>
                </div>
            </div>
        );
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {selectFlat: selectFlat},
        dispatch
    );
}


function mapStateToProps(state){
    return {
        selectedFlat: state.selectedFlat
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Flat);