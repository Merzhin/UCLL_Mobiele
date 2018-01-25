import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class ExpenseTable extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }


    render() {
        console.log(this.props);
        const tableHead = ['Naam', 'Owes', 'Paid', 'Total'];
        var tableData = [
            

          //['1', '2', '3', '4'],
         // ['a', 'b', 'c', 'd'],
        ];
if(this.props.personenBerekend.length>0){
        for (var i = 0; i < this.props.personenBerekend.length; i++) {
           let  x=this.props.personenBerekend[i].naam;
           tableData.push([this.props.personenBerekend[i].naam,this.props.personenBerekend[i].owesamount,this.props.personenBerekend[i].paidamount,this.props.personenBerekend[i].total]);
           console.log(x);
        }  
        
        console.log(tableData);
      return (
<View>
<Table>
          <Row data={tableHead} />
          <Rows data={tableData} />
        </Table>

</View>
      )
    }else{return null;}
    }
}
const mapStateToProps = (state) => {
    return {
      
    };
  }
 
  const mapDispatchToProps = (dispatch) => {
      return {
        
        }
    }
    
  export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);