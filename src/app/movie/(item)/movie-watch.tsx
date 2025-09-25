import { useMovieStore } from "@/src/store/movies-store"
import { server } from "@/src/utils/server"
import { FontAwesome6 } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

type Props = {
   movieId: number
}

export const MovieWatch = ({ movieId }: Props) => {
   const { movies, setMovies, getMovies, getMovieWatched, verifyMovieWatched } = useMovieStore()

   const [watched, setWatched] = useState(false)

   const handleWatchPress = async () => {
      try {
         const existingMovieResponse = await server.get(`/movies/${movieId}`)

         if (existingMovieResponse.data) {
            await server.put(`/movies/${movieId}`, {
               ...existingMovieResponse.data,
               watched: !existingMovieResponse.data.watched
            })

            setWatched(!existingMovieResponse.data.watched)
         } else {
            await server.post('/movies', {
               id: movieId,
               watched: true
            })
         }

         getMovies()
      } catch (error: any) {
         console.error('❌ ERRO ao alterar status:', error.message)
      }
   }

   const fetchWatchedStatus = async () => {
      try {
         const response = await server.get(`/movies?id=${movieId}`)
         const movie = response.data[0]; // Primeiro resultado

         // console.log('📊 Resultado da busca:', response.data)

         if (movie) {
            // console.log('🎯 Filme encontrado:', movie)

            setWatched(movie.watched)
         } else {
            console.log('⚠️ Filme não encontrado')

            setWatched(false)
         }

      } catch (error: any) {
         console.error('❌ ERRO ao buscar status:', error.message)

         setWatched(false)
      }
   }

   useEffect(() => {
      getMovieWatched(movieId)
         .then(res => setWatched(res?.watched || false))
   }, [])

   return (
      <View className="flex-row justify-between items-center">
         {watched ?
            <TouchableOpacity
               onPress={() => verifyMovieWatched(movieId)}
               // onPress={fetchWatchedStatus}
               className="flex-row items-center gap-2">
               <FontAwesome6 name="face-smile-wink" size={24} color="#2563eb" />

               <Text className="text-xl text-blue-600 font-bold">Já assisti</Text>
            </TouchableOpacity> :

            <TouchableOpacity
               onPress={() => verifyMovieWatched(movieId)}
               // onPress={fetchWatchedStatus}
               className="flex-row items-center gap-2">
               <FontAwesome6 name="ticket" size={24} color="#2563eb" />

               <Text className="text-xl text-blue-600 font-bold">Assistirei</Text>
            </TouchableOpacity>
         }

      </View>
   )
}