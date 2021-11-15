import React, {useEffect, useState, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HomeHeaderCss from '../css/HomeHeaderCss';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Badge} from 'react-native-elements';
import axios from 'axios';
import {BadgeContext} from '../../App';

const HomeHeader = () => {
  const {state:{badgeCount}} = useContext(BadgeContext);
  const [badgeArr, setBadgeArray] = useState([]);
  const navigation = useNavigation();

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
            {badgeCount > 0 ? (
              <Badge
                // badgeArr.length
                value={badgeCount}
                status="success"
                containerStyle={{position: 'relative', top: -7, right: 14}}
              />
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
