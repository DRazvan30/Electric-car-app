import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, ViewPropTypes, TouchableOpacity, ScrollView, TouchableOpacityBase, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function ModelX({navigation}) {    
    return (

        <View style={styles.backgr}>
            

            <View style={styles.textdot}>

                <Text style={styles.text}>Tesla Model X</Text>
                <View style={{height:17,width:17,backgroundColor:'red',right:-286,top:-22,borderRadius:40}}>
                </View>
            </View>
            
            <View style={styles.chenar}>
                <Image  
                style={{width:200,height:300,alignSelf:'center',top:-85}}
                source={require('../assets/above1.png')} />
                
                <TouchableOpacity onPress={() => navigation.navigate('modelX2')}>
                    <Image
                    style={{height:135,width:135,alignSelf:'center',top:-60}} 
                    source={require('../assets/but_on.png')}
                     />
                </TouchableOpacity>
            </View>

            <View style={[styles.frana, {backgroundColor:'red'} ]}>
                <TouchableOpacity>
                    <Image  
                        style={{width:40,height:40,left:15,top:5}}
                        source={require('../assets/brake.png')} />
                    <Text style={{top:-35,left:60,fontSize:26,color:'white'}}>"Parking Brake Off"</Text>    
                </TouchableOpacity>
            </View>
            
           
        </View>


                  
    );
}

const styles = StyleSheet.create({
    backgr:{
        backgroundColor:'#191919',
        flex:1,
        
    },
    bara:{
        
        height:50,
        width:50,
        top:3,
        borderRadius:44,
        backgroundColor:'white',
        

    },
    text:{
        top:10,
        textAlign:'center',
        fontSize:25,
        color:'white',
        fontFamily:'Asar-Regular',
        alignItems:'center',

    },

    chenar:{
        top:100,
        width:340,
        height:370,
        backgroundColor:'#696969',
        alignSelf:'center',
        borderRadius:20,
        borderWidth:2,
        borderColor:'red',
    },

    frana:{
        width:300,
        height:50,
        //left:40,
        //backgroundColor:'red',
        top:120,
        alignSelf:'center',
        borderRadius:20,
        

    },
  


})


export default ModelX;
