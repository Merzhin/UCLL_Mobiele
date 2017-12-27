import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View
} from 'react-native';

export default class BillList extends Component {
  render() {
    return (
        <View> 
            <Text style={styles.titleText}>A list of all the bills: </Text>   
            <FlatList
            data={dummyBills}
            renderItem={({ item }) => (
                <Text> {item.owner}:  {item.amount} {item.currency} </Text>
            )
            }
            />
        </View>
    );
  }
}

const dummyBills = [ 
        { id: 0, isPayed: false, owner: 'Pieter', amount: '40,00', currency: 'EUR' },
        { id: 0, isPayed: false, owner: 'Tom', amount: '50,00', currency: 'USD' },
        { id: 0, isPayed: false, owner: 'Michiel', amount: '15,00', currency: 'GBP' }
    ];

const styles = StyleSheet.create({

    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#841584',
    },
    titleText: {
        fontSize: 20, 
        fontWeight: 'bold',
    }
    
});
