import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Platform, TouchableOpacity, ImageBackground } from 'react-native';

export default class HomeScreen extends React.Component{
  render()
  {
    return(
      <View style = {styles.container}>
      <SafeAreaView style = {styles.androidSafeArea}/>

      <ImageBackground source = {require('../assets/bg_image.png')} style = {styles.backgroundImage}>

      <View style = {styles.titleBar}>
      <Text style = {styles.titleText}>ISS Tracker App</Text>
      </View>
      <View>

      <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate('IssLocationScreen')}>
      <Text style = {styles.routeText}>ISS Location</Text>
      <Text style = {styles.bgDigit}>1</Text>
      <Image source = {require('../assets/iss_icon.png')} style = {styles.iconImage}/>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate('MeteoroidsScreen')}>
      <Text style = {styles.routeText}>Meteors</Text>
      <Text style = {styles.bgDigit}>2</Text>
      <Image source = {require('../assets/meteor_icon.png')} style = {styles.iconImage}/>
      </TouchableOpacity>

      </View>
      </ImageBackground>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  androidSafeArea:{
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginTop: 50,
    marginRight: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 20,
    height: 125
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  iconImage: {
    width: 200,
    height: 200,
    position: 'absolute',
    resizeMode: 'contain',
    right: 80,
    top: -90
  },
  bgDigit: {
    position: 'absolute',
    fontSize: 150,
    right: 0,
    bottom: -30,
    color: 'grey',
    zIndex: -1
  }
})