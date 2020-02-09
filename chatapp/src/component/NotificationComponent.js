import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default class NotificationComponent extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>NotificationScreen</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
