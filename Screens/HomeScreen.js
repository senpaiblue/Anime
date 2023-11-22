import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
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
import { useNavigation } from "@react-navigation/native";
import Loading from "../Components/Loading";
import bg from '../assets/mainbodybg.jpg'

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3, 4, 5]);
  const [upComing, setUpComing] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();
  return (
    <View className='flex-1'>
      <ImageBackground
        className="flex-1"
        source={bg}
      
      >
        {/*search bar and the logo */}
        <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
          <StatusBar style="Light" />
          <View className="flex-row justify-between items-center mx-4">
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
            <Text className="text-red-900 font-bold text-3xl">
              <Text className="text-red-900 font-bold text-3xl">A</Text>nime
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {loading ? (
          <Loading />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {/*Trending movies carouel */}
            <TrendingMovies data={trending} />
            {/* upcoming movies row */}
            <MovieList title="upComing" data={upComing} />
            <MovieList title="topRated" data={topRated} />
          </ScrollView>
        )}
      </ImageBackground>
    </View>
  );
}
