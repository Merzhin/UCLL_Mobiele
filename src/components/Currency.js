import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { selectCurrency } from '../redux/actions/currencies';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '1',
            rates: {},
            modalVisibility: false,
            overrideModalVisibility: false,
            useInMemoryRates: false

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
            } else {
                this.setState({useInMemoryRates: true});
            }
        });
    }

    createConversionRateList() {
        var arrayOfRates = [];
        if (this.state.useInMemoryRates) {
            if (this.props.selectedCurrency) {
                arrayOfRates = Object.entries(this.props.selectedCurrency.rates);
            }
        } else {
            arrayOfRates = Object.entries(this.state.rates);
        }
        return arrayOfRates.map((item) =>
        (
            <Text>{item[0]} : {item[1] * this.props.amount }</Text>
        ));
    }

    createConversionRateOverride() {
        var arrayOfRates = [];
        if (this.state.useInMemoryRates) {
            if (this.props.selectedCurrency) {
                arrayOfRates = Object.entries(this.props.selectedCurrency.rates);
            }
        } else {
            arrayOfRates = Object.entries(this.state.rates);
        }
        return arrayOfRates.map((item) =>
        (
            <View>
                <TextInput 
                        onChangeText={(text) => this.setState({ USDtemp: text })} 
                        value={this.state.rates} 
                        placeholder={String(this.state.rates.USD)} 
                        />
                <Text>{item[0]} : {item[1] * this.props.amount }</Text>
            </View>
        ));
        return (
            <View>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Change the values to override</Text>
                
                <TextInput 
                    onChangeText={(text) => this.setState({ EURtemp: text })} 
                    value={this.state.rates.EUR} 
                    placeholder={String(this.state.rates.EUR)} 
                />
                <TextInput 
                    onChangeText={(text) => this.setState({ GBPtemp: text })} 
                    value={this.state.rates.GBP} 
                    placeholder={String(this.state.rates.GBP)} 
                />
                <TextInput 
                    onChangeText={(text) => this.setState({ JPYtemp: text })} 
                    value={this.state.rates.JPY} 
                    placeholder={String(this.state.rates.JPY)} 
                />
                
            </View>
        );
    }
    render() {        
        
        
        return (
            <View>
                    <TouchableHighlight onPress={() => { this.props.selectCurrency(this.props.base); this.getRates(); this.setState({ modalVisibility: true }); }}>
                        <Text>{this.props.amount} {this.props.base} </Text>
                    </TouchableHighlight>

                    <Modal isVisible={this.state.modalVisibility}>
                        <ScrollView>
                            <View style={styles.modalContent}>
                                <Text style={{ fontSize: 20, marginBottom: 10 }}>Currency conversion!</Text>  
                                <TouchableHighlight onPress={() => { this.setState({ modalVisibility: false }); }}>
                                    <View style={styles.button}>
                                        <Text>Close</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => { this.setState({useInMemoryRates: true });  }}>
                                    <View style={styles.button}>
                                        <Text>Use in memory rates</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => { this.setState({useInMemoryRates: false });  }}>
                                    <View style={styles.button}>
                                        <Text>Use online rates</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => { this.setState({overrideModalVisibility: true }); }}>
                                    <View>
                                        <View style={styles.button}>
                                            <Text>Override Rates</Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                                <View style={styles.list}>
                                    
                                    {
                                        this.createConversionRateList()
                                    }
                                </View>
                                <Modal isVisible={this.state.overrideModalVisibility}>
                                    <View style={styles.modalContent}>
                                        {this.createConversionRateOverride()}
                                        <TouchableHighlight onPress={() => { this.setState({ overrideModalVisibility: false }); }}>
                                            <View style={styles.button}>
                                                <Text>Close</Text>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </Modal>
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
        selectedCurrency: state.selectedCurrency
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCurrency: (base) => { dispatch(selectCurrency(base)); }
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
