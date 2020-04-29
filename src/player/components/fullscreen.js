import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

function FullScreen(props) {
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
      {props.fullScreen ? (
        <Image
          source={require('../../../assets/fullscreen_exit.png')}
          style={styles.button}
        />
      ) : (
        <Image
          source={require('../../../assets/fullscreen.png')}
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
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  },
});
export default FullScreen;
