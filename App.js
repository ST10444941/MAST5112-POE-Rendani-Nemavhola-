/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './screens/MenuScreen'
import HomeScreen from './screens/HomeScreen'
import OrderScreen from './screens/OrderScreen'
import LoginScreen from './screens/LoginScreen'
import ManageMenu from './screens/ManageMenu';
import AddMenu from './screens/AddMenu';
import FilterMenu from './screens/FilterMenu';


const stack = createNativeStackNavigator();

export default function App() {

  console.log("App starting up");

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Login" component={LoginScreen}/>
        <stack.Screen name="Menu" component={MenuScreen}/>
        <stack.Screen name="Order" component={OrderScreen}/>
        <stack.Screen name="Management" component={ManageMenu}/>
        <stack.Screen name="Addition" component={AddMenu}/>
        <stack.Screen name="Filter" component={FilterMenu}/>
      </stack.Navigator>
    </NavigationContainer>
    
  );


};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


