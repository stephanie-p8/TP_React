import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import ListMovieItems from "./ListMovieItems";

const formatResponse = (item) => {
    return {
      id: item.imdbID.toString(),
      title: item.Title,
      resume: item.Plot,
      img: item.Poster,
      genre: item.Genre,
      date: item.Released,
      note: item.imdbRating,
    };
};

const searchMovies = async (query) => {
  if (query == "") return;
  const response = await fetch(
    `http://www.omdbapi.com/?t=${query}&apikey=ea178c90`
  );
  const results  = await response.json();
  var tab = [];
  tab.push(formatResponse(results));
  return tab;
};

const SearchMovie = () => {
  const [input, setInput] = useState("");
  const [listResults, setListResults] = useState([]);

  const handleSubmit = () => {
    
    searchMovies(input).then((result) => {
      setListResults(result);
    });
  };

  useEffect(() => {
    const timeout = setTimeout(handleSubmit, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return (
    <View>
      <Text style={styles.header}>Search movie</Text>
      <TextInput
        style = {styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Search movies"
      />
      <FlatList
        data={listResults}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListMovieItems item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    backgroundColor: "deepskyblue",
    color: "white",
    padding: 10,
  },
  input:{
    borderWidth:1,
    padding:3
  }
});

export default SearchMovie;
