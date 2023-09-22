import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../Components/imagePath';
import Data from '../../assets/Data/Data';
import { useSelector } from 'react-redux';
import AddedData from './AddedData';
import { useNavigation } from '@react-navigation/native';
import navigationString from '../../Constants/navigationString';

const Home = ({onSearch}) => {

    const Navigation = useNavigation()
    const postedItem = useSelector(state => state.post);

    const AddedDataItems = ({ item }) => {

        return (<AddedData {...item} />)
    }

    return (

        <View style={styles.container}>
            <Text style={styles.logo}>Olx Clone</Text>
            <TouchableOpacity onPress={()=>onSearch()}>
            <View style={styles.searchBox}>
                <Text  style={styles.input} >Go To Search...</Text>
                <Image source={imagePath.search} style={styles.icon} resizeMode='contain' />
            </View>
            </TouchableOpacity>

            <View style={{ marginBottom: verticalScale(205), }}>
                <ScrollView nestedScrollEnabled>
                    <Text style={styles.headingText}>Browse categories</Text>
                    <View style={{ marginHorizontal: moderateScale(8), }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={Data}
                            horizontal
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={styles.catList}
                                        onPress={() => Navigation.navigate(navigationString.ITEMSBYCATEGORY, { category: item.title })} >
                                        <Image source={item.image} style={styles.catIcon} resizeMode='contain' />
                                        <Text style={styles.catTitle}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }} />
                    </View>

                    <View>
                        <Text style={styles.postedItemText}>Posted Items</Text>
                        <View >
                            {
                                postedItem.data !== '' ?

                                    <FlatList
                                        numColumns={2}
                                        showsVerticalScrollIndicator={false}
                                        data={postedItem.data}
                                        renderItem={AddedDataItems}

                                    /> : null}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        fontSize: scale(35),
        fontWeight: '600',
        color: 'rgba(0, 0, 200, 1)',
        marginVertical: moderateVerticalScale(5),
        marginLeft: moderateScale(10),
    },
    searchBox: {
        alignSelf: 'center',
        marginVertical: moderateVerticalScale(5),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        width: '95%',
        height: verticalScale(40),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent:'center'
    },
    input: {
        width: '86%',
        marginLeft: moderateScale(5)
    },
    icon: {
        width: moderateScale(24),
        height: verticalScale(24)
    },
    headingText: {
        fontSize: scale(16),
        color: 'black',
        marginLeft: moderateScale(10),
        fontWeight: '500',
        marginVertical: moderateVerticalScale(5)
    },
    catList: {
        marginVertical: moderateVerticalScale(5),
        marginHorizontal: moderateScale(4),
        height: verticalScale(75),
        width: moderateScale(75),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEDEDEF4',
        borderRadius: moderateScale(10),
    },
    catIcon: {
        width: moderateScale(40),
        height: verticalScale(40),
    },
    catTitle: {
        color: 'black',
        fontSize: scale(14),
    },
    postedItemText: {
        fontSize: scale(16),
        color: 'black',
        marginLeft: moderateScale(10),
        fontWeight: '500',
        marginVertical:moderateVerticalScale(5)
        
    },

});

export default Home;
