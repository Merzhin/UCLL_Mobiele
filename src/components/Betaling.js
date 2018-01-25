import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View, Picker,Button } from 'react-native';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/expense';
import { addBetaling } from '../redux/actions/expense';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
 class Betaling extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                      betalingamount: 1,
                      betalinguser: '' };
    }


  onChange2(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
        if ( numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
    }   
    this.setState({betalingamount: newText})
}


addbetaling() {
  this.props.onAddBetaling(this.state.betalingamount,this.state.betalinguser);
  
// this.props.navigation.goBack(null);
}

  personen() {
    
   
     return Object.keys(this.props.personen).map(key => this.props.personen[key])
   }
    render() {
        console.log(this.props);
      
        
      return (
          <View>
            
              <View>
                <Text>Betaald bedrag</Text>
              <TextInput 
                  onChangeText={(text) => this.onChange2( text)}
                  value={this.state.betalingamount}
                 
                  />
<Text>Wie heeft betaald?</Text>
                  <Picker
  selectedValue={this.state.betalinguser}
  onValueChange={(itemValue, itemIndex) => this.setState({betalinguser: itemValue})}>
  <Picker.Item label="Alle" value="alle" />
  { this.personen().map((personen) => {return <Picker.Item key={personen.naam} label={personen.naam} value={personen.naam}/> })}
</Picker>
<Button
  onPress={() => this.addbetaling()
  }
  title="Voeg betaling toe"
/>
              
                </View>
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
          
            onAddBetaling: (amount,user) => { dispatch(addBetaling(amount,user)); }
          }
      }
      
    export default connect(mapStateToProps, mapDispatchToProps)(Betaling);
