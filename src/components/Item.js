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
import { addItem } from '../redux/actions/expense';
import { NavigationActions } from 'react-navigation';

 class Item extends Component {
    constructor(props){
        super(props)
        this.state = {description : '' ,
                        amount: '',
                    users: ['']}
    }

    additem(){
        this.props.onAddItem(this.state.amount,this.state.description);
     //   this.props.navigation.goBack(null);
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
                 
              
              <TouchableHighlight onPress={() => this.additem()}>
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
            onAddItem: (amount,description) => { dispatch(addItem(amount,description)); }
        }
      }
      
    export default connect(mapStateToProps, mapDispatchToProps)(Item);