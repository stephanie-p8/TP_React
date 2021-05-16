import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SearchView from '../Search/SearchView';
import MusicItem from '../MusicItem';
import MusicItemDetails from '../MusicItemDetails';

const Stack = createStackNavigator();

const MusicNavigation = ({onAdd}) => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
          }}
          >
            <Stack.Screen 
                name="Search" 
                component={SearchView} 
            />
            <Stack.Screen 
                name="MusicItem" 
                component={MusicItem} 
                onAdd={onAdd}
                //initialParams={{id:'no id',img:'no image',title:'no title',date:'no date',genre:'no genre',resume:'no resume',note:'no note'}}
            />
            <Stack.Screen 
                name="MusicItemDetails" 
                component={MusicItemDetails} 
                onAdd={onAdd}
                //initialParams={{id:'no id',img:'no image',title:'no title',date:'no date',genre:'no genre',resume:'no resume',note:'no note'}}
            />
        </Stack.Navigator>
    )
}

export default MusicNavigation;