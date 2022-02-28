import React, {Component, useState} from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, ViewPropTypes, TouchableOpacity, ScrollView, TouchableOpacityBase, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const random1 = 1 + Math.floor(Math.random()*99);
const random2 = 100-random1;
const rang = (random1*575)/100;
let color1="a";

if(random1>=75)
     color1="green";
    else if(random1<75 && random1>=50)
     color1 = "yellow";
     else if(random1<50 && random1>10)
     color1 = "orange";
     else 
     color1 = "red";

class ModelX2 extends Component {

    
    constructor(props){
        super(props);
        this.state={
            isOn: false
        }

        this.handlePress = this.handlePress.bind(this);
        
    }

    handlePress(){

        this.setState(state => ({
            isOn: !state.isOn
        }));

    }
    
    render(){

       
    return (

       

        <View style={styles.backgr}>

            

            <View style={{top:20}}>

                <Text style={styles.text}>Tesla Model X</Text>
                <View style={{height:17,width:17,backgroundColor:'green',right:-286,top:-35,borderRadius:40}}>
                </View>
            </View>

            <View>
                
                <TouchableOpacity>
                    <Image 
                    style={{alignSelf:'baseline',left:10,height:30,width:40,top:23}}
                    source={require('../assets/abs.png')}/>
                </TouchableOpacity>
               

                <TouchableOpacity>
                    <Image 
                    style={{alignSelf:'baseline',right:-350,height:43,width:43,top:-12}}
                    source={require('../assets/far.png')}/>
                </TouchableOpacity>    

                
                <View style={[styles.chenarfrana, {backgroundColor: this.state.isOn ? 'red' :'grey'} ]}>
                <TouchableOpacity onPress={this.handlePress}>
                <Image 
                style={{left:10,height:33,width:33,top:8}}
                source={require('../assets/brake.png')}/>

                <Text 
                style={{top:-22,left:60,fontSize:15,color:'white',}}>{this.state.isOn ? "Parking Brake On" : "Parking Brake Off"} </Text>
                 </TouchableOpacity>
                </View>
               

            </View>

            <View style={styles.chenar}>
                <Image  
                style={{width:150,height:350,position:'absolute',left:190,top:-10}}
                source={require('../assets/above1.png')} />

            <View style={{top:15,left:25}}>
            <ProgressCircle
                
                percent={random1}
                radius={70}//marimea cercului
                borderWidth={17}
                color= {color1} //culoare loaded
                shadowColor="#696969"//culoare unloaded
                bgColor="#696969"// culoare cerc mic inauntru
            >
            <Text style={{ fontSize: 25,textAlign:'center',color:'white',fontWeight:'bold' }}>{ random1 +'% battery'}</Text>
            </ProgressCircle>
            </View>

            <View style={{top:35,left:25}}>
            <ProgressCircle
                
                percent={random2}
                radius={70}//marimea cercului
                borderWidth={17}
                color="purple" //culoare loaded
                shadowColor="#696969"//culoare unloaded
                bgColor="#696969"// culoare cerc mic inauntru
            >
            <Text style={{ fontSize: 25,textAlign:'center',color:'white',fontWeight:'bold' }}>{random2+ '% finished'}</Text>
            </ProgressCircle>
            </View>

            <View style={styles.range}>  
                <Text style={{fontSize:26,textAlign:'center',top:-5,color:'black',fontWeight:'bold'}}>Range </Text>
                <Text style={{fontSize:15,textAlign:'center',top:-3,color:'grey'}}>{rang+'km'}</Text>
            </View>
                
            <View style={styles.butonof}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image  style={{width:70,height:70,left:230,top:-5}} source={require('../assets/off.png')} />
                </TouchableOpacity>

            </View>
               
            </View>


       
           
            

        </View>


                   
       
    );
}}

const styles = StyleSheet.create({
    backgr:{
        backgroundColor:'#191919',
        flex:1,
        
        
    },

    bara:{
        
        height:50,
        width:50,
        top:4,
        borderRadius:44,
        backgroundColor:'white',
        

    },

    text:{
        top:-5,
        textAlign:'center',
        fontSize:25,
        color:'white',
        fontFamily:'Asar-Regular',
        alignItems:'center',

    },

    chenarfrana:{
        width:200,
        height:50,
        alignSelf:'center',
        top:30,
        position:'absolute',
        borderRadius:20,
        borderWidth:1.5,
        borderColor:'white',
    },

    chenar:{
        top:29,
        width:350,
        height:420,
        backgroundColor:'#696969',
        alignSelf:'center',
        borderRadius:20,
        borderWidth:3,
        borderColor:'green',
    },

    range:{

        width:150,
        height:60,
        top:60,
        left:25,
        backgroundColor:'white',
        //alignSelf:'baseline',
        borderRadius:20,
        borderWidth:1.5,
        borderColor:'white',
       
    },

    butonof:{

    }

    
})

export default ModelX2;
