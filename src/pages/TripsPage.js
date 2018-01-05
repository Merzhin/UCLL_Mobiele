import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Trips from '../components/TripList';
import TripsNavigator from '../navigators/TripsNavigator';

class TripPage extends Component {
    
    render() {
        return (
            <TripsNavigator />
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
