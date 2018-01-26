import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class CategoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }


    render() {
        console.log(this.props);
        var tableHead = [];
        var tableData = [
            

          //['1', '2', '3', '4'],
         // ['a', 'b', 'c', 'd'],
        ];
if(this.props.expenses.length>0){
       

        var mymap = new Map();
        for (let category of this.props.categories) {
            mymap.set(category.naam,0);
        }
       
        this.props.expenses.forEach(function(x) {
                    if(mymap.has(x.categorie)){
                        mymap.set(x.categorie,(mymap.get(x.categorie)+x.totalamount));
                    }else{}
                })
                var list=[];
                for (var [key, value] of mymap) {
                    tableHead.push([key]);
                    console.log(tableHead);
                    list.push(value);
                    console.log(tableData);
                }
                tableData.push(list);

                // if(this.props.expenses.length>0){
                //     for (var i = 0; i < this.props.expenses.length; i++) {
                //        let  xx=this.props.personenBerekend[i].naam;
                //        tableData.push([this.props.personenBerekend[i].naam,this.props.personenBerekend[i].owesamount,this.props.personenBerekend[i].paidamount,this.props.personenBerekend[i].total]);
                //        console.log(xx);
                //     }  
                // }
                   


        
        
        
        
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
      expenses: state.expenses.expenses,
      categories: state.categories.categories
    };
  }
 
  const mapDispatchToProps = (dispatch) => {
      return {
        
        }
    }
    
  export default connect(mapStateToProps, mapDispatchToProps)(CategoryTable);