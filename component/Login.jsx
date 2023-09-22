import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,SafeAreaView,TouchableOpacity,Text,Image,TextInput} from "react-native";


const Login = () =>
{
    const navigation = useNavigation();
    return(
        <View className='flex-1 bg-blue-500'>
            <SafeAreaView className='flex'>
                <View className='flex-row justify-start'>
                    <TouchableOpacity onPress={(()=>navigation.goBack())}>
                        <Text className='bg-yellow-400 p-1 rounded-tr-2xl rounded-bl-2xl ml-4 mt-1'>Go Back</Text>
                    </TouchableOpacity>
                </View>
                <View className='flex-row justify-center'>
                    <Image source={require('../images/welcome.jpg')} className='rounded-full mb-3'
                    style={{width:90, height:80}}/>
                </View>
            </SafeAreaView>
            <View className='flex-1 bg-white px-8 pt-3'
            style={{borderTopLeftRadius:50, borderTopRightRadius:50}}>
                <View className='space-y-1.5'>
                    <Text className='text-gray-700 mx-2'>
                        Email Address
                    </Text>
                    <TextInput className= 'bg-gray-100 text-gray-700 rounded-2xl'
                    value="myname@gmail.com" placeholder="Enter Email" />
                     <Text className='text-gray-700 mx-4'>
                        Password
                    </Text>
                    <TextInput className= 'bg-gray-100 text-gray-700 rounded-2xl'
                    value="111" placeholder="Enter Password" secureTextEntry />
                    <TouchableOpacity className='flex items-end'>
                        <Text className='text-gray-700 mb-3'>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    <View className=''>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Home')}
                     className='py-3 bg-yellow-400 rounded-xl'>
                        <Text className=' text-gray-700 text-center font-bold'>
                            Login
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View >
                        <Text className='text-xl text-gray-700 font-bold text-center'>
                            OR
                        </Text>
                        <View className='flex-row justify-center space-x-12'>
                            <TouchableOpacity>
                                <Image source={require('../images/google1.png')}
                                className='w-10 h-10'/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Image source={require('../images/apple1.png')}
                                className='w-10 h-10'/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Image source={require('../images/facebook1.png')}
                                className='w-10 h-10'/>
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row justify-center mt-3'>
                            <Text className='text-gray-700 font-semibold'>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
                                <Text className='font-semibold text-yellow-500'>
                                    Signup
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      
)};
export default Login;