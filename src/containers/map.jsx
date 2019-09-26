import React, {Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state={

        }

    }

    render () {

        let marker = null;
        let center = {lat:48.856614, lng:2.352222}
        const style = {
            height:'100vh'
        };
        let zoom = 16;

        if (this.props.selectedFlat){
            marker =  <div 
                style = {
                    {
                        width:'20px',
                        height:  '20px',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                    }   
                }
                lat = {this.props.selectedFlat.lat}
                lng = {this.props.selectedFlat.lng}
            />
            center = { 
                lat: this.props.selectedFlat.lat,
                lng: this.props.selectedFlat.lng
            }
            zoom = 22;
        }
        return(
            <div className='col-sm-5' style={style}>
                <GoogleMapReact
                    bootstrapURLKeys={ {key: 'AIzaSyA1dw0Jy3rR_7T3ut6mOSXpKHsdBZcCfz8'}}
                    center={center}
                    defaultZoom={16}>
                    {marker}
                </GoogleMapReact>     
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { selectedFlat: state.selectedFlat };
}


export default connect(mapStateToProps) (Map);