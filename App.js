import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home'
import Month from './Screens/Month'
import Year from './Screens/Year'
import 'react-native-gesture-handler';

export default function App() {

  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerType="front"
        screenOptions={{headerShown:false}}
      >
        <Drawer.Screen
          name = "Home" component={Home}/>
        <Drawer.Screen
          name = "Month" component={Month}/>
        <Drawer.Screen
          name = "Year" component={Year}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
