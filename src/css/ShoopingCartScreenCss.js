import {StyleSheet} from 'react-native';

const ShoopingCartScreenCss = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  myCarttxt: {
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  container1: {
    height: '80%',
    width: '92%',
    marginLeft: '4%',
    // backgroundColor:'red'
  },
 
  footer: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    justifyContent: 'center',
  },
  placeOrdertxt: {
    color: 'white',
  },
  placeOrder: {
    height: 30,
    width: 120,
    backgroundColor: 'crimson',
    marginRight: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
  TotalPrice: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
    color: 'black',
  },
  TotalPrice1: {
    marginLeft: 10,
    color: 'darkred',
  },
});
export default ShoopingCartScreenCss;
