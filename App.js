import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnlineShop from './src/screens/onlineShop';
import Cart from './src/screens/Cart';
import Payment from './src/screens/payment';
import Commerce from './src/screens/Commerce';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            title: 'Azey Shop'
          }}
          name='OnlineShop' 
          component={OnlineShop}
        />
        <Stack.Screen 
          name='Commerce' 
          component={Commerce}
          options={{ title: 'Products' }}
        />
        <Stack.Screen 
          name='Cart' 
          component={Cart}
          options={{ title: 'Shopping Cart' }}
        />
        <Stack.Screen 
          name='Payment' 
          component={Payment}
          options={{ title: 'Payment' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

