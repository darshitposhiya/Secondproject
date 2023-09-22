import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';

const Welcome = () => {

    const navigation=useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
        <View className='flex-1 flex justify-around my-4'>
            <Text className='text-white font-bold text-4xl text-center'>
                Let's Get Started
            </Text>
            <View className='flex-row justify-center'>
                <Image source={require('../images/welcome.jpg')}
                style={{width:250,height:250}} className='rounded-full'/>
            </View>
            <View className='space-y-4'>
                <TouchableOpacity onPress={()=>navigation.navigate('signup')} className='py-3 bg-yellow-400 mx-7 rounded-xl' >
                    <Text className='text-xl font-bold text-center text-gray-700'>
                        Sign up
                    </Text>
                </TouchableOpacity>
                <View className='flex-row justify-center'>
                    <Text className='text-white font-semibold'>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                        <Text className='font-semibold text-yellow-400'>
                            Log in
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Welcome;
