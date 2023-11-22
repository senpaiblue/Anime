import { View, Text, Dimensions } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import loading from "../assets/Animation - 1700399421521.json";

const { width, height } = Dimensions.get("window");
export default function Loading () {
  return (
    <View className='flex justify-center items-center bg-pink-300 mt-30'>
      <LottieView 
        source={loading}
        loop
        autoPlay
        style={{
          width:width,
          height: height*0.23,
        }}
      />
    </View>
  );
}
