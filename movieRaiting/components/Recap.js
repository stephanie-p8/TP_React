import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Recap extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Id:{this.props.data.id}</Text>
                <Text style={styles.text}>Title: {this.props.data.title}</Text>
                <Text style={styles.text}>Plot:  {this.props.data.plot}</Text>
                <Text style={styles.text}>Image link:  {this.props.data.image}</Text>
                <Text style={styles.text}>Date:  {this.props.data.date} </Text>
                <Text style={styles.text}>Note:  {this.props.data.note}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e4fbfe',
      fontFamily:'Verdana',
      borderWidth: 2,
      borderRadius:3,
      borderColor:'#0068ff',
      marginTop: 55,
      paddingHorizontal: 15,
      paddingVertical:15,
      shadowOpacity:0.6,
      shadowColor:'#dff1ff',
      shadowOffset:{width:8,height:8},
      elevation: 6,
      
    },

    text:{
        fontsize: 14,
        padding:3,
        margin:3,
        textAlign:'left',
        color: '#000000'
    }
  });