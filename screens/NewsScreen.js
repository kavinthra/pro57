import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HoroscopeScreen extends React.Component{
  render(){
    return(
  
          <View style={styles.container}>
              <Text>Horoscope</Text>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 50,
  }
});
