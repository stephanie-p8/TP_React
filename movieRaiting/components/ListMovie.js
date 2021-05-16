import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput,TouchableOpacity, SafeAreaView } from 'react-native';
import ListMovieItems from './ListMovieItems';

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

const getMovieByTitle = async (m) => {
    const response = await fetch(`http://www.omdbapi.com/?t=${m}&plot=full&apikey=ea178c90`);
    const results = await response.json();

    return formatResponse(results);
} 

const getMovies = async () =>{
    let listMovie = [
        "Titanic",
        "Back to the future",
        "Avatar",
        "The Lion King",
        "Big Mama",
    ]; 

    let list = [];

    for(let lm of listMovie){
        var movie = await getMovieByTitle(lm);
        list = [...list,movie];
    }

    return list;
}

const ListMovie = ({listMovie,navigation}) =>{

    const [movieList,setMovieList] = useState([]);
    const [input, setInput] = useState("");
    const [listResults, setListResults] = useState([]);

    const searchMovies = async (query) => {
        if (query == "") return;
        const response = await fetch(
            `http://www.omdbapi.com/?t=${query}&plot=full&apikey=ea178c90`
          );
          const results  = await response.json();
          var tab = [];
          for(let i=0;i<movieList.length;i++){
            if(formatResponse(results).title==movieList[i].title){
                tab.push(formatResponse(results));
            }
          }
          return tab;
    }; 

    const handleSubmit = () => {
        searchMovies(input).then((result) => {
          setListResults(result);
        });
      };

    useEffect(() => {
        if(input==""){
            getMovies().then(res => setMovieList(res))
            
            
        }
        
        const timeout = setTimeout(handleSubmit, 1000);
        return () => {
            clearTimeout(timeout);
          };

    },[input]);

    listMovie = movieList;
    console.log(movieList)

    if(input==""){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Movie list</Text>
                <TextInput
                    style = {styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Search movies"
                />
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data = {listMovie}
                        renderItem = {({item}) => <ListMovieItems navigation={navigation} item={item}/>}
                        keyExtractor={(item) => item.id}
                    />
                </SafeAreaView>
            </View>
        )
    }
    else{
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Movie list</Text>
                <TextInput
                    style = {styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Search movies"
                />
                
                <FlatList
                    data={listResults}
                    renderItem={({ item }) => (
                        <ListMovieItems navigation={navigation} item={item} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )

    }
    
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       
    },
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

export default ListMovie;
