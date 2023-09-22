import React from "react";
import { Text, View, Button,StyleSheet } from "react-native";


const Home = () => {
   
    return (
        <View>
            <Text style={style.container}>hello
            </Text>
            
        </View>
    )
};

const style = StyleSheet.create(
    {
        container:{
            backgroundColor:'black',
            color:'white',
            fontSize:50,
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center'
        }
    }
);


export default Home;