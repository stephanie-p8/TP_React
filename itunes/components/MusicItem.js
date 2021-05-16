import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MusicItem = ({ item, navigation,onAdd }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={()=>{
        navigation.navigate("MusicItemDetails",{props:item,item:item,onAdd:onAdd})
      }}
    >
      <Image style={styles.image} source={{ uri: item.artwork }} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { width: 50, height: 50, margin: 5, borderRadius: 50 },
  info: { flex: 1, justifyContent: "center" },
  title: { fontSize: 20 },
  details: { color: "gray" },
});

export default MusicItem;
