import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from '../stylesheet/styles';

export default class Count extends React.Component
{
  render() {
    return (
      <View>
        <Text style={[styles.timer,{color:this.props.color}]}>{this.props.count}</Text>
        <Text>{this.state}</Text>
      </View>
    )
  }
}