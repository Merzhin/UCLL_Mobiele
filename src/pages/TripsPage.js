import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Trips from '../components/Trips';

class TripPage extends Component {
    
    render() {
        return (
            <ScrollView>
                <Trips navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trips: state.trips,
    };
};
 
const mapDispatchToProps = (dispatch) => { 
    return {

    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(TripPage);
