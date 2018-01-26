import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { selectCurrency, convertCurrency } from '../redux/actions/currencies';
import CurrencyOverride from './CurrencyOverride';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '1',
            rates: {},
            modalVisibility: false,

        }
    }
 getRates() {
    NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                fetch('https://api.fixer.io/latest?base=' + this.props.base, {method: 'GET' })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({ rates: responseData.rates });
                })
                .done();  
            } 
        });
    }

    getRatesInMemory() {
        this.props.selectCurrency(this.props.base); 
        if (this.props.selectedCurrency) {
            this.setState({rates: this.props.selectedCurrency.rates});
        }
    }

    createConversionRateList() {
        var arrayOfRates = []; 
        arrayOfRates = Object.entries(this.state.rates);
        
        return arrayOfRates.map((item) =>
        (
            <Text key={item[0]}>{item[0]} : {item[1] * this.props.amount }</Text>
        ));
    }

    render() {        
        
        
        return (
            <View>
                    <TouchableHighlight onPress={() => { this.props.convertCurrency("USD","EUR"); this.getRatesInMemory(); this.getRates(); this.setState({ modalVisibility: true }); }}>
                        <Text>{this.props.amount} {this.props.base} </Text>
                    </TouchableHighlight>

                    <Modal isVisible={this.state.modalVisibility}>
                        <ScrollView>
                            <View style={styles.modalContent}>
                                <Text style={{ fontSize: 20, marginBottom: 10 }}>Currency conversion! {this.props.convertedCurrency}</Text>  
                                <TouchableHighlight onPress={() => { this.setState({ modalVisibility: false }); }}>
                                    <View style={styles.button}>
                                        <Text>Close</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => { this.getRatesInMemory(); }}>
                                    <View style={styles.button}>
                                        <Text>Use in memory rates</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => { this.getRates();  }}>
                                    <View style={styles.button}>
                                        <Text>Use online rates</Text>
                                    </View>
                                </TouchableHighlight>
                                <CurrencyOverride rates={this.state.rates} base={this.props.base}/>
                                <View style={styles.list}>
                                    
                                    {
                                        this.createConversionRateList()
                                    }
                                </View>
                            </View>
                        </ScrollView>
                    </Modal>
                    
            </View>
        );
    }
}


const mapStateToProps = (state) => 
{
    console.log("State in MSTP");
    console.log(state);
    return { 
        selectedCurrency: state.selectedCurrency,
        convertedCurrency: state.convertedCurrency
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCurrency: (base) => { dispatch(selectCurrency(base)); },
        convertCurrency: (base, target) => {dispatch(convertCurrency(base, target));}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        button: {
          backgroundColor: 'lightblue',
          padding: 12,
          margin: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
        modalContent: {
          backgroundColor: 'white',
          padding: 22,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
        list: {
            
        }
});
