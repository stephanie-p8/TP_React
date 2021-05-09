import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

const Form = ({onAdd}) => {

    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [plot, setPlot] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    const [genre, setGenre] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = () => {
        var data = {
            id: id,
            title: title,
            plot: plot,
            image: image,
            genre: genre,
            date: date,
            note: note
        }

        return data;
    }

    const item =  {
        id: id,
        title: title,
        plot: plot,
        image: image,
        genre: genre,
        date: date,
        note: note
    }

    useEffect(() =>{
        if (id!=null && title!='' & plot!='' && image!='' && date!='' && note!='') {
            setIsValid(true)
        }
        else {
            setIsValid(false)
        }
    },[isValid])


    return (
        <View style={{flex:1}}>
            <Text style={styles.header}>Add a new movie</Text>
            <ScrollView style={{marginLeft: 150}}>
                <Text style={styles.label}>Movie id</Text>
                <TextInput
                    style={styles.input}
                    value={id}
                    onChangeText={(text)=>setId(text)}
                    placeholder="Movie id"
                    keyboardType="numeric"
                />
                <Text style={styles.label}>Movie Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={(text) =>setTitle(text)}
                    placeholder="Movie Title"
                />
                <Text style={styles.label}>Plot</Text>
                <TextInput
                    style={styles.input}
                    value={plot}
                    multiline={true}
                    numberOfLines={30}
                    onChangeText={(text)=>setPlot(text)}
                    placeholder="Movie plot"
                />
                <Text style={styles.label}>Movie genre</Text>
                <TextInput
                    style={styles.input}
                    value={genre}
                    onChangeText={(text) =>setGenre(text)}
                    placeholder="Movie genre"
                />
                <Text style={styles.label}>Image link</Text>
                <TextInput
                    style={styles.input}
                    value={image}
                    onChangeText={(text)=>setImage(text)}
                    placeholder="Movie poster"
                />
                <Text style={styles.label}>Date</Text>
                <TextInput
                    style={styles.input}
                    value={date}
                    placeholder={"06 Jan 2017"}
                    onChangeText={(text)=>setDate(text)}
                />
                <Text style={styles.label}>Note</Text>
                <TextInput
                    style={styles.input}
                    value={note}
                    onChangeText={(text)=>setNote(text)}
                    placeholder="Movie note"
                    keyboardType='decimal-pad'
                />
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title='Submit'
                    onPress={()=>{onAdd(item)}}/>
                       
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Verdana',
    },

    header: {
        fontSize: 30,
        backgroundColor: "deepskyblue",
        color: "white",
        padding: 10,
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 3,
        paddingVertical: 3,
        marginLeft: 2,
        marginTop: 3,
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    input: {
        padding: 5,
        margin: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderColor: 'black',
        minWidth: 250,
        width: 300,
        marginTop: 10,
        marginHorizontal: 5,
        borderRadius: 3,
        borderWidth: 1

    },

    buttonContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        marginVertical: 15,
    },

    button: {
        backgroundColor: '#0068ff',
        paddingHorizontal: 15,
        paddingVertical:5,
        marginTop: 5,
        borderRadius:2,
    },
    buttonLabel:{
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center'
    }
});

export default Form;