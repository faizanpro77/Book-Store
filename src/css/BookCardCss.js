import {StyleSheet} from 'react-native';
const BookCardCss = StyleSheet.create({
  container: {
    margin: 13,
  },
  CardContainer: {
    width: 170,
    height: 250,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 7,
  },
  imagContainer: {
    //width: '100%',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    height: 135,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height: 120,
    width: 90,
  },
  titletxtView: {
    marginLeft: 10,
    marginTop: 5,
  },
  Richtxt1: {
    fontWeight: 'bold',
    color: 'black',
  },
  Richtxt2: {
    fontSize: 10,
  },
  price: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  TwoButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  BagButton:{
    height:25,
    width:150,
    backgroundColor:'mediumblue',
    marginTop:10,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:9
  },
  Bagtxt:{
    color:'white'
  },
  cardButton: {
    height: 25,
    width: 75,
    backgroundColor: 'darkred',
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center',
    // marginLeft:5
    alignItems: 'center',
  },
  cardButton2: {
    height: 25,
    width: 75,
    //backgroundColor:'white',
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft:6,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  CardButtontxt: {
    fontSize: 12,
    color: 'white',
  },
  CardButtontxt2: {
    fontSize: 12,
    color: 'black',
  },
});

export default BookCardCss;
