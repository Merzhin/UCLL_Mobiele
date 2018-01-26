import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { Text, TouchableHighlight, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { updateCurrency } from '../redux/actions/currencies';

class CurrencyOverride extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            overrideModalVisibility: false,
        }

    }
    createConversionRateOverride() {
        var arrayOfRates = [];
        console.log("props override");
        console.log(this.props);
        if (this.props.rates) 
        {
            arrayOfRates = Object.entries(this.props.rates);
        }
        console.log(arrayOfRates);
        return arrayOfRates.map((item) =>
        

        (                   
            (
                <View key={item[0]}>
                    <Text>
                        {item[0]}
                    </Text>
                    <TextInput 
                    keyboardType='numeric'
                    onChangeText={(text) => (this.props.rates[item[0]] = text)} 
                    placeholder={String(this.props.rates[item[0]])} 
                    />
                </View>
            )             
        ));
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => { this.setState({overrideModalVisibility: true }); }}>
                    <View style={styles.button}>
                        <Text>Override in memory Rates</Text>
                    </View>
                </TouchableHighlight>
                <Modal isVisible={this.state.overrideModalVisibility}>
                    <View style={styles.modalContent}>
                    <ScrollView>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>Change the values to override the in memory currency value for {this.props.base}.</Text>
                        <TouchableHighlight onPress={() => { this.props.updateCurrency(this.props.base, this.props.rates); this.setState({overrideModalVisibility: false})  }}>
                            <View style={styles.button}>
                                <Text>Override Rates</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { this.setState({ overrideModalVisibility: false }); }}>
                            <View style={styles.button}>
                                <Text>Cancel</Text>
                            </View>
                        </TouchableHighlight>
                        <View>
                            {this.createConversionRateOverride()}
                        </View>
                    </ScrollView>
                    </View>
                </Modal>
            </View>


        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrency: (base, rates) => { dispatch(updateCurrency(base, rates)); }
    };
};


export default connect(null, mapDispatchToProps)(CurrencyOverride);

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