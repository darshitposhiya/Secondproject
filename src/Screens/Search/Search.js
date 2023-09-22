import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, ScrollView } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import AddedData from '../Home/AddedData';
import imagePath from '../../Components/imagePath';

const Search = () => {

    const Items = useSelector(state => state.post);
    const [itemList, setItemList] = useState('');
    const [text, setText] = useState('')

    const filterList = (txt) => {
        let tempList = Items.data;
        let temp = tempList.filter(item => {
            return (item.name.toLowerCase().match(txt.toLowerCase()))
        });
        setItemList(temp)
    }

    const AddedDataItems = ({ item }) => {

        return (<AddedData {...item} />)
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput placeholder='Serch Items here....' style={styles.input}
                    value={text} onChangeText={(txt) => { setText(txt); filterList(txt) }} />
                <Image source={imagePath.search} style={styles.icon} resizeMode='contain' />
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
    searchBox: {
        alignSelf: 'center',
        marginTop: moderateVerticalScale(15),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        width: '95%',
        height: verticalScale(50),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    input: {
        width: '86%',
        marginLeft: moderateScale(5)
    },
    icon: {
        width: moderateScale(24),
        height: verticalScale(24)
    },
});

export default Search;
