import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { Tabs } from '../components/';

import { addExpense } from '../redux/actions/expenses';
import { logout } from '../redux/actions/auth';
import Logo from '../components/Logo';
import Currencies from '../components/Currencies';
import Trips from '../components/Trips';
import BillList from '../components/BillList';
import BillTotals from '../components/BillTotals';
import Bills from '../components/BillForm';
import TripList from "../components/TripList";
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
            <Bills navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}


 
export default connect(null)(TripPage);