import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import ShoopingCartCard from '../component/ShoopingCartCard';
import ShoopingCartScreenCss from '../css/ShoopingCartScreenCss';
import ShoppingCartCardCss from '../css/ShoppingCartCardCss';
import {BadgeCountContext} from '../screens/HomeScreen';
//import { BadgeCountContext } from  './ContextData'


export default function ShoopingCartScreen({navigation}) {

  const [cardUserData, setcardUserData] = useState([]);
  const[BadgeCountData,setBadgeCount] = useState(0)

  const handleBadgeCount = (count)=>{
      console.log('dddddddddddddddddddkkkkkkkk',count);
      setBadgeCount(count)
  }
  useEffect(()=>{
    console.log('ggggggggggggggggggggggggggggggggggggggg');

  },[])

  return (
    <View style={ShoopingCartScreenCss.container}>
      <BadgeCountContext.Provider value={BadgeCountData}>
      <HomeHeader />
      </BadgeCountContext.Provider>

      
        <Text style={ShoopingCartScreenCss.myCarttxt}>MyCart</Text>
        <View style={ShoopingCartScreenCss.container1}>
        <ScrollView>
          <ShoopingCartCard BadgeCount={handleBadgeCount} />
          </ScrollView>
        </View>
      
      <View style={ShoopingCartScreenCss.footer}>
        {/* <Text style={ShoopingCartScreenCss.TotalPrice}>5004</Text>
        <Text style={ShoopingCartScreenCss.TotalPrice1}>Total Price</Text> */}
        <TouchableOpacity
          style={ShoopingCartScreenCss.placeOrder}
          onPress={() => navigation.navigate('CustomerDetails')}>
          <Text style={ShoopingCartScreenCss.placeOrdertxt}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
