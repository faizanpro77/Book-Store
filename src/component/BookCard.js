import React, {useEffect, useState} from 'react';
import react, {View, Image, Text, TouchableOpacity} from 'react-native';
import BookCardCss from '../css/BookCardCss';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const BookCard = () => {
  const [axiosdata, setaxiosdata] = useState([]);
  const [cartItemArr, setcartItemArr] = useState([]);
  const [ShoopingCartArr, setShoopingCartArr] = useState([]);
  const navigation = useNavigation();

  const [defultImangr, setdefultImangr] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpqrQgqFs5BR9_NGaRBoU8QG5jLpf0KJxYg&usqp=CAU',
  );
  const [booleanbuttomBag, setbooleanbuttomBag] = useState(false);
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

    // axiosdata.map(data =>
    //   console.log('=====================', data.addbagboolean),
    // ),
    // console.log(response.data.BookItem);
    // setaxiosdata(response.data.bookCollection);
    var arr = [];
    let arrObj = [];
    arrObj = response.data.BookItem;
    arr = Object.keys(arrObj).map(key => {
      arrObj[key].id = key;
      return arrObj[key];
      // console.log('insideeeeeeeeeeee',arr);
    });
    setaxiosdata(Object.values(arr));
    let shopingarr = [ShoopingCartDataResponse];

    let ShoopingCartDataResponse = await axios.get(
      'https://restapimash-default-rtdb.firebaseio.com/users/CardItem.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
    );
    //.then((response)=> {
    // handle success
    // console.log('pppppppppppppppppppp',response);
    // setShoopingCartArr(Object.values(ShoopingCartDataResponse.data));

    //})
    //.catch((error)=> {
    // handle error
    // console.log('my error',error);
    //})
    // if(ShoopingCartDataResponse.data)
    if(ShoopingCartDataResponse.data!=null)
    setShoopingCartArr(Object.values(ShoopingCartDataResponse.data));
    // console.log(
    //   '777777777777777777777777777777',
    //   Object.values(ShoopingCartDataResponse.data),
    // );
    // getdsddd()
  };
  const handleUserDataPost = (cardData, Index) => {
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
    // .then((response)=> {
    // console.log('data added');
    //  }

    // console.log('tttttttttttttttttttt',response);
    // })
    // .catch((error)=> {
    //  // console.log('something went wrong',error);
    // });

    setTimeout(() => {
      getBookCardData();
    }, 100);
  };

  //console.log('hhhhhhhhhh77');
  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      {axiosdata.map((dataItem, Index) => {
        //console.log('idddddddd9999d', Index);
        var addbagboolean = false;
        //   if(ShoopingCartArr){
        for (var i = 0; i < ShoopingCartArr.length; i++) {
          if (ShoopingCartArr[i].id === dataItem.id) {
            // console.log(
            //   'successssssssssssssssss',
            //   ShoopingCartArr[i].id + '...........' + dataItem.id,
            // );
            // console.log('dataItem.titleeeeeeeeeeeee', dataItem.title);
            var addbagboolean = true;
          }
        }
        // }
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

              {/* {dataItem.id == cartItemArr.id? ( */}
              {/* {dataItem.addbagboolean ? ( */}
              {addbagboolean ? (
                <View style={BookCardCss.BagButton}>
                  {/* {console.log('cartItemArrrrrrrrrrrrrrrrrrrr',cartItemArr)} */}
                  <Text style={BookCardCss.Bagtxt}>ADDED TO BAG</Text>
                </View>
              ) : (
                <View style={BookCardCss.TwoButtonView}>
                  <TouchableOpacity
                    onPress={() => handleUserDataPost(dataItem, Index)}>
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
