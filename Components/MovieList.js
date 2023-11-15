import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableNativeFeedback,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Vanitas from "../assets/Vanitas.jpg";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
export default function MovieList({ title, data }) {
  const navigation = useNavigation();
  const MovieName = "The Case Study Of Vanitas";
  return (
    <View className="mb-8 spcae-y-4">
      <View className="flex-row justify-between items-center mb-4 mx-5">
        <Text className="text-white text-xl font-bold">{title}</Text>
        <TouchableOpacity>
          <Text className="text-white text-xl font-bold">See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableNativeFeedback
              key={index}
              onPress={navigation.navigate("Movie", item)}
            >
              <View className='flex justify-between items-center px-2'>
                <View className="flex justify-center items-start gap-1">
                  <Image
                    source={Vanitas}
                    className="rounded-3xl"
                    style={{
                      width: width * 0.33,
                      height: height * 0.22,
                    }}
                  />
                  <Text className="text-white font-semibold">
                    {MovieName.length > 14
                      ? MovieName.slice(0, 14) + "..."
                      : MovieName}
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
