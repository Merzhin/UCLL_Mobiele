import React, { Component } from 'react';
import { List, Map } from 'immutable';
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  SectionList,
  FlatList,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class Currency extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Text>name  {this.props.name}  rate {this.props.rate}</Text>
        );
    }
   
   }


export default class Currencies extends Component {
  render() {
   
  
    return (
      <View>
<Currency name='Euro'  rate={1} />
<Currency name='USD'  rate={0.986} />
<Currency name='GBP'  rate={1.023} />
          </View>
      
    );
  }
}
 
const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 }
})

Currency.propTypes = {
    name: PropTypes.string,
    rate: PropTypes.number
  };
