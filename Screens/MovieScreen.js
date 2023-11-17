import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import SilentVoice from "../assets/SilentVoice.jpg";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../Components/Cast";
import MovieList from "../Components/MovieList";

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const MovieName = "A Silent Voice";
  const [cast,setCast] = useState([1,2,3,4,5])
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [SimilarMovies,SetSimilarMovies]=useState([1,2,3,4,5])
  const { params: item } = useRoute();
  useEffect(() => {
    //call the movie details api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-pink-300"
    >
      {/*back button */}
      <View className="w-full">
        <SafeAreaView className=" absolute z-20 w-full flex-row justify-between items-center px-5 mt-5">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-pink-500 rounded-xl p-1"
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon
              size="35"
              strokeWidth={2.5}
              color={isFavourite ? "red" : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={SilentVoice}
            style={{
              width,
              height: height * 0.55,
            }}
          />
          <LinearGradient
            colors={["#FFF", "rgba(0, 0, 0, 0.00)", "#F9A8D4"]}
            style={{ width, height: height * 0.55 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0 "
          />
        </View>
      </View>

      {/*Movie Details */}
      <View className="mt-[-40px] space-y-3">
        <Text className="text-white font-bold text-3xl text-center">
          {MovieName}
        </Text>
        <Text className="text-white font-regular text-[16px] text-center">
          Depression• Romance • Must watch with your gf :)
        </Text>
        <Text className='text-white font-regular text-[13px] text-left mx-4'>
        A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption. A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away.
        </Text>
      </View>
      {/*Movie cast*/}
      <Cast navigation={navigation} cast={cast} />
      {/* Similar Movies*/}
      <MovieList title= "SimilarMovies" hideSellAll={true} data={SimilarMovies} />
    </ScrollView>
  );
}
