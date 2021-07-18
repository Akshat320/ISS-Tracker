import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { MapView, Marker } from 'react-native-maps'
import axios from 'axios'

export default class IssLocationScreen extends React.Component{
  constructor()
  {
    super();
    this.state = {location: {}}
  }
  componentDidMount(){
  this.getIssLocation()
  }
  getIssLocation=()=>{
    axios
    .get('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response=>{
      console.log(response.data)
      this.setState({location: response.data})
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
  render()
  {
    if(Object.keys(this.state.location).length === 0)
    {
      return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }else{
    return(
      
      <View style = {styles.container}>
        <SafeAreaView style = {styles.androidSafeArea}/>
        <ImageBackground source = {require('../assets/iss_bg.jpg')} style = {styles.backgroundImg} />

        <View style = {styles.titleContainer}>
      <Text style = {styles.titleText}>ISS Location Screen</Text>
      </View>
      <View style = {styles.mapContainer}>
        <MapView style = {styles.map} 
        region={{
          latitude: this.state.location.latitude,
          longitude: this.state.location.longitude,
          latitudeDelta: 100,
          longitudeDelta: 100
        }}>
          <Marker coordinate={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude
          }}> 
            <Image source = {require('../assets/iss_icon.png')} style = {{height: 50, width: 50}}/>
          </Marker>
        </MapView>
      </View>
      </View>      

    )
    }
  }

}

const styles = StyleSheet.create({
  androidSafeArea:{
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImg: {
    flex: 1,
    resizeMOde: 'cover'
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  mapContainer: {
    flex: 0.6
  },
  map: {
    width: '100%',
    height: '100%'
  }
})