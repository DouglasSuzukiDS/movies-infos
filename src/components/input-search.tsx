import { useRouter } from "expo-router"
import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useMovieStore } from "../store/movies-store"

export const InputSearch = () => {
   const { getMovieDetails } = useMovieStore()
   const router = useRouter()

   const [text, setText] = useState('')

   const handleSearch = () => {
      if (text === '') return

      getMovieDetails(text).then((movie) => {
         if (movie) {
            setText('')
            console.log('Movie found:', movie)
         } else {
            alert('Filme não encontrado')
         }
      })
   }

   return (
      <View className='flex flex-row justify-center items-center w-full gap-4'>
         <TextInput
            placeholder='Pesquisar...'
            value={text}
            onChangeText={setText}
            className='flex-1 font-bold p-2 bg-slate-200 border border-white rounded-lg'
         />

         <TouchableOpacity
            onPress={handleSearch}
            disabled={text === '' ? true : false}
            className="bg-blue-600 px-6 py-3 rounded-lg">
            <Text className="text-white font-medium">Pesquisar</Text>
         </TouchableOpacity>
      </View>
   )
}