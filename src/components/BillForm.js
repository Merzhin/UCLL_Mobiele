import React, { Component } from 'react';
import { Text, TextInput, ScrollView, TouchableHighlight, View, Button} from 'react-native';
import { connect } from 'react-redux';
import { addExpense, addExpenseObject } from '../redux/actions/expenses';
import { clearexpense} from '../redux/actions/expense';
import Item from '../components/Item';
import Betaling from '../components/Betaling';

 class BillForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

 
    addexpenseobject() {
      this.props.onAddExpenseObject(this.props.expense, this.props.navigation.state.params.trip.id);
      this.props.onClearExpenseObject();
      this.props.navigation.goBack(null);
  }
    items() {
      return Object.keys(this.props.items).map(key => this.props.items[key]);
    }

  render() {
      console.log(this.props);
     
    return (
        <ScrollView>
          
          <View>
            <Text>Totale bedrag:</Text>
          <Text>{this.props.expense.amount}</Text>

            <Item />
            <Betaling/>
            <Button
  onPress={() => this.addexpenseobject()
  }
  title="Voeg expense toe"
/>
           
              
            </View>
            
      </ScrollView>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      items: state.expense.item,
      expense: state.expense
      //trips: state.trips.trips
    };
  };
 
  const mapDispatchToProps = (dispatch) => {
      return {
          onAddExpense: (amount,description,whopaid,tripID) => { dispatch(addExpense(amount,description,whopaid,tripID)); },
          onAddExpenseObject: (expense,tripID) => { dispatch(addExpenseObject(expense,tripID)); },
          onClearExpenseObject: () => { dispatch(clearexpense()); }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(BillForm);