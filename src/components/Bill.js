import styles from '../styles/styles'
import React from 'react';
import {
    Text, View, TouchableHighlight
} from 'react-native';

class ToDoListItem extends React.Component {
    constructor(){
        super();
    }
    render() {
        var bill = this.props.bill;
        return (
            <View>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}>
                    <View style={styles.container}>
                        {/* <Row data={[bill.id, bill.isPayed, bill.creditor, bill.debtor, bill.amount, bill.currency]}/> */}
                        <Text>ID: {bill.id}  </Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.hr}/>
            </View>
        );
    }
}

module.exports = Bill;


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
