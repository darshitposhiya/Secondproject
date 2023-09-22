import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View,SafeAreaView,TouchableOpacity,Text,Image,TextInput,Alert} from "react-native";


const Signup = () =>
{
    const navigation = useNavigation();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [psw,setPsw] = useState('');
  
    const submit = () =>
    {
      if(!name)
      {
        Alert.alert("plz Enter Name")
      }
      else if(!email)
      {
        Alert.alert("plz Enter Email")
      }
      else if(!psw)
      {
        Alert.alert("plz Password")
      }
      else
      {
        Alert.alert(`Thank You ${name}`)
        navigation.navigate('login')
      }
    };

    return(
        <View className='flex-1 bg-blue-500'>
            <SafeAreaView className='flex mb-4'>
                <View className='flex-row justify-start'>
                    <TouchableOpacity onPress={(()=>navigation.goBack())}>
                        <Text className='bg-yellow-400 p-1 rounded-tr-2xl rounded-bl-2xl ml-4 mt-1'>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View className='flex-1 bg-white px-8 pt-6'
            style={{borderTopLeftRadius:50, borderTopRightRadius:50}}>
                <View className='space-y-1.5'>
                    <Text className='text-gray-700 mx-2'>
                        Enter Name
                    </Text>
                    <TextInput className= 'bg-gray-100 text-gray-700 rounded-2xl'
                    value={name}
                    onChangeText={(userdata)=>setName(userdata)} 
                    placeholder="Enter Full Name" />
                    <Text className='text-gray-700 mx-2'>
                        Email Address
                    </Text>
                    <TextInput className= 'bg-gray-100 text-gray-700 rounded-2xl'
                    value={email} 
                    onChangeText={(useremail)=>setEmail(useremail)} 
                    placeholder="Enter Email" />
                     <Text className='text-gray-700 mx-4'>
                        Password
                    </Text>
                    <TextInput className= 'bg-gray-100 text-gray-700 rounded-2xl mb-5'
                    value={psw} 
                    onChangeText={(userpsw)=>setPsw(userpsw)} 
                    placeholder="Enter Password" secureTextEntry />
                    <View>
                    <TouchableOpacity 
                    onPress={submit} 
                    className='py-3 bg-yellow-400 rounded-xl'>
                        <Text className=' text-gray-700 text-center font-bold'>
                            Sign Up
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
                                Alredy have an account?
                            </Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                                <Text className='font-semibold text-yellow-500'>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      
)};
export default Signup;
