import React from 'react';
import {Text, View,StatusBar} from 'react-native';
import BookCard from '../component/BookCard';
import HomeHeader from '../component/HomeHeader';
import HomeScreenCss from '../css/HomeScreenCss';


const HomeScreen = () => {
  return (
    <View style={HomeScreenCss.container1}>
      <StatusBar
      backgroundColor='darkred'
      barStyle='default'
      hidden={false}
      />
      <HomeHeader />
      <View>
        <BookCard />
      </View>
    </View>
  );
};
export default HomeScreen;
