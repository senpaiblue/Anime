import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import WelcomeBg from "../assets/Welcome.jpg";
import LottieView from "lottie-react-native";
import neko from "../assets/Animation - 1700662331027.json";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
export default function WelcomeScreen() {
  const navigation=useNavigation()
  return (
    <ImageBackground
      className="flex-1 justify-center items-center"
      source={WelcomeBg}
      resizeMode="cover"
    >
      <Text className="text-white text-center font-[900] text-[42px]">
        Welcome
      </Text>
      <View className="justify-center items-center">
        <LottieView
          source={neko}
          loop
          autoPlay
          style={{
            width: width,
            height: height * 0.3,
          }}
        />
      </View>
      <View className="my-10">
        <TouchableOpacity className="bg-pink-700 px-24 py-4 rounded-2xl" onPress={()=>navigation.navigate('SignUp')}>
          <Text className="text-center text-white font-medium text-lg">
            SignUp
          </Text>
        </TouchableOpacity>
        <View className=' flex-row justify-center mt-3'>
          <Text className='text-white font-normal text-lg'>Already have account ?</Text>
          <Text className='text-black pl-2 font-normal text-lg' onPress={()=>navigation.navigate('Login')}>Login</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
