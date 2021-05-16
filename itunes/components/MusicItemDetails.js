import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MusicItemDetails = ({ route,onAdd,item }) => {
  const {props} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.artwork }} />
      </View>  
      <View style={styles.info}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.details}>{props.artist}</Text>
        <Text style={styles.details}>{props.genre}</Text>
        <Text style={styles.details}>{props.year}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
            onPress={() =>{onAdd(item)}}
        >
            <Text style={styles.buttonLabel}>Add to List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems:'center', justifyContent:'center' },
  imageContainer:{justifyContent:'center',alignContent:'center', flexDirection:'row'},
  image: { width: 250, height: 350, margin: 3, borderRadius: 3, resizeMode:'contain'},
  info: {justifyContent: "center", alignItems:'center' },
  title: { fontSize: 20 },
  details: { color: "gray", fontSize:16 },
  buttonContainer:{marginVertical:10, flexDirection:'row'},
  button: {padding:10,backgroundColor:"tomato",borderRadius:3},
  buttonLabel:{fontWeight:'bold',color:'white',fontSize:20}
});

export default MusicItemDetails;
