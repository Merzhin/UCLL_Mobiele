import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableHighlight, TouchableOpacity, View, StyleSheet } from 'react-native';

export class Currency extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '1',
            rates: {},
            modalVisibility:false

        }
    }
 getRates () {
     fetch('https://api.fixer.io/latest?base=' + this.props.base, {method: "GET"})
     .then((response) => response.json())
     .then((responseData) => {
            this.setState({rates: responseData.rates});
        })
        .done();  
    }

    

    
    render() {
        console.log(this.props);
      return (
        <View>
                <TouchableHighlight onPress={() => {  this.getRates(); this.setState({modalVisibility:true});}}>
                    <Text>{this.props.amount}</Text>
                </TouchableHighlight>
                <Modal isVisible={this.state.modalVisibility}>
                    <View style={ styles.modalContent }>
                        <Text style={{fontSize: 20, marginBottom: 10}}>Currency conversion!</Text>
                         {<Text>USD: { this.state.rates.USD * this.props.amount } </Text>}
                         {<Text>EUR: { this.state.rates.EUR * this.props.amount } </Text>}
                         {<Text>GBP: { this.state.rates.GBP * this.props.amount } </Text>}
                         {<Text>JPY: { this.state.rates.JPY * this.props.amount } </Text>}
                        <TouchableHighlight onPress={() => {this.setState({modalVisibility:false}); console.log(this.state.rates)}}>
                            <View style={styles.button}>
                                <Text>Close</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </Modal>
                
        </View>
        );
      }
    }

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        button: {
          backgroundColor: 'lightblue',
          padding: 12,
          margin: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
        modalContent: {
          backgroundColor: 'white',
          padding: 22,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }
    });

    
    
      
    