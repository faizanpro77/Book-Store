import React, {createContext, useReducer} from 'react';
import {Text, View} from 'react-native';

import StackNavigation from './src/navigation/StackNavigation';
 export const BadgeContext = createContext();
const initialState = {badgeCount: 0};

const reducer = (state, action) => {
  switch (action.type) {

    case 'CHANGE_BADGE':
      return {badgeCount: action.payload};

    default:
      return state;
  }
};



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
 // console.log('faaizannnnnnnnnnnnnnn',data.badgeCount);
  return (
    <View style={{height: '100%', width: '100%'}}>
      <BadgeContext.Provider value={{state,dispatch}}>
        <StackNavigation/>
      </BadgeContext.Provider>
    </View>
  );
};

export default App;


