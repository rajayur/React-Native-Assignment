import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './dashboard.screen.style';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.data);
    this.state = {
      message: '',
      data: this.props.data.user,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.employeeLabel}>Employee List</Text>
        <FlatList
          keyboardShouldPersistTaps="always"
          refreshing={true}
          keyExtractor={(item) => String(item.id)}
          data={this.state.data}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.header}>Name: {item.name}</Text>
              <View style={styles.itemDetail}>
                <Text style={styles.label}>Age: {item.age} Years</Text>
                <Text style={styles.label}>Gender: {item.gender}</Text>
              </View>
              <Text style={styles.label}>Email: {item.email}</Text>
              <Text style={styles.label}>Phone: {item.phoneNo}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {})(DashBoard);
