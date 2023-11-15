import {View, Text, ScrollView, TouchableOpacity,} from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'

export default function MovieScreen() {
  const navigation=useNavigation()
  const [isFavourite, toggleFavourite] = useState(false)
  const {params: item} = useRoute()
  useEffect(() =>{
    //call the movie details api
  }, [item])
  return( 
    <ScrollView
    contentContainerStyle={{paddingBottom: 20}}
    className='flex-1 bg-pink-300'
    >
    {/*back button */}
    <View className='w-full'>
      <SafeAreaView className='w-full flex-row justify-between items-center px-5 mt-5'>
        <TouchableOpacity onPress={()=>navigation.goBack()} className='bg-pink-500 rounded-xl p-1'>
           <ChevronLeftIcon size="28" strokeWidth={2.5} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}> 
          <HeartIcon size="35" strokeWidth={2.5} color={isFavourite?'red':'white'}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
    </ScrollView>
  )
}