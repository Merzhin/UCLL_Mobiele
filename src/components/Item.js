import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View, Picker,Button } from 'react-native';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/expense';

import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
 class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '',
                      amount: 1, 
                      user: ''};
    }

    onChange(text) {
      let newText = '';
      let numbers = '0123456789';
  
      for (var i = 0; i < text.length; i++) {
          if ( numbers.indexOf(text[i]) > -1 ) {
              newText = newText + text[i];
          }
      }   
      this.setState({amount: newText})
  }


additem() {
  this.props.onAddItem(this.state.amount,this.state.description,this.state.user);
  
// this.props.navigation.goBack(null);
}



  personen() {
    
   
     return Object.keys(this.props.personen).map(key => this.props.personen[key])
   }
    render() {
        console.log(this.props);
      
        
      return (
         
              <View>
                <Text>Beschrijving item</Text>
                  <TextInput 
                    onChangeText={(text) => this.setState({description : text})}
                    value={this.state.description}
                  />
                  <Text>Kostprijs item</Text>
                  <TextInput 
                    onChangeText={(text) => this.onChange( text)}
                    value={this.state.amount}
                  />
<Text>Wie is het bedrag verschuldigd?</Text>
                  <Picker
                    selectedValue={this.state.user}
                    onValueChange={(itemValue, itemIndex) => this.setState({user: itemValue})}>
                  <Picker.Item label="Alle" value="alle" />
                    { this.personen().map((personen) => {return <Picker.Item key={personen.naam} label={personen.naam} value={personen.naam}/> })}
                  </Picker>
              
              
              <Button
  onPress={() => this.additem()
  }
  title="Voeg item toe"
/>
              </View>
             
        
        );
      }
    }
    const mapStateToProps = (state) => {
      return {
        personen: state.personen.personen
      };
    }
   
    const mapDispatchToProps = (dispatch) => {
        return {
            onAddItem: (amount,description,user) => { dispatch(addItem(amount,description,user)); }
      
          }
      }
      
    export default connect(mapStateToProps, mapDispatchToProps)(Item);
