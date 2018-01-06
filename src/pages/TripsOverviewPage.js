import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Trips from '../components/Trips';

class TripsOverviewPage extends Component {
    render() {
        return (
            <ScrollView>
                <Trips navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default TripsOverviewPage;
