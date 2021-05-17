import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

const MovieItemDetails = ({route}) =>{
    const {props} = route.params;
    return(
        <View style={styles.container}>
            <ScrollView style={{paddingLeft: 10,flex:1}}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: props.img}}/>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.date}>{props.date}</Text>
                    <Text style={styles.details}>Genre: {props.genre}</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>Plot: {props.resume}</Text>
                    </View>
                    <Text style={styles.note}>Note : {props.note}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex:1, alignItems:'center', justifyContent:'center',marginTop:15},
    imageContainer:{justifyContent:'center',alignContent:'center', flexDirection:'row',marginTop:15},
    image: { width: 240, height: 380, margin: 10, borderRadius: 3},
    info: { justifyContent: "center", alignItems:'center' },
    title: { fontSize: 20, fontWeight:'bold' },
    date:{ fontSize:16},
    detailsContainer:{width:400},
    details: { color: "gray", padding:3, fontSize:14 },
    note: {fontSize:18, fontWeight:'bold', padding:5}
});

export default MovieItemDetails;