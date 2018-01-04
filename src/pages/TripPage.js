import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, View, Button } from 'react-native';

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
    
    trips() {
        const expensess = [];
        if(this.props.expenses!=null){
        this.props.expenses.forEach(function(item) {
            if(item.tripID==this.props.navigation.state.params.trip.id){
                expensess.push(item);
            }
        }, this);}
        return Object.keys(expensess).map(key => expensess[key])
      }

    newExpense = ( trip ) => {
        this.props.navigation.navigate('NewExpense', { trip });
      } ; 
    render() {
        const  trip = this.props.navigation.state.params.trip;
       
        console.log(trip);
        return (
            
            <ScrollView style={{ padding: 20 }}>
                <Text>{trip.text}</Text>
               
                { this.trips().map((expense) => {return <TouchableHighlight onPress={() => this.onTripPress(trip)}><Text key={expense.id}> {expense.description}</Text></TouchableHighlight>})}
                
                <Button onPress={() => this.newExpense(trip)} title='New Expense'/>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      expenses: state.expenses.expenses,
      
    };
  }
 
  const mapDispatchToProps = (dispatch) => {
      return {
          
      }
    }
 
export default connect(mapStateToProps, mapDispatchToProps)(TripPage);