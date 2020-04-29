import React, {Component} from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ProgressBar extends Component {
  styleProgressBar = () => {
    return {
      backgroundColor: '#FFF',
      width: (this.props.currentTime * 100) / this.props.duration + '%',
      borderWidth: 0,
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.progressBar}>
          <View style={this.styleProgressBar()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
  },
  bar: {},
  progressBar: {
    height: 25,
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
export default ProgressBar;
