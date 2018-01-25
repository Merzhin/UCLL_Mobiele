import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import Currency from '../components/Currency';


export class MoneyTransferList extends Component {

    render() {
        return (
            <View> 
                <Text>A list of all the money transfers: </Text>
                <FlatList
                data={this.props.transfers}
                renderItem={({ item }) => (
                    <View>
                         <Currency base={item.currency} amount={item.amount}  /> 
                        
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
