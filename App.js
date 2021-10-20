import React from 'react';
import {Text, View} from 'react-native';
//import HomeScreen from './src/screens/HomeScreen';
//import ShoopingCartScreen from './src/screens/ShoopingCartScreen';
//import ShoopingCartCard from './src/component/ShoopingCartCard';
import StackNavigation from './src/navigation/StackNavigation';
//import CustomerDetailsScreen from './src/screens/CustomerDetailsScreen';

const App = () => {
  console.log('faaizannnnnnnnnnnnnnn');
  return (
    <View style={{height:'100%',width:'100%'}}>
      {/* <HomeScreen/> */}
      {/* <ShoopingCartScreen/> */}
      <StackNavigation/>
      {/* <CustomerDetailsScreen/> */}
    </View>
  );
};

export default App;

//badges
