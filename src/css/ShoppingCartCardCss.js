import {StyleSheet} from 'react-native';

const ShoppingCartCardCss = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    borderWidth: 0.5,
    borderColor:'gray',
    borderRadius:10,
    marginTop:10
    //backgroundColor: 'red',
  },
  imgTxtContent: {
    flexDirection: 'row',
  },
  cardImg: {
    height: 100,
    width: 80,
    marginTop: 6,
    marginLeft:5
  },
  titleTxt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  pricetxt: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alltxtView: {
    marginLeft: 20,
    marginTop:1
  },
  authertxt: {
    fontSize: 12,
  },
  inputxt:{
    height: 20,
    borderWidth: 1,
    borderColor:'gray',
    width: 25,
    marginLeft: 5,
    //marginTop: 8,
    paddingLeft: 8,
    paddingRight:3,
    paddingTop:3,
    paddingBottom:3
  },
  quantitiyView:{
    flexDirection:'row',
    marginTop:10
  },
  circleButton1:{
    marginLeft:5,
   
  },
  circleButton2:{
    marginLeft:5,
  },
  buttomCountRemoveButton:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    
  },
 
  
  countView:{
    height:20,
    width:20,
    borderWidth:1,
    marginLeft:5,
    justifyContent:"center",
    alignItems:'center',
    //marginBottom:10
  },
 
});

export default ShoppingCartCardCss;
