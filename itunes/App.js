import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LibraryView from "./components/Library/LibraryView";
import SearchView from "./components/Search/SearchView";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react/cjs/react.development";
import MusicNavigation from "./components/Navigation/MusicNavigation";

const Tabs = createBottomTabNavigator();

const App = () => {
  const [libraryList, setLibraryList] = useState([]);

  const addItem = (item) => {
    setLibraryList((prev) => [...prev, item]);
  };
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Library":
                iconName = focused ? "library" : "library-outline";
                break;
              case "Search":
                iconName = focused ? "musical-notes" : "musical-notes-outline";
                break;
              default:
                iconName = "ban";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
      >
        <Tabs.Screen name="Search" component={MusicNavigation} onAdd={addItem}/>
        <Tabs.Screen name="Library" options={{ tabBarBadge: libraryList.length>0 ? libraryList.length : null }}>
          {(props)=><LibraryView {...props} libraryList={libraryList}  />}
        </Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
