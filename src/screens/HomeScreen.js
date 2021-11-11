import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {Text, View, StatusBar} from 'react-native';
import BookCard from '../component/BookCard';
import HomeHeader from '../component/HomeHeader';
import HomeScreenCss from '../css/HomeScreenCss';
const BadgeCountContext = createContext();


const HomeScreen = () => {

 // const [badgeLenth, setbadgeLenth] = useState(0);
 const [ShoopingCartArr, setShoopingCartArr] = useState([]);
 const [BadgeCountState,setBadgeCountState] = useState(0)
 
  useEffect(() => {
  //  console.log('------------------------------');
  });
  const BadgeCount= (count)=>{
    //console.log('ccccccccccccccccccccccccccccccccccccccccccccccccc');
    //console.log('counttttttttttt',count);
    setBadgeCountState(count)
   
  }

  return (
    <View style={HomeScreenCss.container1}>
      <StatusBar backgroundColor="darkred" barStyle="default" hidden={false} />
      {/* <BadgeCountContext.Provider value={BadgeCountState}> */}
      <HomeHeader/>
      {/* </BadgeCountContext.Provider> */}
      <View>
        <BookCard badgeData={BadgeCount}/>
      </View>
    </View>
  );
};
export default HomeScreen;
export {BadgeCountContext};