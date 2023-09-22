import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, PermissionsAndroid, FlatList, ScrollView, Alert } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../../Components/imagePath';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addPost } from '../../Redux/PostSlice';
import { useDispatch } from 'react-redux';
import Data from '../../assets/Data/Data';

const Add = ({ onPost }) => {

    const [photo, setPhoto] = useState({
        fileName: "",
        fileSize: 198249,
        height: 1280,
        type: "image/jpeg",
        uri: "",
        width: 960
    });
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch()

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
                OpenCamera();
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const OpenCamera = async () => {

        const result = await launchCamera({ mediaType: 'photo' });
        if (!result.didCancel) {
            setPhoto(result.assets[0])
        }
    }

    const AddItem = () => {
        if (name == '' || detail == '' || price == '' || photo == '' || location == '' || category == '') {
            Alert.alert("plese fill all fields")
        }
        else {
            dispatch(addPost({
                name: name, deetail: detail, price: price, image: photo.uri, location: location,
                category: category == '0' ? 'House' :
                    category == '1' ? 'Car' :
                        category == '2' ? 'Bikes' :
                            category == '3' ? 'Mobiles' :
                                category == '4' ? 'Laptops' :
                                    category == '5' ? 'Furniture' :
                                        category == '6' ? 'Services' : null
            }));
            onPost();

        }

    }
    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled>
                <View style={styles.header}>
                    <Text style={styles.headindText}>Add Post</Text>
                </View>
                <TouchableOpacity style={styles.picture} onPress={() => requestCameraPermission()}>
                    {photo.uri == '' ?
                        (<Image source={imagePath.picture} resizeMode='stretch' style={styles.pictureImg} />)
                        : (<Image source={{ uri: photo.uri }} resizeMode='stretch' style={styles.pictureImg} />)
                    }

                </TouchableOpacity>
                <TextInput placeholder='Enter Item name' style={styles.input}
                    value={name} onChangeText={(txt) => setName(txt)} />

                <TextInput placeholder='Enter Item Details' style={styles.input}
                    value={detail} onChangeText={(txt) => setDetail(txt)} />

                <TextInput placeholder='Enter Item Price' style={styles.input} keyboardType='number-pad'
                    value={price} onChangeText={(txt) => setPrice(txt)} />

                <TextInput placeholder='Enter Your Location' style={styles.input}
                    value={location} onChangeText={(txt) => setLocation(txt)} />

                <View style={styles.selectCatView}>
                    <Text style={styles.selectCatText}>Choose Category</Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity
                            style={[styles.catList, { backgroundColor: category == 0 ? 'yellow' : '#DEDEDEF8' }]}
                            onPress={() => setCategory(0)} >
                            <Image source={imagePath.house} style={styles.catIcon} resizeMode='contain' />
                            <Text style={styles.catTitle}>House</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.catList, { backgroundColor: category == 1 ? 'yellow' : '#DEDEDEF8' }]}
                            onPress={() => setCategory(1)} >
                            <Image source={imagePath.car} style={styles.catIcon} resizeMode='contain' />
                            <Text style={styles.catTitle}>Car</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.catList, { backgroundColor: category == 2 ? 'yellow' : '#DEDEDEF8' }]}
                            onPress={() => setCategory(2)} >
                            <Image source={imagePath.bike} style={styles.catIcon} resizeMode='contain' />
                            <Text style={styles.catTitle}>Bikes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.catList, { backgroundColor: category == 3 ? 'yellow' : '#DEDEDEF8' }]}
                            onPress={() => setCategory(3)} >
                            <Image source={imagePath.mobile} style={styles.catIcon} resizeMode='contain' />
                            <Text style={styles.catTitle}>Mobile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.catList, { backgroundColor: category == 4 ? 'yellow' : '#DEDEDEF8' }]}
                            onPress={() => setCategory(4)} >
                            <Image source={imagePath.laptop} style={styles.catIcon} resizeMode='contain' />
                            <Text style={styles.catTitle}>Laptops</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.catList, { backgroundColor: category == 5 ? 'yellow' : '#DEDEDEF8' }]}
                            onPress={() => setCategory(5)} >
                            <Image source={imagePath.furniture} style={styles.catIcon} resizeMode='contain' />
                            <Text style={styles.catTitle}>Furniture</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.catList, { backgroundColor: category == 6 ? 'yellow' : '#DEDEDEF8' }]}
                            onPress={() => setCategory(6)} >
                            <Image source={imagePath.service} style={styles.catIcon} resizeMode='contain' />
                            <Text style={styles.catTitle}>Services</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => AddItem()}>
                    <Text style={{ color: 'white', fontSize: scale(18) }}>POST</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:verticalScale(100),

    },
    header: {
        width: '100%',
        height: verticalScale(60),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headindText: {
        fontSize: scale(22),
        color: '#000',
        fontWeight: '600'
    },
    picture: {
        width: '80%',
        height: verticalScale(100),
        marginTop: verticalScale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    pictureImg: {
        width: '80%',
        height: verticalScale(100),
        alignSelf: 'center',
    },
    input: {
        width: '80%',
        height: moderateScale(40),
        alignSelf: 'center',
        borderWidth: moderateScale(0.5),
        borderRadius: moderateScale(10),
        marginTop: verticalScale(10),
        paddingLeft: moderateScale(10)
    },
    btn: {
        width: '80%',
        height: verticalScale(50),
        alignSelf: 'center',
        borderRadius: moderateScale(10),
        marginTop: verticalScale(25),
        backgroundColor: 'rgba(20, 170, 250, 1.0)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectCatView: {
        width: '80%',
        alignSelf: 'center',
    },
    selectCatText: {
        color: 'black',
        alignSelf: 'center',
        marginTop: verticalScale(6),
        fontWeight: '500'
    },
    catList: {
        marginVertical: verticalScale(8),
        marginHorizontal: moderateScale(4),
        height: moderateVerticalScale(66),
        width: moderateScale(66),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEDEDEF8',
        borderRadius: scale(100),
        
    },
    catIcon: {
        width: moderateScale(30),
        height: verticalScale(30),
    },
    catTitle: {
        color: 'black',
        fontSize: scale(12),
    },




});

export default Add;
