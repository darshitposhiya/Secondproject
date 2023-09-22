import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Auth from '@react-native-firebase/auth';
import navigationString from '../../Constants/navigationString';
import { StackActions, useNavigation } from '@react-navigation/native';

const User = () => {

    const Navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Email:{Auth().currentUser.email}</Text>
            <TouchableOpacity style={styles.btn}
                onPress={async () => {
                    await Auth().signOut()
                    Navigation.dispatch(StackActions.replace(navigationString.LOGIN));
                }}>
                <Text style={styles.logoutText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: '50%',
        height: verticalScale(50),
        alignSelf: 'center',
        borderRadius: moderateScale(10),
        marginTop: moderateVerticalScale(10),
        backgroundColor: 'rgba(20, 170, 250, 1.0)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutText: {
        color: 'white',
        fontSize: scale(18),
        fontWeight: '500'
    }
});

export default User;
