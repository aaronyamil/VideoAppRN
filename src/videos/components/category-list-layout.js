import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function CategoryListLayout(props) {
  return (
    <ImageBackground
      source={require('../../../assets/backgronund.png')}
      style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#4C4C4C',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default CategoryListLayout;
