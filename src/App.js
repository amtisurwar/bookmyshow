import React, { Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';
import Movies from './Movies';

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return (
      <Movies navigator={navigator} />
    );
  } else if (route.name === 'confirmation') {
    return (
      <Confirmation code={route.code} navigator={navigator} />
    );
  }
};

class App extends Component {
  render() {
    return (
      <View>
      <Movies />
      </View>
    )
  }
}

export default App;