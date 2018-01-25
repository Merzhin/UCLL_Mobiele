import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { addTransfer } from '../redux/actions/moneyTransfers';

export class AddTransferPage extends Component {
    addTransfer() {
        console.log(this.state);
        this.props.onAddTransfer(this.state.name, this.state.amount, this.state.currency);
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {
        return (
            <ScrollView>
                <TextInput 
                  placeholder='Who paid?'
                  onChangeText={(name) => this.setState({ name })}
                />
                <TextInput 
                  placeholder='Amount?'
                  onChangeText={(amount) => this.setState({ amount })}
                />
                <TextInput 
                  placeholder='Currency'
                  onChangeText={(currency) => this.setState({ currency })}
                />
                <TouchableHighlight onPress={() => this.addTransfer()}>
                  <Text>Add transfer</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      transfers: state.transfers
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
          onAddTransfer: (name, amount, currency) => { dispatch(addTransfer(name, amount, currency)); }
    };
};
    
    
export default connect(mapStateToProps, mapDispatchToProps)(AddTransferPage);
