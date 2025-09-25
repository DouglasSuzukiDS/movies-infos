import { useMovieStore } from "@/src/store/movies-store"
import { server } from "@/src/utils/server"
import { FontAwesome6 } from "@expo/vector-icons"
import { set } from "date-fns"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

type Props = {
   movieId: number
}

export const MovieWatch = ({ movieId }: Props) => {
   const { movies, setMovies, getMovies } = useMovieStore()

   const [watched, setWatched] = useState(false)
   const [willWatch, setWillWatch] = useState(false)

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
      // getUserMovieInfo(movieId)
      //    .then(res => {
      //       if (res !== null) {
      //          setWatched(res.watched || false)
      //          setWillWatch(res.willWatch || false)
      //       }
      //    })
   }, [])

   return (
      <View className="flex-row justify-between items-center">

         <TouchableOpacity
            // onPress={() => toggleMovieWatched(movieId)}
            // onPress={fetchWatchedStatus}
            className="flex-row items-center gap-2">
            <View className="flex-row items-center gap-2">
               <FontAwesome6
                  name="face-smile-wink"
                  size={24}
                  color={watched ? "#2563EB" : "#4B5563"} />

               <Text
                  className={`text-xl font-bold ${watched ? "text-blue-600" : "text-gray-600"}`}>
                  Já assisti
               </Text>
            </View>

         </TouchableOpacity> :

         <TouchableOpacity
            // onPress={() => toggleMovieWatched(movieId)}
            // onPress={fetchWatchedStatus}
            className="flex-row items-center gap-2">
            <View className="flex-row items-center gap-2">
               <FontAwesome6
                  name="ticket"
                  size={24}
                  color={willWatch ? "#2563EB" : "#4B5563"} />

               <Text
                  className={`text-xl font-bold ${willWatch ? "text-blue-600" : "text-gray-600"}`}>
                  Assistirei
               </Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}