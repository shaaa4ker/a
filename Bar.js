import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import BottomNavigation from './Tab';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import seting from './Settingtemp'
import add from './Addtemp'
import Homepage from './homepage'
import navigationsetting from './App'
import App from './App';
import HomepageWithNavigation from './App'

const Stack = createStackNavigator();

  
    const handleiconpress= () => {
      Alert.alert('icon pressed')
      
    }
    const CustomBottomNavigation = ({navigation}) => {
      

  
    

  return (

    

    <><LinearGradient colors={['#fff', '#fff', '#fff']} style={styles.bar} />
    <TouchableOpacity onPress={handleiconpress}>
    <Icon name='home' style={styles.homeicon} size={30} />
    </TouchableOpacity>

    <TouchableOpacity onPress={handleiconpress}>
    <Icon name='plus' style={styles.plusicon} size={30} />
    </TouchableOpacity>

    <TouchableOpacity   onPress={() => navigation.navigate('Settingtemp')}>
    <HomepageWithNavigation/>

    <Icon name='cog' style={styles.cogicon} size={30} />
    </TouchableOpacity>   
    
    </>


    


);

};




const styles = StyleSheet.create({
    bar: {
        height: 75,
        width: 1000,
        top: 350
        
    
        
    
      },
      homeicon: {
        color: 'purple',
        top: 280,
    
      },
      plusicon: {
        color: 'purple',
        top: 284,
        left: -90
    
      },
      cogicon: {
        color: 'purple',
        top: 250,
        left: 90
    
      }







  




});

export default CustomBottomNavigation;
