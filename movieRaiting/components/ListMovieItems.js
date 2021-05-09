import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import MovieItemDetails from './MovieItemDetails';

const ListMovieItems = ({item}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={(props) => {
            return <MovieItemDetails  {...props} item={item}/>;
          }}>
            <Image style={styles.image} source={{uri: item.img}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.details}>{item.genre}</Text>
                <Text style={styles.details}>Plot: {item.resume}</Text>
                <Text style={styles.note}>Note : {item.note}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: "row"},
    image: { width: 120, height: 180, margin: 10, borderRadius: 3 },
    info: { flex: 3, justifyContent: "center" },
    title: { fontSize: 20, fontWeight:'bold' },
    date:{ fontsize:16},
    details: { color: "gray", padding:2, fontSize:14 },
    note: {fontsize:18, fontWeight:'bold', padding:3}
});

export default ListMovieItems;