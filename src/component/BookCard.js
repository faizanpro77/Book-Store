import React, {useEffect, useState} from 'react';
import react, {View, Image, Text, TouchableOpacity} from 'react-native';
import BookCardCss from '../css/BookCardCss';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const BookCard = props => {
  const [axiosdata, setaxiosdata] = useState([]);
  const [cartItemArr, setcartItemArr] = useState([]);
  const [ShoopingCartArr, setShoopingCartArr] = useState([]);
  const [addBoolean, setaddBoolean] = useState(false);
  const navigation = useNavigation();
  const [arrayId,setarrayId] = useState([])

  const [defultImangr, setdefultImangr] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpqrQgqFs5BR9_NGaRBoU8QG5jLpf0KJxYg&usqp=CAU',
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getBookCardData();
    });

    return unsubscribe;
  }, [navigation]);
  const getBookCardData = async () => {
    let response = await axios.get(
      'https://restapimash-default-rtdb.firebaseio.com/Book.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
    );

    var arr = [];
    let arrObj = [];
    arrObj = response.data.BookItem;
    arr = Object.keys(arrObj).map(key => {
      arrObj[key].id = key;
      return arrObj[key];
    });
    setaxiosdata(Object.values(arr));
    let shopingarr = [ShoopingCartDataResponse];

    let ShoopingCartDataResponse = await axios.get(
      'https://restapimash-default-rtdb.firebaseio.com/users/CardItem.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
    );
    if (ShoopingCartDataResponse.data != null) {
      setShoopingCartArr(Object.values(ShoopingCartDataResponse.data));
      let badge = Object.values(ShoopingCartDataResponse.data).length;

      props.badgeData(badge);
    } else {
      props.badgeData([]);
      setShoopingCartArr([]);
    }
  };
  const handleUserDataPost = (cardData, dataItemId) => {
    // let ShoppingArr = []
    // ShoppingArr[ShoppingArr.length]=dataItemId
    // console.log('...................',ShoppingArr);
    // for (var i = 0; i < ShoppingArr.length; i++) {
    //   console.log('}}}}}}}}}}}',ShoopingCartArr[i].title);
    //   if (ShoppingArr[i] != dataItemId) {
      
      setarrayId([...arrayId,dataItemId])


    for (var i = 0; i < ShoopingCartArr.length; i++) {
      if (ShoopingCartArr[i].id != dataItemId) {
        axios({
          method: 'post',
          url: 'https://restapimash-default-rtdb.firebaseio.com/users/CardItem.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
          data: {
            title: cardData.title,
            auther: cardData.auther,
            price: cardData.price,
            bookImgUri: cardData.bookImgUri,
            count: cardData.count,
            initialPrice: cardData.initialPrice,
            id: cardData.id,
          },
        });
      }
    }

    setTimeout(() => {
      getBookCardData();
    }, 100);
  };

 // console.log('arrayIdddddddddddddddddd',arrayId);
  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      {axiosdata.map((dataItem, Index) => {
        var addbagboolean = false;
        for (var i = 0; i < ShoopingCartArr.length; i++) {
          if (ShoopingCartArr[i].id === dataItem.id) {
            addbagboolean = true;
          }
        }

        return (
          <View key={Index} style={BookCardCss.container}>
            <View style={BookCardCss.CardContainer}>
              <View style={BookCardCss.imagContainer}>
                <View style={BookCardCss.imageView}>
                  <Image
                    style={BookCardCss.imageView}
                    source={{
                      uri: dataItem.bookImgUri
                        ? dataItem.bookImgUri
                        : defultImangr,
                    }}
                  />
                </View>
              </View>
              <View style={BookCardCss.titletxtView}>
                <Text style={BookCardCss.Richtxt1}>{dataItem.title}</Text>
                <Text style={BookCardCss.Richtxt2}>{dataItem.auther}</Text>
                <Text style={BookCardCss.price}>{dataItem.price}</Text>
              </View>

              {addbagboolean ? (
                <View style={BookCardCss.BagButton}>
                  <Text style={BookCardCss.Bagtxt}>ADDED TO BAG</Text>
                </View>
              ) : (
                <View style={BookCardCss.TwoButtonView}>
                  <TouchableOpacity
                    onPress={() => handleUserDataPost(dataItem, dataItem.id)}>
                    <View style={BookCardCss.cardButton}>
                      <Text style={BookCardCss.CardButtontxt}>ADD TO BAG</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={BookCardCss.cardButton2}>
                      <Text style={BookCardCss.CardButtontxt2}>WISHLIST</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default BookCard;
