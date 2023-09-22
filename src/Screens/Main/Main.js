//import liraries
import Auth from '@react-native-firebase/auth'
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import navigationString from '../../Constants/navigationString';
import { useNavigation, StackActions } from '@react-navigation/native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../Components/imagePath';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Add from '../Add/Add';
import WishiList from '../WishiList/WishiList';
import User from '../User/User';

const Main = () => {

    const navigation = useNavigation();
    const [selectedTab, setSlectedTab] = useState('');
    return (
        <View style={styles.container}>
            {selectedTab == 0 ? (<Home onSearch={()=>{setSlectedTab(1)}} />) 
            : selectedTab == 1 ? (<Search />) 
            : selectedTab == 2 ? (<Add onPost={()=>{setSlectedTab(0)}} />)
                : selectedTab == 3 ? (<WishiList />) 
                : selectedTab == 4 ? (<User />)
            : null }
            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(0)}>
                    {selectedTab == 0 ?
                        (<Image source={imagePath.selected_home} style={styles.tabIcon} resizeMode='contain' />)
                        : (<Image source={imagePath.home} style={styles.tabIcon} resizeMode='contain' />)
                    }
                    <Text style={styles.tabText}>HOME</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(1)}>
                    {selectedTab == 1 ?
                        (<Image source={imagePath.selected_search} style={styles.tabIcon} resizeMode='contain' />)
                        : (<Image source={imagePath.search} style={styles.tabIcon} resizeMode='contain' />)
                    }
                    <Text style={styles.tabText}>SERCH</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(2)}>
                    <Image source={imagePath.add}
                        style={[styles.tabIcon, { width: moderateScale(60), height: verticalScale(60), },
                        { borderColor: selectedTab == 2 ? 'black' : 'blue' }]}
                        resizeMode='contain' />
                    <Text style={[styles.tabText, { marginBottom: verticalScale(34) }]}>SELL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(3)}>
                    {selectedTab == 3 ?
                        (<Image source={imagePath.selected_whish} style={styles.tabIcon} resizeMode='contain' />)
                        : (<Image source={imagePath.whish} style={styles.tabIcon} resizeMode='contain' />)
                    }
                    <Text style={styles.tabText}>MY ADS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab} onPress={() => setSlectedTab(4)}>
                    {selectedTab == 4 ?
                        (<Image source={imagePath.selected_user} style={styles.tabIcon} resizeMode='contain' />)
                        : (<Image source={imagePath.user} style={styles.tabIcon} resizeMode='contain' />)
                    }
                    <Text style={styles.tabText}>ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomTabs: {
        width: '100%',
        height: verticalScale(60),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
    },
    tab: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabIcon: {
        width: moderateScale(22),
        height: moderateVerticalScale(22)
    },
    tabText: {
        fontSize: scale(12),
        marginTop: moderateVerticalScale(2),
        color: 'black'
    }
});

//make this component available to the app
export default Main;
