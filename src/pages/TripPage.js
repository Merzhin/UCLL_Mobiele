import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';

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

    newExpense = ( trip ) => {
        this.props.navigation.navigate('NewExpense', { trip });
      } ; 
    render() {

        const  trip = this.props.navigation.state.params.trip;
        console.log(trip);
        return (
            
            <ScrollView style={{ padding: 20 }}>
                <Text>{trip.text}</Text>
                <Button onPress={() => this.newExpense(trip)} title='New Expense'/>

            </ScrollView>
        );
    }
}


 
export default connect(null)(TripPage);