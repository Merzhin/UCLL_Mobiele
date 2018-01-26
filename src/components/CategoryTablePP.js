import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class CategoryTablePP extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }


    render() {
        console.log(this.props);
        var tableHead = [['#'],];
       
        var tableData = [
            ['',''],
      

          //['1', '2', '3', '4'],
         // ['a', 'b', 'c', 'd'],
        ];
if(this.props.expenses.length>0){
       
    var list=[];
   var listMap=[];
     //   var mymap = new Map();
        
        for (let category of this.props.categories) {
           tableHead.push(category.naam);
          list.push(category.naam);
          r= new Map();
          listMap.push(r);
         
        }
     

        this.props.expenses.forEach(function(x) {
        for(var i=0;i<list.length;i++){
            if(list[i]==x.categorie){
                console.log(list[i]);
                x.personenBerekend.forEach(function(y) {
                    console.log(listMap[i].keys);
                    if(listMap[i].has(y.naam)){
                listMap[i].set(y.naam,listMap[i].get(y.naam)+y.owesamount);
                console.log(listMap[i].get(y.naam));
                    }else{
                        listMap[i].set(y.naam,y.owesamount);
                        console.log(listMap[i].get(y.naam));
                    }
                })
            }
        }
    })
            
    // for(var i=0;i<listMap.length;i++){
    //     for(var j=0;j<listMap.length;j++){
    //     var li=[];
    //   //  li[i]=
    //     }
    // }


//     for(var i=0;i<this.props.personen.length;i++){
//         var list=[];
//         list[i]=this.props.personen[i].naam;
//         tableData[i]=list[i];
//             // tableData.push([this.props.personen[i].naam]);
             
//     }
//     for(var i=0;i<listMap.length;i++){
//         console.log(listMap[i]);
//         for(var j=0;j<this.props.personen.length;j++){
//         //     console.log(listMap[i].get(this.props.personen[j].naam));
//         //     console.log(tableData[j][0]);
//         //   console.log(listMap[i].entries());
//         //   console.log(listMap[i].entries()[0]);
//         //   console.log(Object.entries(listMap)[j][0]);
//         //   console.log(Object.entries(listMap[j])[i]);
//       if(  tableData[j][0]==this.props.personen[j].naam){
//        // for(var jj=j;jj<this.props.personen.length;j++){
//        if(listMap[i].get(this.props.personen[j].naam)!=undefined){
//             tableData[j][i+1]=listMap[i].get(this.props.personen[j].naam);
//        // }
//     }}
//      //  if(  tableData[j][0]==listMap[i].entries()[j][0]){
//        // console.log("y");rr
//       //}
//     }
// }


for(var i=0;i<this.props.personen.length;i++){
    var list = [this.props.personen[i].naam]
   
   

var list2=[];
list2[0]= [this.props.personen[i].naam];
for(var ii=0;ii<this.props.categories.length;ii++){
    list2[ii+1]=0;
for (var [key, value] of listMap[ii]) {
if([key]==this.props.personen[i].naam){
    list2[ii+1]=[value];

}else{
    list2[ii+1]=[0];
}
    


  //  if(key==this.props.personen[j].naam){
        
  //  tableData.push(value);
   
    }
    //list.push(list2);

    }
    //list.push(list2);
    tableData[i+1]=list2;

   
    // console.log(key);
    // console.log(value);
    // console.log(tableData[j][0]);
    // console.log(tableData[j][1]);
    // console.log(tableData[j]);
    // console.log(tableData[0]);
    // console.log(tableData[1]);
    // list.push(value);
    // console.log(tableData);
}






// var list1=[];
// var list2=[];
// var keylijst=[];
// var mapke=new Map();
// for(var i=0;i<this.props.categories.length;i++){
// mapke=listMap[i];
// keylijst=mapke.keys();
// keylijst.value
// console.log(keylijst[0]);
// console.log(keylijst[1]);
// console.log(keylijst);
// list1=listMap[i].entries();
// list2.push(list1);
// console.log(listMap);
// console.log(listMap[i]);
// console.log(listMap[i].entries()[0]);
// console.log(listMap[i].entries()[1]);
// console.log(listMap[i].entries());
// console.log(list1);
// console.log(list2);
// }


                // for (var [key, value] of mymap) {
                //     tableHead.push([key]);
                //     console.log(tableHead);
                //     list.push(value);
                //     console.log(tableData);
                // }
                
            
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
      categories: state.categories.categories,
      personen: state.personen.personen
    };
  }
 
  const mapDispatchToProps = (dispatch) => {
      return {
        
        }
    }
    
  export default connect(mapStateToProps, mapDispatchToProps)(CategoryTablePP);