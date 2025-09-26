import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useMovieStore } from "../store/movies-store"

export const InputSearch = () => {
   const { movies, setMovies, getMovies, getMovieDetails, searchMovies } = useMovieStore()
   const router = useRouter()

   const [text, setText] = useState('')

   const handleSearch = () => {
      if (text === '') return

      searchMovies(text)
         .then(res => {
            setMovies(res ?? [])
         })
   }

   useEffect(() => {
      getMovies()
   }, [text])

   return (
      <View className='flex flex-row justify-center items-center w-full gap-4'>
         <TextInput
            placeholder='Pesquisar ...'
            clearButtonMode="always"
            value={text}
            onChangeText={setText}
            className='flex-1 font-bold py-3 bg-slate-200 border-0 rounded-lg'
         />

         <TouchableOpacity
            onPress={handleSearch}
            className="bg-blue-600 px-6 py-3 rounded-lg">
            <Text className="text-white font-medium">Pesquisar</Text>
         </TouchableOpacity>
      </View>
   )
}