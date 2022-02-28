import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, ViewPropTypes, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Pagina1({navigation}) {
   
     const x = () => Alert.alert("Apasat pe X");
    return (

        <ScrollView style={styles.back}>
            
            <View style={styles.logobar}>
                <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
            <View style={styles.text}>
                <Text style={{fontSize:20, color:'white',fontWeight:'bold',fontStyle:'italic',}}>CAR LIST</Text>
            </View>    
            </View>


        <View style={styles.masini}>

            <View style={styles.Masina1}>
                <TouchableOpacity onPress={() => navigation.navigate('modelX')} > 
                    <Image style={{width:381,height:210,left:15,borderRadius:20}}source={require('../assets/modelx_1.jpg')}>
                
                    </Image>
                <Text style={{fontSize:15, color:'white',fontWeight:'bold',fontStyle:'italic',position:'absolute',right:50,top:177}}>MODEL X</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Masina2}>
            <TouchableOpacity onPress={() => navigation.navigate('modelS')} > 
                    <Image style={{width:381,height:210,left:15,borderRadius:20}}source={require('../assets/models_1.jpg')}>
                
                    </Image>
                <Text style={{fontSize:15, color:'white',fontWeight:'bold',fontStyle:'italic',position:'absolute',right:50,top:177}}>MODEL S</Text>
             </TouchableOpacity>   

            </View>

            <View style={styles.Masina3}>

            <TouchableOpacity onPress={() => navigation.navigate('model3')}> 
                    <Image style={{width:381,height:210,left:15,borderRadius:20}}source={require('../assets/model3.jpg')}>
                
                    </Image>
                <Text style={{fontSize:15, color:'white',fontWeight:'bold',fontStyle:'italic',position:'absolute',right:50,top:177}}>MODEL 3</Text>
                </TouchableOpacity>
            </View>
            
          
         </View>    

        </ScrollView>

      
            
            
        
       
    );
}

const styles = StyleSheet.create({
    back:{
        backgroundColor:'#191919',
        flex:1,
        

    },

    logo:{
        top:5,
        width:35,
        height:35,

    },

    logobar:{
       
        height:60,
        alignItems:'center',


    },

    text:{
        position:'absolute',
        top:10,
        left:10,
    },

    masini:{
       
        flex:1,
    
    },

    Masina1:{
        flex:1,
        left:0,
        top:-20,
    },

    Masina2:{
        flex:1,
        top:-5,
        
    },

    Masina3:{
        flex:1,
        top:7,
        
    },

 
  
    

    
    

})
export default Pagina1;