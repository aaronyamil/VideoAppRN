import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

function PlayPause(props) {
  return (
    <TouchableHighlight
      underlayColor="red"
      onPress={props.onPress}
      style={styles.container}
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}>
      {props.paused ? (
        <Image
          source={require('../../../assets/play.png')}
          style={styles.button}
        />
      ) : (
        <Image
          source={require('../../../assets/pause.png')}
          style={styles.button}
        />
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 28,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  },
});
export default PlayPause;
