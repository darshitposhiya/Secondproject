import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import navigationString from '../../Constants/navigationString';

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            const unsubscribe = Auth().onAuthStateChanged((user) => {
                const RoutName = user !== null ? navigationString.MAIN : navigationString.LOGIN;
                unsubscribe();

                navigation.dispatch(StackActions.replace(RoutName));
            });


        }, 3000);
        return () => { }
    }, [])

    return (
        <View style={styles.container}>
           <Image
           source={{uri:'https://cdn.dribbble.com/users/973941/screenshots/7733594/media/5c42b916311cd7b618727b4a126687e5.png?compress=1&resize=400x300'}} 
           style={styles.image_look} 
           resizeMode='contain'/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image_look:{
        height:'100%',
        width:'100%',
        borderRadius:1
    }
});


export default SplashScreen;
