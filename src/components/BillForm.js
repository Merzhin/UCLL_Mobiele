import React, { Component } from 'react';
import { List, Map } from 'immutable';
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  SectionList,
  FlatList,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { addExpense } from '../redux/actions/expenses';
import { NavigationActions } from 'react-navigation';

 class BillForm extends Component {
    constructor(props){
        super(props)
        this.state = {description : '' ,
                        amount: '',
                    whopaid: ''}
    }

    


    addexpense(){
        this.props.onAddExpense(this.state.amount,this.state.description,this.state.whopaid);
        this.props.navigation.goBack(null);
    }
  
  render() {
      console.log(this.props);
    
      
    return (
        <View>
            <View>
                <TextInput 
                  onChangeText={(text) => this.setState({description : text})}
                  value={this.state.description}
                />
                <TextInput 
                  onChangeText={(text) => this.setState({amount : text})}
                  value={this.state.amount}
                />
                <TextInput 
                  onChangeText={(text) => this.setState({whopaid : text})}
                  value={this.state.whopaid}
                />
            
            <TouchableHighlight onPress={() => this.addexpense()}>
              <Text>Add trip</Text>
            </TouchableHighlight>
              
            </View>
      </View>
      );
    }
  }
  const mapStateToProps = (state) => {
    return {
      //trips: state.trips.trips
    };
  }
 
  const mapDispatchToProps = (dispatch) => {
      return {
          onAddExpense: (amount,description,whopaid) => { dispatch(addExpense(amount,description,whopaid)); }
      }
    }
    
  export default connect(mapStateToProps, mapDispatchToProps)(BillForm);