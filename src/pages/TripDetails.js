import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button } from 'react-native';
import ExpenseTable from '../components/ExpenseTable';
import CategoryTable from '../components/CategoryTable';
import CategoryTablePP from '../components/CategoryTablePP';
class TripPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = { personenBerekend:{} };
    }

    onTripPress(expense){
        this.setState({personenBerekend: expense.personenBerekend});
    }

    trips() {

        const expensess = [];
        if (this.props.expenses!=null) {
            this.props.expenses.forEach(
                function (item) {
                    if (item.tripID === this.props.navigation.state.params.trip.id) {
                        expensess.push(item);
                    }
                }
            , this);
        }
        return Object.keys(expensess).map(key => expensess[key])
      }   

    render() {
        const trip = this.props.navigation.state.params.trip;
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text>{trip.text}</Text>
                { this.trips().map((expense) => {
                    return (
                        <TouchableHighlight onPress={() => this.onTripPress(expense)}>
                          <Text key={expense.id}> {expense.description}</Text>
                        </TouchableHighlight>
                    );   
                })}
                <Button 
                    onPress={() => this.props.navigation.navigate('NewExpense', { trip })} 
                    title='New Expense'
                    navigation={this.props.navigation}
                />
                <ExpenseTable personenBerekend={this.state.personenBerekend} /> 
                <CategoryTable />
                <CategoryTablePP />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      expenses: state.expenses.expenses,
    };
};
 
export default connect(mapStateToProps)(TripPage);
