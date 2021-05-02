import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../stylesheet/styles';

export default class Inputs extends React.Component{
    render(){
        return(
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>{this.props.title}</Text>
                <TextInput
                    defaultValue={this.props.defaultValue}
                    maxLength={this.props.maxLength}
                    style={styles.inputTime}
                    keyboardType={this.props.keyboardType}
                    onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
}