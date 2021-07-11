import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttons} onPress={()=>{
              this.props.Navigation.navigate("HoroscopeScreen")
            }}>
              <Text>Horoscope</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
