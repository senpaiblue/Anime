import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import ShoyaBoy from "../assets/Shoya.jpg";

export default function Cast({ navigation, cast }) {
  let personName = "Shoya";
  let Role = "Suicidal Boy";
  return (
    <View className="my-8 spcae-y-2">
      <Text className="text-white font-semibold text-xl mb-5 ml-5">
        Main Characters
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        { cast && cast.map((person,index) => {
          return (
            <TouchableOpacity
              key={index}
              className="px-5 items-center"
              onPress={() => navigation.navigate("Person",person)}
            >
              <View className="overflow-hidden rounded-full h-20 w-20 border border-pink-500">
                <Image source={ShoyaBoy} className="h-24 w-20 rounded-full" />
              </View>
              <Text className="text-white font-semibold text-lg">
                {personName}
              </Text>
              <Text className="text-white font-normal text-sm">{Role}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
