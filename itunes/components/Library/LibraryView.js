import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import MusicItem from "../MusicItem";

const LibraryView = ({ libraryList }) => {
  return (
    <View style={{flex:1}}>
      <Text style={styles.header}>LibraryView</Text>
      <ScrollView style={{flex:1}}>
        <FlatList
          data={libraryList}
          renderItem={({ item }) => <MusicItem item={item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled = {true}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    backgroundColor: "tomato",
    color: "white",
    padding: 10,
  },
});

export default LibraryView;
