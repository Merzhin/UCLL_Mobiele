import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/users';
import CurrencyPicker from '../components/CurrencyPicker';

export class AddUserPage extends Component {
    addUser() {
        console.log(this.state);
        this.props.onAddUser(this.state.firstName, this.state.lastName);
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {
        return (
            <ScrollView>
                <TextInput 
                  placeholder='First name'
                  onChangeText={(firstName) => this.setState({ firstName })}
                />
                <TextInput 
                  placeholder='Last name'
                  onChangeText={(lastName) => this.setState({ lastName })}
                />
                <TouchableHighlight onPress={() => this.addUser()}>
                  <Text>Add User</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      transfers: state.personen
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
          onAddUser: (firstName, lastName) => { dispatch(addUser(firstName, lastName)); }
    };
};
    
    
export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);
