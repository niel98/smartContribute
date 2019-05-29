import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
export default class Welcome extends React.Component {
    render() {
      return (
        <View style={styles.container}>
        <Image 
        style= {{width: 200, height: 150}}
        source = {require('../assets/Icon-Standard-Savings-1112x740.png')}
        />
          <Text style={styles.txt1}>Smart Contributing</Text>
          <Text style={styles.txt2}>System</Text>

          <TouchableOpacity
          onPress= {() => this.props.navigation.navigate('Register')} 
          style={styles.RegBtn}>
              <Text style={{color: '#fff', fontSize: 16, textAlign: 'center'}}>
                  Register
              </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= {() => this.props.navigation.navigate('Login')}
          style={styles.LogBtn}>
              <Text style={{color: '#416cc1', fontSize: 16, textAlign: 'center'}}>
                  Login
              </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d2d4d8'
    },
    txt1: {
        fontFamily: 'Roboto',
        fontSize: 30,
        alignSelf: 'center',
        margin: 10
    },
    txt2: {
        fontFamily: 'Roboto',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 15
    },
    RegBtn: {
        backgroundColor: '#416cc1',
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        fontSize: 16,
        marginBottom: 20
        
    },
    LogBtn: {
        backgroundColor: '#d2d4d8'
    }
  });
  