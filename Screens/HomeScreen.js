import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovies from "../Components/TrendingMovies";
import MovieList from "../Components/MovieList";

const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState ([1,2,3,4,5])
  const [upComing, setUpComing] = useState ([1,2,3,4,5])
  const [topRated, setTopRated] = useState ([1,2,3,4,5])
  return (
    <View className="flex-1 bg-pink-300">
      {/*search bar and the logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="Light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-pink-500 font-bold text-3xl">
            <Text className="text-pink-700 font-bold text-3xl">A</Text>nime
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom:10}}
       >
{/*Trending movies carouel */}
      <TrendingMovies data={trending} />
    {/* upcoming movies row */}
    <MovieList title="upComing" data={upComing}/>
    <MovieList title="topRated" data={topRated}/>
      </ScrollView>
    </View>
  );
}
