import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import CustomerDetailsScreenCss from '../css/CustomerDetailsScreenCss';
import {RadioButton} from 'react-native-paper';
import axios from 'axios';

export default function CustomerDetailsScreen({navigation}) {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState('first');
  const [type, setType] = useState('Home');
  // console.log('---------------',checked);
  const [firstName, setfirstName] = useState('');
  const [firstNameError, setfirstNameError] = useState('gray');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileNumberError, setmobileNumberError] = useState('gray');
  const [PinCode, setPinCode] = useState('');
  const [pinCodeError, setpinCodeError] = useState('gray');
  const [State, setState] = useState('');
  const [StateError, setStateError] = useState('gray');
  const [city, setCity] = useState('');
  const [cityError, setcityError] = useState('gray');
  const [landmark, setLandMark] = useState('');
  const [landmarkError, setLandMarkError] = useState('gray');
  const [nameFieldchecked, setNameFieldchecked] = useState(false);
  const [numberFieldchecked, setNumberFieldchecked] = useState(false);
  const [pinCodeFieldchecked, setPinCodeFieldchecked] = useState(false);
  const [stateFieldchecked, setStateFieldchecked] = useState(false);
  const [cityFieldchecked, setCityFieldchecked] = useState(false);
  const [landMarkFieldchecked, setlandMarkFieldchecked] = useState(false);

  const validateName = val => {
    setfirstName(val);
    let rjx = /^[A-Z][a-z]{1,}$/;
    let isValid = rjx.test(val);
    if (isValid) {
      //  console.log('----------------------');
      setfirstNameError('gray');
      setNameFieldchecked(true);
    } else {
      // console.log('=================>>>>>>>>');
      setfirstNameError('red');
      setNameFieldchecked(false);
    }
  };

  const vlidateMobileNumber = val => {
    setMobileNumber(val);
    let rjx = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    let isValid = rjx.test(val);
    if (isValid) {
      setmobileNumberError('gray');
      setNumberFieldchecked(true);
    } else {
      setmobileNumberError('red');
      setNumberFieldchecked(false);
    }
  };

  const ValidatePinCode = val => {
    setPinCode(val);
    let rjx = /^[1-9][0-9]{5}$/;
    let isValid = rjx.test(val);
    if (isValid) {
      setpinCodeError('gray');
      setPinCodeFieldchecked(true);
    } else {
      setpinCodeError('red');
      setPinCodeFieldchecked(false);
    }
  };

  const validateState = val => {
    setState(val);
    let rjx = /^[A-Z][a-z]{3,}$/;
    let isValid = rjx.test(val);
    if (isValid) {
      setStateError('gray');
      setStateFieldchecked(true);
    } else {
      setStateError('red');
      setStateFieldchecked(false);
    }
  };

  const validateCity = val => {
    setCity(val);
    let rjx = /^[a-zA-Z',.\s-]{1,25}$/;
    let isValid = rjx.test(val);
    if (isValid) {
      setcityError('gray');
      setCityFieldchecked(true);
    } else {
      setcityError('red');
      setCityFieldchecked(false);
    }
  };

  const validateLandMark = val => {
    setLandMark(val);
    let rjx = /^[a-zA-Z',.\s-]{1,25}$/;
    let isValid = rjx.test(val);
    if (isValid) {
      setLandMarkError('gray');
      setlandMarkFieldchecked(true);
    } else {
      setLandMarkError('red');
      setlandMarkFieldchecked(false);
    }
  };

  const addDataIntoDataBase = () => {
    if (
      nameFieldchecked == true &&
      numberFieldchecked == true &&
      pinCodeFieldchecked == true &&
      cityFieldchecked == true &&
      landMarkFieldchecked == true &&
      stateFieldchecked == true
    ) {
      axios({
        method: 'POST',
        url: 'https://restapimash-default-rtdb.firebaseio.com/users/UserDetails.json?auth=WDGZGCxE2OHaeBe0iGqLsyuMSnZdxzHcWA6iWxvJ',
        data: {
          Name: firstName,
          MobileNumber: mobileNumber,
          PinCode: PinCode,
          State: State,
          City: city,
          LandMark: landmark,
        },
      });
      navigation.navigate('orderScreen');
    }
   // console.log('pppppppppppppppppp',type);
  };

  // useEffect(() => {
    
  //   if (checked == 'first') {
  //     setType('Home');
  //   } else if (checked = 'second') {
  //     setType('Work');
  //   }
  // }, [checked]);
  return (
    <View style={CustomerDetailsScreenCss.container1}>
      <HomeHeader />
      <ScrollView>
        <View style={CustomerDetailsScreenCss.container2}>
          <Text style={CustomerDetailsScreenCss.CusDetailstxt}>
            Customer Details
          </Text>
          <TextInput
            onChangeText={text => setText(text)}
            // value={text}
            placeholder="Name"
            // style={CustomerDetailsScreenCss.inputTextName}
            style={{
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 10,
              borderColor: firstNameError,
            }}
            onChangeText={validateName}
          />
          <TextInput
            placeholder="Phone Number"
            // style={CustomerDetailsScreenCss.inputTextName}
            keyboardType="numeric"
            onChangeText={vlidateMobileNumber}
            style={{
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 10,
              borderColor: mobileNumberError,
            }}
          />
          <TextInput
            placeholder="pincode"
            keyboardType="numeric"
            // style={CustomerDetailsScreenCss.inputTextName}
            onChangeText={ValidatePinCode}
            style={{
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 10,
              borderColor: pinCodeError,
            }}
          />
          <TextInput
            placeholder="State"
            // style={CustomerDetailsScreenCss.inputTextName}
            onChangeText={validateState}
            style={{
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 10,
              borderColor: StateError,
            }}
          />
          <TextInput
            placeholder="city/town"
            // style={CustomerDetailsScreenCss.inputTextName}
            onChangeText={validateCity}
            style={{
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 10,
              borderColor: cityError,
            }}
          />
          <TextInput
            placeholder="Landmark"
            // style={CustomerDetailsScreenCss.inputTextName}
            onChangeText={validateLandMark}
            style={{
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 10,
              borderColor: landmarkError,
            }}
          />
          <Text style={CustomerDetailsScreenCss.typetxt}>type</Text>
          <View style={CustomerDetailsScreenCss.RadioButton}>
            <View style={CustomerDetailsScreenCss.RadioView1}>
              <RadioButton
                color="darkred"
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text>Home</Text>
            </View>
            <View style={CustomerDetailsScreenCss.RadioView2}>
              <RadioButton
                color="darkred"
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text>Work</Text>
            </View>

            <View style={CustomerDetailsScreenCss.RadioView3}>
              <RadioButton
                color="darkred"
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text>Other</Text>
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              style={CustomerDetailsScreenCss.button}
              onPress={() => addDataIntoDataBase()}>
              <Text style={CustomerDetailsScreenCss.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
