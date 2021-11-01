import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import ShoopingCartCard from '../component/ShoopingCartCard';
import ShoopingCartScreenCss from '../css/ShoopingCartScreenCss';
import ShoppingCartCardCss from '../css/ShoppingCartCardCss';

export default function ShoopingCartScreen({navigation}) {
  const [cardUserData, setcardUserData] = useState([]);

  return (
    <View style={ShoopingCartScreenCss.container}>
      <HomeHeader />
      
        <Text style={ShoopingCartScreenCss.myCarttxt}>MyCart</Text>
        <View style={ShoopingCartScreenCss.container1}>
        <ScrollView>
          <ShoopingCartCard />
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
