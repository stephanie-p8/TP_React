import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ListMovie from './ListMovie';
import ListMovieItems from './ListMovieItems';
import MovieItemDetails from './MovieItemDetails';

const Stack = createStackNavigator();

const MovieListNavigation = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
          }}
          >
            <Stack.Screen 
                name="List of movies" 
                component={ListMovie} 
            />
            <Stack.Screen 
                name="ListMovieItems" 
                component={ListMovieItems} 
                initialParams={{id:'no id',img:'no image',title:'no title',date:'no date',genre:'no genre',resume:'no resume',note:'no note'}}
            />
            <Stack.Screen 
                name="MovieItemDetails" 
                component={MovieItemDetails} 
                initialParams={{id:'no id',img:'no image',title:'no title',date:'no date',genre:'no genre',resume:'no resume',note:'no note'}}
            />
        </Stack.Navigator>
    )
}

export default MovieListNavigation;