import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { ChevronDoubleLeftIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import ShoyaNew from "../assets/ShoyaNew.jpg";
import { LinearGradient } from "expo-linear-gradient";
import MovieList from "../Components/MovieList";

var { width, height } = Dimensions.get("window");
export default function PersonScreen() {
  const navigation = useNavigation();
  const [personMovies,setpersonMovies]=useState([1,2,3,4,5])
  const [isFavourite, toggleFavourite] = useState(false);
  return (
    <ScrollView
      className="flex-1 bg-pink-300"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back Button */}
      <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-5 mt-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-pink-500 rounded-xl p-1"
        >
          <ChevronDoubleLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <HeartIcon
            size="35"
            strokeWidth={2.5}
            color={isFavourite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* Person Details */}
      <View>
        <View className="flex-row justify-center ">
          <View className=" items-center overflow-hidden w-64 h-64 border-2 border-pink-400 rounded-full">
            <Image
              source={ShoyaNew}
              className="rounded-full"
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
            <LinearGradient
              colors={["#FFF", "rgba(0, 0, 0, 0.00)", "#F9A8D4"]}
              style={{ width, height: height * 0.41 }}
              start={{ x: 0.5, y: 0.2 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0 "
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-white font-bold text-2xl flex-row text-center">
            Shoya Ishida
          </Text>
          <Text className="text-white font-normal text-xl flex-row text-center">
            Lead Male
          </Text>
        </View>
        <View className="mt-6 bg-pink-400 p-4 mx-5 rounded-full flex-row justify-evenly items-center">
          <View className=" border-r-2 items-center px-6 border-pink-600">
            <Text className="text-white font-regular text-lg">Gender</Text>
            <Text className="text-white font-regular text-sm">Male</Text>
          </View>
          <View className=" border-r-2 items-center px-6 border-pink-600">
            <Text className="text-white font-regular text-lg">Role</Text>
            <Text className="text-white font-regular text-sm">
              Depressed kid
            </Text>
          </View>
          <View className=" items-center px-6">
            <Text className="text-white font-regular text-lg">Age</Text>
            <Text className="text-white font-regular text-sm">15</Text>
          </View>
        </View>
        <View className='mt-6 mx-7'>
          <Text className='text-white font-semicold text-2xl mb-3'>Biography</Text>
          <Text className='text-white font-normal text-sm'>
            Shōya Ishida (石田 将也, Ishida Shōya?) is the male protagonist and
            main character of the Koe no Katachi series. He was once the bully
            of Shōko Nishimiya during sixth grade, a fact he grows to deeply
            regret and struggles to come to terms with as he befriends Shōko
            several years later.{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
