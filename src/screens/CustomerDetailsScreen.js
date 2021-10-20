import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import CustomerDetailsScreenCss from '../css/CustomerDetailsScreenCss';
import {RadioButton} from 'react-native-paper';

export default function CustomerDetailsScreen({navigation}) {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState('first');

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
            value={text}
            placeholder="Name"
            style={CustomerDetailsScreenCss.inputTextName}
          />
          <TextInput
            placeholder="Phone Number"
            style={CustomerDetailsScreenCss.inputTextName}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="pincode"
            keyboardType="numeric"
            style={CustomerDetailsScreenCss.inputTextName}
          />
          <TextInput
            placeholder="Locality"
            style={CustomerDetailsScreenCss.inputTextName}
          />
          <TextInput
            placeholder="city/town"
            style={CustomerDetailsScreenCss.inputTextName}
          />
          <TextInput
            placeholder="Landmark"
            style={CustomerDetailsScreenCss.inputTextName}
          />
          <Text style={CustomerDetailsScreenCss.typetxt}>type</Text>
          <View style={CustomerDetailsScreenCss.RadioButton}>
            <View style={CustomerDetailsScreenCss.RadioView1}>
              <RadioButton
              color='darkred'
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text>Home</Text>
            </View>
            <View style={CustomerDetailsScreenCss.RadioView2}>
              <RadioButton
              color='darkred'
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text>Work</Text>
            </View>

            <View style={CustomerDetailsScreenCss.RadioView3}>
              <RadioButton
              color='darkred'
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text>Other</Text>
            </View>
          </View>
          <View style={{width:'100%',alignItems:'center'}}>
          <TouchableOpacity style={CustomerDetailsScreenCss.button} onPress={()=>navigation.navigate('orderScreen')}>
                <Text style={CustomerDetailsScreenCss.buttonText}>Continue</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
