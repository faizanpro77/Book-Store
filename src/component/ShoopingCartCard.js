import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ShoppingCartCardCss from '../css/ShoppingCartCardCss';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
// import { firebase } from '@react-native-firebase/database';
// import auth from '@react-native-firebase/auth';

export default function ShoppingCartCard() {
  const [axiousData, setaxiousData] = useState([]);
  const [arrayForDelete, setarrayForDelete] = useState([]);
  const [defaultImg, setdefaultImg] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpqrQgqFs5BR9_NGaRBoU8QG5jLpf0KJxYg&usqp=CAU',
  );
  const [count, setCount] = useState(1);
  const [IndexData, setIndexData] = useState(0);
  const [newCount, setnewCount] = useState(1);
  const [price, setPrice] = useState(10);
  // const[initialPrice,setinitialPrice]=useState(0)
  const [first, setfirst] = useState(1);
  //const [priceBoolean, setpriceBoolean] = useState(true);
  const [total, setTotal] = useState(0);
  const [statearr, setstatearr] = useState([]);
  

  console.log('*************************************');
  const increaseCount = (Index, newCount1, price, initialPrice) => {
    //setCount(newCount)

    newCount1 = newCount1 + 1;

    setnewCount(newCount1);

    //  console.log('=before===================>', price);

    price = price + initialPrice;
    // console.log('======================>', price);

    setPrice(price);

    // console.log('increaseeeeeeeeee',count);
    /// handleCount(Index)
    setIndexData(Index);
  };
  //console.log('countCheckkkkkkkkkkkkkksoutside', countCheck);

  const decreaseCount = (Index, newCount1, price, initialPrice) => {
    if (newCount1 != 1) {
      newCount1 = newCount1 - 1;
      setnewCount(newCount1);

      price = price - initialPrice;
      setPrice(price);
    }

    setIndexData(Index);
  };
  const navigation = useNavigation();

  useEffect(() => {
    // console.log('tttttttttttttttttttttt', newCount);

    // var first = 0
    //  first=first+1
    setfirst(first => first + 1);
    //first time is not called automatic
    if (first != 1) {
      //console.log('nnnnnnnnnnnnnnnnnnnnnn');
      // first=2
      handleCount(IndexData);
    }
    setTimeout(() => {
      getCardDataFromUserCollection();
    }, 100);
    //  getCardDataFromUserCollection();
    // console.log('88888888888888888',axiousData);
    // setCount(newCount)

  }, [newCount]);


  const getCardDataFromUserCollection = async () => {
    
    let response = await axios.get(
      'https://restapimash-default-rtdb.firebaseio.com/users/CardItem.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
    );
    //console.log('cardDataaaaaaaa', axiousData);
    //console.log('responsesssssssssssssss', Object.values(response.data));
    //console.log('Object.keysssssssss',Object.keys(response.data));
    //console.log('Object.entrieeeeeeeeeeee',Object.entries(response.data));

    // console.log('responseonlyyyyyyyyyyyyyy',response);
    // let arr = Object.values(response.data);
    //    setaxiousData(response.data.CardItem);
      if(response.data!=null){
    setarrayForDelete(Object.keys(response.data));
    setaxiousData(Object.values(response.data));
    setstatearr(Object.values(response.data));
      }
    statearr.map(data => {
     
    });
  };
  //console.log('}}}}}}}}}}}}}}}}}}}', total);

  const RemoveData = Index => {
    // let arr =Object.keys(response.data)
    // console.log('aarrrrrrrrr', arrayForDelete[Index]);

    let response = axios.delete(
      `https://restapimash-default-rtdb.firebaseio.com/users/CardItem/${arrayForDelete[Index]}.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ`,
    );
    getCardDataFromUserCollection();

    // axios({
    //   method: 'PATCH',
    //   url: `https://restapimash-default-rtdb.firebaseio.com/Book/bookCollection/0.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ`,
    //   data: {
    //     addbagboolean: false,
    //   },
    // });
  };
  //**************************************************************** */
  const handleCount = async Index => {
    console.log('1111111111111111111111');
    let response = await axios({
      method: 'PATCH',
      url: `https://restapimash-default-rtdb.firebaseio.com/users/CardItem/${arrayForDelete[Index]}.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ`,
      data: {
        count: newCount,
        price: price,
      },
    });
  };

  return (
    <View>
      {axiousData.map((dataItem, Index) => {
        // let total=0
        ///setTotal(total=>total+dataItem.price)
        // console.log('>>>>>>>>>>>>>>>>>>',total);

        return (
          <View key={Index} style={ShoppingCartCardCss.container}>
            <View style={ShoppingCartCardCss.imgTxtContent}>
              <Image
                style={ShoppingCartCardCss.cardImg}
                source={{
                  uri: dataItem.bookImgUri ? dataItem.bookImgUri : defaultImg,
                }}
              />
              <View style={ShoppingCartCardCss.alltxtView}>
                <Text style={ShoppingCartCardCss.titleTxt}>
                  {dataItem.title}
                </Text>
                <Text style={ShoppingCartCardCss.authertxt}>
                  {dataItem.auther}
                </Text>
                <Text style={ShoppingCartCardCss.pricetxt}>
                  Rs. {dataItem.price}
                </Text>
              </View>
            </View>
            <View style={ShoppingCartCardCss.buttomCountRemoveButton}>
              <View style={ShoppingCartCardCss.quantitiyView}>
                <View style={ShoppingCartCardCss.circleButton1}>
                  <TouchableOpacity
                    onPress={() =>
                      decreaseCount(
                        Index,
                        dataItem.count,
                        dataItem.price,
                        dataItem.initialPrice,
                      )
                    }>
                    <Icon name="minuscircleo" size={20} color={'gray'} />
                  </TouchableOpacity>
                </View>
                {/* <TextInput
          onChangeText={text => setCount(text)}
          value={count}
          style={ShoppingCartCardCss.inputxt}
        /> */}

                <View style={ShoppingCartCardCss.countView}>
                  <Text>{dataItem.count}</Text>
                  {/* {console.log('countCheckkkkkkkkkkkkkksecond', countCheck)} */}
                </View>

                <View style={ShoppingCartCardCss.circleButton2}>
                  <TouchableOpacity
                    onPress={() =>
                      increaseCount(
                        Index,
                        dataItem.count,
                        dataItem.price,
                        dataItem.initialPrice,
                      )
                    }>
                    <Icon name="pluscircleo" size={20} color={'gray'} />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => RemoveData(Index)}>
                <Text style={{marginRight: 10}}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}
