import { Image, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { moviePosterUrl } from "../../utils/movie-poster-url"
import { FontAwesome6 } from '@expo/vector-icons'
import { useRouter } from "expo-router"
import { Movie } from "../../types/movie"
import { format } from 'date-fns'
import { MovieWatch } from "@/src/app/movie/(item)/movie-watch"

type Props = {
   movie: Movie
}

export const MovieCard = ({ movie }: Props) => {
   const router = useRouter()

   const handleClick = () => {
      router.push(`/movie/${movie.id}`)
   }

   return (
      <View className="flex-row w-full h-[200px] bg-slate-200 border border-white rounded-lg shadow-gray-900 shadow-md">
         <Image
            source={{ uri: moviePosterUrl(movie.poster_path!) }}
            className="w-[120px] h-full rounded-tl-lg rounded-bl-lg" />

         <View className="flex-1 p-3">
            <Text
               className="text-lg font-bold text-gray-800 truncate">
               {movie.title}
            </Text>

            <View className="w-full flex-row justify-between items-center">
               <Text className="text-xl text-blue-600 font-bold">
                  📆 {format(new Date(movie.release_date), 'dd/MM/yyyy')}
               </Text>
               <Text className="text-xl text-blue-600 font-bold">
                  ⭐ {movie.vote_average.toFixed(1)} / 10
               </Text>
            </View>

            <Text className="flex-1 text-gray-700 truncate" numberOfLines={4}>
               {movie.overview}
            </Text>

            <View className="flex-row justify-between items-center">
               <MovieWatch movieId={movie.id} />

               <TouchableOpacity
                  onPress={handleClick}
                  className="flex-row justify-center items-center gap-2">
                  <Text className="text-xl text-blue-600 font-bold">
                     Ver mais
                  </Text>

                  <FontAwesome6 name="arrow-right" size={24} color="#2563EB" />
               </TouchableOpacity>
            </View>
         </View>

      </View>
   )
}