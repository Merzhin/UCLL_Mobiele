import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { addTransfer } from '../redux/actions/moneyTransfers';

export class AddTransferPage extends Component {
    addTransfer() {
        this.props.onAddTransfer(this.state.name, this.state.amount, this.state.currency);
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {
        return (
            <ScrollView>
                <TextInput 
                  placeholder='Who paid?'
                  onChangeText={(text) => this.setState({ name: text })}
                />
                <TextInput 
                  placeholder='Amount?'
                  onChangeText={(text) => this.setState({ amount: text })}
                />
                <TextInput 
                  placeholder='Currency'
                  onChangeText={(text) => this.setState({ currency: text })}
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
          onAddTransfer: (transferObject) => { dispatch(addTransfer(transferObject)); }
    };
};
    
    
export default connect(mapStateToProps, mapDispatchToProps)(AddTransferPage);
