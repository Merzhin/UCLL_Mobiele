import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';


export class UserList extends Component {
    
    render() {
        return (
            <View> 
                <Text>A list of all the users: </Text>
                <FlatList
                data={this.props.users}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.firstName} {item.lastName}</Text>                        
                    </View>
                )}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      users: state.users.users
    };
  };

  export default connect(mapStateToProps)(UserList);
