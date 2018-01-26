import React, { Component } from 'react';
import { Text, TextInput, ScrollView, TouchableHighlight, View, Button,Picker, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addExpense, addExpenseObject } from '../redux/actions/expenses';
import { clearexpense} from '../redux/actions/expense';
import Item from '../components/Item';
import Betaling from '../components/Betaling';

 class BillForm extends Component {
    constructor(props) {
        super(props);
        this.state = { description: "" ,
                     categorie: "" };
    }

 
    addexpenseobject() {
      const isValid = this.validate();
        if (isValid) {
          this.props.onAddExpenseObject(this.props.expense, this.props.navigation.state.params.trip.id, this.state.description, this.state.categorie);
          this.props.onClearExpenseObject();
          this.props.navigation.goBack(null);
        } else {
          Alert(this.state.descriptionError);
      }
  }
    // items() {
    //   return Object.keys(this.props.items).map(key => this.props.items[key]);
    // }
    categories() {
    
   
      return Object.keys(this.props.categories).map(key => this.props.categories[key])
    }

    validate() {
        let isValid = true; 
        const errors = {
            locationError: ''
        };
        if (this.state.description.length < 1) {
            isValid = false;
            errors.descriptionError = "Description can't be empty";
        }
        this.setState({
            ...this.state,
            ...this.errors
        });
        return isValid;
    }
    
  render() {
      console.log(this.props);
     
    return (
        <ScrollView>
          
          <View>
          <Text>Beschrijving expense</Text>
                  <TextInput 
                    onChangeText={(text) => this.setState({description: text })}
                    value={this.state.description}
                  />
                  <Text>Welke Categorie</Text>
                  <Picker
                    selectedValue={this.state.categorie}
                    onValueChange={(itemValue, itemIndex) => this.setState({categorie: itemValue })}
                  >
                  {/* <Picker.Item label="Alle" value="alle" /> */}
                    { this.categories().map((categorie) => { return <Picker.Item key={categorie.naam} label={categorie.naam} value={categorie.naam} />;
                  })}
                  </Picker>

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
      expense: state.expense,
      categories: state.categories.categories
      //trips: state.trips.trips
    };
  };
 
  const mapDispatchToProps = (dispatch) => {
      return {
          onAddExpense: (amount,description,whopaid,tripID) => { dispatch(addExpense(amount,description,whopaid,tripID)); },
          onAddExpenseObject: (expense,tripID,description,categorie) => { dispatch(addExpenseObject(expense,tripID,description,categorie)); },
          onClearExpenseObject: () => { dispatch(clearexpense()); }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(BillForm);