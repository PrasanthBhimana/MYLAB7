import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeScreen';
import ImagePickerScreen from './ImagePickerScreen'; // Import your ImagePickerScreen
import LocationScreen from './LocationScreen'; // Import your LocationScreen
import LogoutScreen from './LogoutScreen'; // Import your LogoutScreen

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="HomeScreen" component={Home} />
        <Drawer.Screen name="Image Picker" component={ImagePickerScreen} />
        <Drawer.Screen name="Location" component={LocationScreen} />
        <Drawer.Screen name="Logout" component={LogoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
