import {StyleSheet} from 'react-native';
import {Row} from 'react-native-table-component';
const orderScreenCss = StyleSheet.create({
  container1: {
    height: '100%',
    width: '100%',
  },
  container2: {
    height: 800,
    width: '92%',
    marginLeft: '4%',
  },
  orderImg: {
    height: 220,
    width: 220,
    marginTop: 10,
  },
  orderImgView: {
    alignItems: 'center',
  },
  checkImg: {
    height: 100,
    width: 100,
  },
  orderplacedtxt: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  hurry: {
    fontWeight: 'bold',
  },
  TableHeader: {
    width: '100%',
    height: '5%',
    borderWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TableContainer: {
    // flexDirection:'row',
    height: 100,
    width: '100%',
    //borderWidth:1
  },
  tabelBox1: {
    width: '100%',
    height: '40%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabelBox2: {
    width: '100%',
    height: '5%',
    borderWidth: 1,
    justifyContent: 'center',
    height: '40%',
    alignItems: 'center',
  },
  Button: {
    height: 30,
    width: 170,
    backgroundColor: 'crimson',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 90,
  },
});

export default orderScreenCss;
