import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../stylesheet/styles';


export default class Logo extends React.Component
{
    render(){
        return(
            <View>
                <Image style={styles.logo} source={this.props.source}/>
            </View>
        )
    }
}