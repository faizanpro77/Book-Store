import React, {useContext, useEffect, useState} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import { BadgeContext } from '../../App';
import BookCard from '../component/BookCard';
import HomeHeader from '../component/HomeHeader';
import HomeScreenCss from '../css/HomeScreenCss';

const HomeScreen = () => {
  const {dispatch,state} = useContext(BadgeContext)

console.log('state:{badgeCount}',state.badgeCount);
 const [ShoopingCartArr, setShoopingCartArr] = useState([]);
 const [BadgeCountState,setBadgeCountState] = useState(0)
 
  useEffect(() => {
  });
  const BadgeCount=(count)=>{
    dispatch({type:"CHANGE_BADGE",payload:count})
  }

  return (
    <View style={HomeScreenCss.container1}>
      <StatusBar backgroundColor="darkred" barStyle="default" hidden={false} />
      <HomeHeader/>
      <View>
        <ScrollView>
        <BookCard badgeData={BadgeCount}/>
        </ScrollView>
      </View>
    </View>
  );
};
export default HomeScreen;
