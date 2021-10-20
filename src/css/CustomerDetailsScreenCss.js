import {StyleSheet} from 'react-native';

const CustomerDetailsScreenCss = StyleSheet.create({
  container1: {
    height: '100%',
    width: '100%',
  },
  container2: {
    height: 800,
    width: '80%',
    marginLeft: '10%',
  },
  CusDetailstxt: {
    fontSize: 20,
  },
  inputTextName: {
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
  },
  typetxt: {
    marginTop: 10,
  },
  RadioButton: {
    flexDirection: 'row',
  },
  RadioView1: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginLeft:-10
  },
  RadioView2: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  RadioView3: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  button: {
    height: 30,
    width: 140,
    backgroundColor: 'crimson',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft:'27%',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});

export default CustomerDetailsScreenCss;
