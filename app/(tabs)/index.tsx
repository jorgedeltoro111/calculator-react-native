import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import React, { useState } from 'react';
import MyButton from '../../components/MyButton';

export default function HomeScreen() {
  const [value, setValue] = useState(0);
  const handlePress = (value: string) => {
    console.log(`Number: ${value}`)
    let num = Number(value);
    setValue(num);
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultDisplay}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <View style={styles.buttonRow}>
        <MyButton title="AC" onPress={() => handlePress('AC')} style={styles.buttonStyleSpecial}/>
        <MyButton title="±" onPress={() => handlePress('±')} style={styles.buttonStyleSpecial}/>
        <MyButton title="%" onPress={() => handlePress('%')} style={styles.buttonStyleSpecial}/>
        <MyButton title="÷" onPress={() => handlePress('÷')} style={styles.buttonStyle2}/>
      </View>
      <View style={styles.buttonRow}>
        <MyButton title="7" onPress={() => handlePress('7')} style={styles.buttonStyle}/>
        <MyButton title="8" onPress={() => handlePress('8')} style={styles.buttonStyle}/>
        <MyButton title="9" onPress={() => handlePress('9')} style={styles.buttonStyle}/>
        <MyButton title="×" onPress={() => handlePress('×')} style={styles.buttonStyle2}/>
      </View>
      <View style={styles.buttonRow}>
        <MyButton title="4" onPress={() => handlePress('4')} style={styles.buttonStyle}/>
        <MyButton title="5" onPress={() => handlePress('5')} style={styles.buttonStyle}/>
        <MyButton title="6" onPress={() => handlePress('6')} style={styles.buttonStyle}/>
        <MyButton title="-" onPress={() => handlePress('-')} style={styles.buttonStyle2}/>
      </View>
      <View style={styles.buttonRow}>
        <MyButton title="1" onPress={() => handlePress('1')} style={styles.buttonStyle}/>
        <MyButton title="2" onPress={() => handlePress('2')} style={styles.buttonStyle}/>
        <MyButton title="3" onPress={() => handlePress('3')} style={styles.buttonStyle}/>
        <MyButton title="+" onPress={() => handlePress('+')} style={styles.buttonStyle2}/>
      </View>
      <View style={styles.buttonRow}>
        <MyButton title='0' onPress={() => handlePress('0')} style={styles.buttonStyle0}/>
        <MyButton title='.' onPress={() => handlePress('.')} style={styles.buttonStyle}/>
        <MyButton title='=' onPress={() => handlePress('=')} style={styles.buttonStyle2}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: 60
  },
  resultDisplay:{
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%', 
    paddingRight: 20, 
  },
  text:{
    color: 'white',
    fontSize: 90,
  },
  buttonRow:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle:{
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: '#505050',
    margin: 7
  },
  buttonStyle2:{
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: '#FF9500',
    margin: 7
  },
  buttonStyle0:{
    width: 190,           
    height: 80,             
    borderRadius: 42.5,     
    backgroundColor: '#505050',
    justifyContent: 'center', 
    margin: 7
  },
  buttonStyleSpecial:{
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: '#3b4546',
    margin: 7
  }
});
