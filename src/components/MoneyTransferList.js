import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';


export class MoneyTransferList extends Component {

    render() {
        return (
            <View> 
                <Text>A list of all the money transfers: </Text>
                <FlatList
                data={this.props.transfers}
                renderItem={({ item }) => (
                    <View>
                        <Text> {item.name} paid {item.amount}{item.currency} </Text>
                    </View>
                )}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    
      transfers: state.moneyTransfers.transfers
    };
  };

  export default connect(mapStateToProps)(MoneyTransferList);
