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
import styles2 from '../styles/styles';
import {Row} from 'react-native-table-component';

export default class BillList extends Component<{}> {

    onPress = (item) => {
        Alert.alert('You tapped the button!')
    }


    render() {
        return (
            <View> 
                <Text style={styles.titleText}>A list of all the bills: </Text>   
                <FlatList
                data={dummyBills}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => this.onPress(item)} >
                        <View style={styles2.container}>
                            <Text> {item.debtor} owes money to {item.creditor}:  {item.amount} {item.currency} </Text>
                        </View>
                    </TouchableHighlight> 
                )
                }
                />
            </View>
        );
    }
}

const dummyBills = [ 
        { id: 0, isPayed: false, creditor: 'Pieter', debtor: 'Tom', amount: '40.00', currency: 'EUR'},
        { id: 0, isPayed: false, creditor: 'Pieter', debtor: 'Michiel', amount: '15.00', currency: 'USD'},
        { id: 0, isPayed: false, creditor: 'Tom', debtor: 'Pieter', amount: '4.00', currency: 'GBP'},
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
