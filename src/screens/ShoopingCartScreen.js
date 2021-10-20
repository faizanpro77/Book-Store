import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import ShoopingCartCard from '../component/ShoopingCartCard';
import ShoopingCartScreenCss from '../css/ShoopingCartScreenCss';

export default function ShoopingCartScreen() {
  const [cardUserData, setcardUserData] = useState([]);

  useEffect(() => {
    getCardDataFromUserCollection();
  }, []);

  const getCardDataFromUserCollection = async () => {
    response = await axios.get(
      'https://restapimash-default-rtdb.firebaseio.com/users/CardItem.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
    );
    //console.log('cardDataaaaaaaa',response.data);
  };
  return (
    <View style={ShoopingCartScreenCss.container}>
      <HomeHeader />
      <Text style={ShoopingCartScreenCss.myCarttxt}>MyCart</Text>
      <View style={ShoopingCartScreenCss.container1}>
        <ShoopingCartCard/>
      </View>
    </View>
  );
}
