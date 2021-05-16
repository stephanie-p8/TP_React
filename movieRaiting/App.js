import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListMovie from './components/ListMovie'
import Form from './components/form';
import SearchMovie from './components/SearchMovie';
import MovieListNavigation from './components/Navigation';
import { useState } from 'react';

const Tabs = createBottomTabNavigator();

const App = () => {

  const [movieList, setMovieList] = useState([]);
  

  const addItem = (item) => {
    setMovieList((prev) => [...prev, item]);
  };
  
    return (
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case "List of movies":
                  iconName = focused ? "film" : "film-outline";
                  break;
                case "Add movie":
                  iconName = focused ? "add-circle" : "add-circle-outline";
                  break;
                case "Search":
                  iconName = focused ? "search" : "search-outline";
                  break;
                default:
                  iconName = "ban";
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{ activeTintColor: "deepskyblue", inactiveTintColor: "gray" }}
        >

          <Tabs.Screen name="List of movies" component={MovieListNavigation} listMovie={movieList} options={{tabBarBadge:movieList.length>0?movieList.length+5:5}}/>
          <Tabs.Screen name="Add movie">
            {(props) => <Form {...props} onAdd={addItem} />}
          </Tabs.Screen>
          <Tabs.Screen name="Search">
            {(props) => <SearchMovie {...props} />}
          </Tabs.Screen>
        </Tabs.Navigator>
      </NavigationContainer>
    );
  
};

export default App;
