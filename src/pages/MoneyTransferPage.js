import React, { Component } from 'react';
import { ScrollView, View, Button } from 'react-native';
import MoneyTransferList from '../components/MoneyTransferList';

class MoneyTransferPage extends Component {
    static navigationOptions = {
        tabBarLabel: 'Transfers',
        header: null
      };
    render() {
        return (
            <View>
                <ScrollView>
                    <MoneyTransferList />
                </ScrollView>
                <Button 
                    title='Add a money transfer' 
                    onPress={() => this.props.navigation.navigate('AddTransfer')} 
                    navigation={this.props.navigation}
                />
            </View>

        );
    }
}

export default MoneyTransferPage;
