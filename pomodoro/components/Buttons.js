import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../stylesheet/styles';

export default class Buttons extends React.Component{
    render(){
        return(
            <TouchableOpacity
                style={this.props.btnStyle}
                onPress={this.props.onPress}>
                <Text style={this.props.btnLabelStyle}>
                {this.props.label}
                </Text>
            </TouchableOpacity>
            
        );
    }
}