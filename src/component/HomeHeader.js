import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HomeHeaderCss from '../css/HomeHeaderCss';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
//import  Icon  from "react-native-vector-icons/icon";
import {useNavigation} from '@react-navigation/native';
import {Badge} from 'react-native-elements';
import axios from 'axios';

const HomeHeader = () => {
  const [badgeArr, setBadgeArray] = useState([]);
  const navigation = useNavigation();

  useEffect( () => {
    //getCardData();
  }, []);


  const getCardData = async () => {
    let ShoopingCartDataResponse = await axios.get(
      'https://restapimash-default-rtdb.firebaseio.com/users/CardItem.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
    );
    setBadgeArray(ShoopingCartDataResponse.data);
    let arrdata =[ShoopingCartDataResponse.data]
    console.log('lengthhhhhhhhhhhhhhh888', arrdata.length);
  };
  console.log('lengthhhhhhhhhhhhhhh', badgeArr.length);
  return (
    <View style={HomeHeaderCss.container1}>
      <View style={HomeHeaderCss.container2}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={HomeHeaderCss.bookicone}>
            <IconEntypo name="open-book" size={20} color={'white'} />

            <Text style={HomeHeaderCss.bookstortxt}>Bookstore</Text>
          </View>
        </TouchableOpacity>
        <View style={HomeHeaderCss.searchView}>
          <IconEvilIcons
            style={HomeHeaderCss.searchIcon}
            name="search"
            size={20}
          />

          <Text style={HomeHeaderCss.searchtxt}>Search...</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <View style={HomeHeaderCss.cartView}>
            <Text style={HomeHeaderCss.carttxt}>Cart</Text>

            <IconAntDesign
              style={HomeHeaderCss.cartIcone}
              name="shoppingcart"
              size={20}
              color={'white'}
            />
            <Badge
              value={3}
              status="success"
              containerStyle={{position: 'relative', top: -7, right: 14}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
