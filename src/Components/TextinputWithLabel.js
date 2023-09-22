//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../Styles/colors';

// create a component
const TextinputWithLabel = ({
    label,
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    value,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <Text style={styles.labelTextStyle}>{label}</Text>
            <View style={styles.flexView}>
                <TextInput
                    placeholder={placeHolder}
                    style={styles.inlineStyle}
                    {...props}
                    value={value}
                    onChangeText={onChangeText}
                />
                {!!rightIcon ? <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPressRight}
                >
                    <Image style={{ tintColor:colors.blackOpacity30 }} source={rightIcon} />
                </TouchableOpacity> : null}

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.blackOpacity80,
        borderRadius: moderateScale(4),
    },
    inlineStyle: {
        padding: moderateVerticalScale(8),
        fontSize: scale(16),
        flex: 1
    },
    labelTextStyle: {
        fontSize: scale(18),
        color: colors.blackOpacity50
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default TextinputWithLabel;
