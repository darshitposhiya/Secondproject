import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { moderateVerticalScale,scale,moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import AddedWish from './AddedWish';


const WishiList = () => {

    const Items = useSelector(state => state.whishlist);

     const AddedWhishItems = ({ item }) => {

         return (<AddedWish {...item}/>)
   }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>WhishList</Text>
            </View>
            <View  style={{ marginVertical: moderateVerticalScale(10) }}>
                <ScrollView nestedScrollEnabled>
                        <FlatList
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            data={Items.data}
                            renderItem={AddedWhishItems}

                        />
                </ScrollView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical:moderateScale(10),
        backgroundColor:'white'
    },
    headerText:{
        fontSize: scale(22),
        color: 'black',
        fontWeight:'500',
        marginStart: moderateScale(5)
    }
});

export default WishiList;
