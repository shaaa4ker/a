import { ActivityIndicator, StyleSheet, Text, View, Button, Image, Switch, StatusBar, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Homepage from './homepage';
 import seting from './Settingtemp'
import add from './Addtemp'

const logo = require("./assets/65040-purple-flame-logo-clipart.png");

const Stack = createStackNavigator();

const Readypage = ({ navigation }) => {
  const netinfo = useNetInfo();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <LinearGradient colors={['#fff', '#fff', '#fff']} style={styles.container}>
      <Image style={styles.logo1} source={logo} />
      <Text style={styles.innerText}>Welcome To Make Your Week</Text>

      <Text style={styles.tt}>I AM {isEnabled ? 'Ready' : 'Not Ready'}</Text>

      {netinfo.isConnected && (
        <Switch
          trackColor={{ false: "#000", true: "#B209FB" }}
          thumbColor={isEnabled ? "#CB69F6" : "#B209FB"}
          ios_backgroundColor="#purple"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }] }}
        />
      )}

      {!netinfo.isConnected && <Text style={styles.connection}>Check Your Connection</Text>}

      {isEnabled && <Icon name='check' style={styles.firstcheck} size={25} />}

      {isEnabled && (
        <Pressable
          style={styles.SignUP}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      )}

      {isEnabled && (
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonTextlogin}>Log In</Text>
        </Pressable>
      )}
      <Button title='developer mode' style={styles.developermode}    onPress={() => navigation.navigate('homepage')}>
        
      </Button>
    </LinearGradient>
  );
};

const SignUP = () => {
  const[username, setName] = useState('');
  const[password, setPass] = useState('');
  return (
    <LinearGradient colors={['#fff', '#fff', '#7A26B6']} style={styles.container}>
      <Text style={styles.innerText}>Let's Make Your Account</Text>
      <Text style={styles.utexts}>Username</Text>
      <TextInput style={styles.signupuser} value={username} onChangeText={setName}></TextInput>
      <Text style={styles.ptexts}>Password</Text>
      <TextInput style={styles.signuppass} value={password} onChangeText={setPass}></TextInput>
      <Text style={styles.innerText}>{username}</Text>
    </LinearGradient>
  );
};

const Login = () => {
  const[username, setName] = useState('');
  const[password, setPass] = useState('');
  return (
    <LinearGradient colors={['#fff', '#fff', '#7A26B6']} style={styles.container}>
      <Text style={styles.innerText}>Let's See What You Missed</Text>
      <Text style={styles.utexts}>Username</Text>
      <TextInput style={styles.signupuser} value={username} onChangeText={setName}></TextInput>
      <Text style={styles.ptexts}>Password</Text>
      <TextInput style={styles.signuppass} value={password} onChangeText={setPass}></TextInput>
      <Text style={styles.innerText}>{username}</Text>

      <Pressable
          style={styles.login2}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonTextlogin2} >Lets Go</Text>
        </Pressable>

    </LinearGradient>
  );
};

export  function pp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Readypage">

        <Stack.Screen
          name="Readypage"  
          component={Readypage}  
          options={{ title: 'Readypage' }}
        />
        <Stack.Screen
          name="Signup"  
          component={SignUP}  
          options={{ title: 'Signup' }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title:'Login' }}
        />
          <Stack.Screen
          name='homepage'   
          component={Homepage}
          options={{ title: 'Developer Mode' }}
        />
        <Stack.Screen
          name='Settingtemp'   
          component={seting}
          options={{ title: 'Setting' }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    color: 'purple',
    fontSize: 28,
    top: -150,
    fontFamily: 'Times New Roman'
  },
  logo1: {
    resizeMode: 'cover',
    width: 350,
    height: 350,
    top: -150,
    left: 60,
  },
  tt: {
    top: -130,
    fontFamily: 'Times New Roman',
    fontSize: 25 
  },
  firstcheck: {
    top: -100,
    color: 'green'
  },
  loading: {
    top: 30
  },
  connection: {
    color: 'red',
    fontSize: 25,
    fontFamily: 'arial',
    top:-100
  },
  SignUP: {

    top: 10,

    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'purple',
    left:-120
  },
  login: {

    top: -35,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 2, 
    borderColor: 'purple', 
    left: 120
    
  },
  signupuser: {
    height: 40,  
    width: '80%', 
    borderColor: 'purple',  
    borderWidth: 1,  
    marginTop: 20,  
    paddingLeft: 10,
    color: 'green', 
    top: -100 
  },
  signuppass: {
    height: 40,  
    width: '80%',  
    borderColor: 'purple',  
    borderWidth: 1,  
    marginTop: 20,  
    paddingLeft: 10,  
    color: 'green',
    top: -60
  },
  utexts: {
    color: 'green',
    fontFamily: 'Times New Roman',
    top: -120,
    fontSize: 20
  },
  ptexts: {
    color: 'green',
    fontFamily: 'Times New Roman',
    top: -80,
    fontSize: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextlogin: {
    color: 'purple', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextlogin2: {
    color: 'black', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  login2: {

    top: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 2, 
    borderColor: 'purple', 

    
  },

});

