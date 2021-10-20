import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ShoopingCartScreen from '../screens/ShoopingCartScreen';
import CustomerDetailsScreen from '../screens/CustomerDetailsScreen';
import orderScreen from '../screens/orderScreen';
//import HomeHeader from '../component/HomeHeader';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CartScreen" component={ShoopingCartScreen} />
        <Stack.Screen name='CustomerDetails' component={CustomerDetailsScreen}/>
        <Stack.Screen name='orderScreen' component={orderScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
