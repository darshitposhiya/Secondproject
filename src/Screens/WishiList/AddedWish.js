import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../Components/imagePath';

const AddedWish = ({
    price,
    deatail,
    name,
    image,
    location
}) => {
    return (
        <TouchableOpacity style={styles.postItems}>
        <Image source={{ uri: image }} style={styles.postsImage} />
        <View style={{margin:moderateScale(8)}}>
            <View style={styles.postRupeeView}>
                <Image source={imagePath.rupee}
                    style={{ height: verticalScale(15), width: moderateScale(15) }}
                    resizeMode='contain' />
                <Text style={styles.rupeeText}>{price}</Text>
            </View>

            <Text style={styles.postDetail}>{name}</Text>

            <View style={styles.postLocationView}>
                <Image source={imagePath.location}
                    style={{ height: verticalScale(15), width: moderateScale(15) }}
                    resizeMode='contain' />
                <Text style={styles.postLocationText}>{location}</Text>
            </View>
        </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    postItems: {
        width:'47%',
        backgroundColor: 'white',
        margin: moderateVerticalScale(5),
        padding: moderateScale(5),
        borderWidth: moderateScale(1),
        borderColor: '#dcdcdc',
        borderRadius: moderateScale(5)

    },
    postsImage: {
        width: '90%',
        height: moderateVerticalScale(120),
        alignSelf: 'center',
    },
    postRupeeView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rupeeText: {
        marginLeft: moderateScale(3),
        color: 'black',
        fontWeight: '700'
    },
    postDetail: {
        color: 'black',
        marginLeft:moderateScale(5)
    },
    postLocationView: {
        flexDirection: 'row',
        marginTop:moderateVerticalScale(8),
        alignItems: 'center'
    }
    , postLocationText: {
        marginLeft: moderateScale(3),
        color: 'black',
        fontSize:scale(12)
    },
   
});

//make this component available to the app
export default AddedWish;
