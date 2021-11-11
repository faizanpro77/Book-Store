import React, { useReducer } from 'react';
import {Text, View} from 'react-native';

import StackNavigation from './src/navigation/StackNavigation';
//import BadgeContext from './src/screens/ContextData';
import { BadgeCountContext } from './src/screens/HomeScreen';
//import { BadgeCountContext } from  './src/screens/ContextData'
const badgeContext = useContext(BadgeCountContext)




const App = () => {
  const initialState = {count: 0};

  
function reducer(state, action) {
  switch (action.type) {
    case 'setBadge':
      return {badge: action.payload};

    default:
    return state
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

  console.log('faaizannnnnnnnnnnnnnn');
  return (
    <View style={{height: '100%', width: '100%'}}>
      <BadgeCountContext.Provider value={{state,dispatch}}>
      <StackNavigation />
      </BadgeCountContext.Provider>
    </View>
  );
};

export default App;

//badges
