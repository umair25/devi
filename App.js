import React , { Component } from 'react';
import { StyleSheet, Button, View, Platform } from 'react-native';
import { Linking } from 'expo';

class App extends Component{

  onPress()
  {
    const link = Platform.select({
    ios: 'http://vrr.com',
    default: 'http://vrr.com',
  });
    Linking.openURL(link);
  }
  render () {
    return(<View style={styles.container}>
      <Button 
      title="Click Me"
      onPress={this.onPress}
      /></View>)
  }
}


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
