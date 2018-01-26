import React, { Component } from 'react';
import { ScrollView, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import UserList from '../components/UserList';

export class PersonOverviewPage extends Component {
    static navigationOptions = {
        tabBarLabel: 'People',
        header: null
      };
    render() {
        return (
            <ScrollView>
                <Text>List of peeps here</Text>
                <UserList />
                <Button 
                    title='Add a new user' 
                    onPress={() => this.props.navigation.navigate('AddPerson')} 
                    navigation={this.props.navigation}
                />
            </ScrollView>
        );
    }
}

export default PersonOverviewPage;
