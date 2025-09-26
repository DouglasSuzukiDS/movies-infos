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
   const { userMoviesWatch, toggleUserMovieWatch, toggleUserMovieWillWatch } = useMovieStore()

   const [watched, setWatched] = useState(false)
   const [willWatch, setWillWatch] = useState(false)

   useEffect(() => {
      const movie = userMoviesWatch.find(movie => movie.movieId === movieId)

      setWatched(movie?.watched || false)
      setWillWatch(movie?.willWatch || false)
   }, [userMoviesWatch])

   return (
      <View className="flex-row justify-between items-center">
         <TouchableOpacity
            onPress={() => toggleUserMovieWatch(movieId)}
            className="flex-row items-center gap-2">
            <Text>
               <FontAwesome6
                  name="face-smile-wink"
                  size={24}
                  color={watched ? "#2563EB" : "#4B5563"} />
            </Text>

            <Text
               className={`text-xl font-bold ${watched ? "text-blue-600" : "text-gray-600"}`}>
               Já assisti
            </Text>
         </TouchableOpacity>

         <TouchableOpacity
            onPress={() => toggleUserMovieWillWatch(movieId)}
            className="flex-row items-center gap-2">
            <Text>
               <FontAwesome6
                  name="ticket"
                  size={24}
                  color={willWatch ? "#2563EB" : "#4B5563"} />
            </Text>

            <Text
               className={`text-xl font-bold ${willWatch ? "text-blue-600" : "text-gray-600"}`}>
               Assistirei
            </Text>
         </TouchableOpacity>
      </View>
   )
}