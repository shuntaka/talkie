import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="home" size={30} color={tintColor} />;
    }
  };

  render() {
    return (
      <View>
        <Text>hi exhibition</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
