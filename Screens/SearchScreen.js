import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import chihara from "../assets/chihara.jpg";
import sho from "../assets/sho.jpg";

var { width, height } = Dimensions.get("window");
export default function SearchScreen() {
  const navigation = useNavigation();
  const [Results, setResults] = useState(['chihara','chihara','chihara','chihara','chihara','chihara']);
  const description =
    'The girl sitting next to me at the start of the new semester is the rumored "landmine" girl… but… is Chihara-san really the "landmine" that everyone says she is?';
  return (
    <SafeAreaView className="bg-pink-300 flex-1">
      <View className="border-2 border-pink-500 py-2 px-4 m-5 rounded-3xl flex-row justify-between">
        <TextInput
          placeholder="Search Movies"
          placeholderTextColor={"white"}
          className="text-lg "
        />
        <TouchableOpacity
          className="rounded-full bg-pink-400 items-center p-2"
          onPress={() => navigation.navigate("Home")}
        >
          <XMarkIcon size={25} color="white" />
        </TouchableOpacity>
      </View>
      {/* Search Results */}
      {Results.length > 0 ? (
        <ScrollView
          showVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-2"
        >
          <View>
            <Text className="text-white font-medium text-lg mx-5">
              Results ({Results[0]})
            </Text>
          </View>
          <View className="flex-row justify-between flex-wrap">
            {Results.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => navigation.push("Movie")}>
                  <View className="space-y-2 mb-4 border border-pink-500 rounded-3xl bg-pink-400 ">
                    <Image
                      className="rounded-3xl opacity-90"
                      source={chihara}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    />

                    <Text className="px-3 text-white text-lg">Chihara-San</Text>
                    <Text className="px-3 pb-2 text-white text-sm">
                      {description.length > 24
                        ? description.slice(0, 24) + "..."
                        : { description }}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className='space-y-8'>
          <Text className='text-white text-center font-semibold text-xl'> No Movies Found!</Text>
          <View className="flex-row justify-center items-center  opacity-80 ">
            <Image
              className="rounded-xl items-center"
              source={sho}
              style={{ width: width * 0.8, height: height * 0.4 }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
