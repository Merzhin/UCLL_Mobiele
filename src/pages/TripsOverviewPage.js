import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Trips from '../components/TripList';

class TripsOverviewPage extends Component {
    
    render() {
        return (
            <ScrollView>
                <Trips />
            </ScrollView>
        );
    }
}

export default TripsOverviewPage;
