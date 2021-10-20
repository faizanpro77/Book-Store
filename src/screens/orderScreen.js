import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import orderScreenCss from '../css/orderScreenCss';

export default function orderScreen({navigation}) {
 
  return (
    <View style={orderScreenCss.container1}>
      <HomeHeader />
      <ScrollView style={{height: 500}}>
        <View style={orderScreenCss.container2}>
          <View style={orderScreenCss.orderImgView}>
            <Image
              style={orderScreenCss.orderImg}
              source={require('../assets/successorder.png')}
            />
            <Image
              style={orderScreenCss.checkImg}
              source={require('../assets/images77.png')}
            />
            <Text style={orderScreenCss.orderplacedtxt}>
              order placed successfully
            </Text>
            <Text style={orderScreenCss.hurry}>
              hurry!!!your order is confirmed
            </Text>
            <Text style={orderScreenCss.hurry}>
              the order id is #123456 save the order id for
            </Text>
            <Text style={orderScreenCss.hurry}>further communication..</Text>
          </View>
          <View style={orderScreenCss.TableHeader}>
            <Text>Email us :- admin@bookstore.com</Text>
          </View>
          <View style={orderScreenCss.TableContainer}>
            <View style={orderScreenCss.tabelBox1}>
              <Text>Contact us :- +91 8163475781</Text>
            </View>
            <View style={orderScreenCss.tabelBox2}>
              <Text>Address :- 15th Cross,Sector 4</Text>
            </View>
          </View>
          <TouchableOpacity style={orderScreenCss.Button} onPress={()=>navigation.navigate('Home')}>
            <Text>CONTINUE SHOPPING</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
