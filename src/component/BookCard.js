import React, {useEffect, useState} from 'react';
import react, {View, Image, Text, TouchableOpacity} from 'react-native';
import BookCardCss from '../css/BookCardCss';
import axios from 'axios';

const BookCard = () => {
  const [axiosdata, setaxiosdata] = useState([]);
  const [defultImangr, setdefultImangr] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpqrQgqFs5BR9_NGaRBoU8QG5jLpf0KJxYg&usqp=CAU',
  );
  const [booleanbuttomBag, setbooleanbuttomBag] = useState(false);
  useEffect(() => {
    getBookCardData();
    //  axiosdata.map(data=>{console.log('}}}}}}}}',data.auther)})
  }, []);

  const getBookCardData = async () => {
    let response = await axios.get(
      'https://restapimash-default-rtdb.firebaseio.com/Book.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
    );
    axiosdata.map(data =>
      console.log('=====================', data.addbagboolean),
    ),
      setaxiosdata(response.data.bookCollection);
    // getdsddd()
  };

  const handleUserDataPost = (cardData, Index) => {
    // console.log('hhhhhhhhhh', cardData.title);
    //  console.warn('hhhhhhhhhh', cardData.title);
    console.log('idddddddd9999d', Index);

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
      },
    });

    axios({
      method: 'PATCH',
      url: `https://restapimash-default-rtdb.firebaseio.com/Book/bookCollection/${Index}.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ`,
      data: {
        addbagboolean: true,
      },
    });
    setTimeout(() => {
      getBookCardData();
    }, 100);
  };

  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      {axiosdata.map((dataItem, Index) => {
        // console.log('idddddddd9999d', Index);
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
              {dataItem.addbagboolean ? (
                <View style={BookCardCss.BagButton}>
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
