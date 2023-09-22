import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity,Image,ScrollView } from 'react-native';
import { moderateVerticalScale, moderateScale, scale,verticalScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import AddedData from './AddedData';
import navigationString from '../../Constants/navigationString';
import imagePath from '../../Components/imagePath';

const ItemsByCategory = () => {

    const Navigation = useNavigation();
    const Items = useSelector(state => state.post);
    const route = useRoute();
    const { category } = route.params;
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        let tempData = Items.data;
        let tem = [];
        tempData.map(item => {
            if (item.category == category) {
                tem.push(item);
            }
        })
        setItemList(tem)
    }, []);

    const AddedDataItems = ({ item }) => {

        return (<AddedData {...item} />)
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={()=>Navigation.navigate(navigationString.MAIN)}>
                     <Image source={imagePath.back}
                        style={styles.back_icon} /> 
                </TouchableOpacity>
                <Text style={styles.headerText}>{category}</Text>
            </View>

            <View style={{ marginVertical: moderateVerticalScale(10) }}>
              <ScrollView nestedScrollEnabled>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={itemList}
                    renderItem={AddedDataItems}

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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(10),
        backgroundColor: 'white',
    },
    back_icon: {
        height: verticalScale(20),
        width: moderateScale(20),
    },
    headerText: {
        fontSize: scale(22),
        color: 'black',
        fontWeight: '500',
        marginStart: moderateScale(5)
    }
});

export default ItemsByCategory;
