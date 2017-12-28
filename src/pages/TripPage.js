import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { Tabs } from '../components/';


class TripPage extends Component {

    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
        console.log (this.props.navigation);
        const  trip = this.props.navigation.state.params.trip;
        console.log(trip);
        return (
            
            <ScrollView style={{ padding: 20 }}>
                <Text>{trip.text}</Text>
            
            </ScrollView>
        );
    }
}

 
export default connect(null)(TripPage);
