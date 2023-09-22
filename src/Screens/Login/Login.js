//import liraries
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView,Alert } from 'react-native';
import styles from './styles';
import TextinputWithLabel from '../../Components/TextinputWithLabel';
import { moderateVerticalScale } from 'react-native-size-matters';
import imagePath from '../../Components/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationString from '../../Constants/navigationString';
import { useNavigation , StackActions } from '@react-navigation/native';

const Login = () => {

    const [isVisible, setVisible] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigation = useNavigation();

    const handleLogin = async () => {

        try {
            if (email.length > 0 && password.length > 0) {
                const isUserLogin = await auth().signInWithEmailAndPassword(email, password);
                setMessage('');
                navigation.dispatch(StackActions.replace(navigationString.MAIN));
                setEmail('');
                setPassword('');
            }
            else {
                Alert.alert("please enter all data")
            }
        }
        catch (err) {
            setMessage(err.message)
        }

    }
    return (

        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                style={styles.imgStyle}>
                <Text style={styles.loginTextStyle}>LOGIN</Text>
            </ImageBackground>
            <ScrollView>
                <View style={styles.mainStyle}>
                    <TextinputWithLabel
                        label="Email Address"
                        placeHolder="Enter Your Email"
                        inputStyle={{ marginBottom: moderateVerticalScale(24) }}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={value => setEmail(value)} />
                    <TextinputWithLabel
                        label="Password"
                        placeHolder="Enter Your Password"
                        secureTextEntry={isVisible}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                        onPressRight={() => setVisible(!isVisible)}
                        value={password}
                        onChangeText={value => setPassword(value)} />
                    <Text>{message}</Text>
                    <TouchableOpacity style={styles.forgotView}>
                        <Text style={styles.forgotText}>Forgot Password ?</Text>
                    </TouchableOpacity>
                    <ButtonComp
                        btnText='Login'
                        onPress={() => handleLogin()} />
                    <View style={styles.bottomView}>
                        <Text>Not a member </Text>
                        <TouchableOpacity onPress={() => navigation.navigate(navigationString.SIGNIN)}>
                            <Text style={{ fontWeight: 'bold' }}>Sign In Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};




//make this component available to the app
export default Login;
