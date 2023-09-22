//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../Styles/colors';

// create a component
const ButtonComp = ({
    btnText,
    btnStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
        activeOpacity={0.5}
            onPress={onPress}
            style={{ ...styles.btnStyle, ...btnStyle }}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        backgroundColor: colors.themeColor,
        borderRadius: moderateScale(4),
        alignItems:'center',
        justifyContent:'center',
        marginTop:moderateVerticalScale(30)
    },
    btnText: {
        fontSize: scale(18),
        color:'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'

    }
});

//make this component available to the app
export default ButtonComp;
