import { View, Text, ImageBackground, SafeAreaView, Dimensions, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";
import LoginBg from "../assets/Loginbg.jpg";
import LottieView from "lottie-react-native";
import Sakura from '../assets/Animation - 1700677895371.json'
import { useNavigation } from "@react-navigation/native";

var {width,height}=Dimensions.get('window')
export default function SignUpScreen() {
  const navigation=useNavigation()
  return (
    <View className="bg-[#CD275E] flex items-start justify-start h-[100%]">
     <SafeAreaView className='bg-white h-[40%] w-full' style={{borderBottomLeftRadius:50, borderBottomRightRadius:50}}>
      <LottieView
      source={Sakura}
      autoPlay
      loop
      className='w-[100%] h-[100%] flex items-center justify-center ml-8'
      />
     </SafeAreaView>
     <View>
      <Text className='text-white font-medium text-xl mt-16 mx-5'>
        Email Address
      </Text>
      <TextInput
      className='bg-pink-700 border border-pink-800 rounded-xl py-4 pl-4 pr-24 mx-5 mt-4 text-white text-sm'
      value="sakchamsingh@gmai.com"
      placeholder="Email address"
      />
      <Text className='text-white font-medium text-xl mt-8 mx-5'>
        Password
      </Text>
      <TextInput
      className='bg-pink-700 border border-pink-800 rounded-xl py-4 pl-4 pr-24 mx-5 mt-4 text-white text-sm'
      secureTextEntry
      value="test1234@23"
      placeholder="Email Password"
      />
      <TouchableOpacity className='flex ml-[178] mt-2  '><Text className='text-white'>Forgot Password</Text></TouchableOpacity>
     </View>
     <TouchableOpacity className='flex-row bg-pink-700 px-[80] py-3 rounded-2xl mx-5 mt-8' onPress={()=>navigation.navigate('Home')}><Text className='text-white text-lg  '>SignUp</Text></TouchableOpacity>
    </View>
  );
}
