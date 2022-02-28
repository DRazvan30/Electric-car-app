/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  TouchableOpacity,
  TouchableOpacityBase,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableNativeFeedbackBase,
  Button,
  Alert,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Pagina1 from './android/app/screens/Pagina1';
import ModelX from './android/app/screens/ModelX';
import ModelX2 from './android/app/screens/ModelX2';
import ModelS from './android/app/screens/ModelS';
import ModelS2 from './android/app/screens/ModelS2';
import Model3 from './android/app/screens/Model3';
import Model32 from './android/app/screens/Model32';
import Nav from './android/app/screens/Nav';




const Stack = createStackNavigator();
 function App() {


//return <ModelX/>;
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="p1" component={Pagina1} options={{ headerShown:false }} />
            <Stack.Screen name="modelX" component={ModelX} options={{ headerShown:false}} />
            <Stack.Screen name="modelX2" component={ModelX2} options={{ headerShown:false}} />
            <Stack.Screen name="modelS" component={ModelS} options={{ headerShown:false}} />
            <Stack.Screen name="modelS2" component={ModelS2} options={{ headerShown:false}} />
            <Stack.Screen name="model3" component={Model3} options={{ headerShown:false}} />
            <Stack.Screen name="model32" component={Model32} options={{ headerShown:false}} />
          </Stack.Navigator>
        </NavigationContainer>

    );
     
}
export default App;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#fff",
   justifyContent: "center",
   alignItems: "center",
  },
  
  
});

//export default App;
