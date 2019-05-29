import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Welcome from './Contribution/Welcome';
import Register from './Contribution/Register';
import Login from './Contribution/Login';
import ForgotPass from './Contribution/ForgotPass';

const navigator = createSwitchNavigator({

  Welcome   : { screen : Welcome },
  
  Register  : { screen : Register },
  Login     : { screen : Login },
  ForgotPass: { screen : ForgotPass}
})

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const AppContainer = createAppContainer(navigator);