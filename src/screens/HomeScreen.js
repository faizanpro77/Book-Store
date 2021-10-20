import React from 'react';
import {Text, View} from 'react-native';
import BookCard from '../component/BookCard';
import HomeHeader from '../component/HomeHeader';
import HomeScreenCss from '../css/HomeScreenCss';

const HomeScreen = () => {
  return (
    <View style={HomeScreenCss.container1}>
      <HomeHeader />
      <View>
        <BookCard />
      </View>
    </View>
  );
};
export default HomeScreen;
