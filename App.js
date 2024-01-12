import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnlineShop from './src/screens/onlineShop';
import Cart from './src/screens/Cart';
import payment from './src/screens/payment'

const Stack=createStackNavigator()

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen 
  options={{
    title: 'Azey Shop'
  }}
  name='OnlineShop' component={OnlineShop}/>
    <Stack.Screen name='Cart' component={Cart}/>
    
    <Stack.Screen name='Payment' component={payment}/>
  </Stack.Navigator>
</NavigationContainer>
  );
}

