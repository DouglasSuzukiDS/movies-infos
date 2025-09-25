import { MovieDetails } from "@/src/types/movie-details"
import { moviePosterUrl } from "@/src/utils/movie-poster-url"
import { FontAwesome6 } from "@expo/vector-icons"
import { format } from "date-fns"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { MovieWatch } from "../../app/movie/(item)/movie-watch"

type Props = {
   movie: MovieDetails
}

export const MovieInfoCard = ({ movie }: Props) => {
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

            <View>
               <Text className="flex-1 text-gray-700">
               </Text>
               <FontAwesome6 name="clock" size={16} color="#555" />
            </View>

            <Text>{movie.id}</Text>

            <MovieWatch movieId={movie.id} />
         </View>
      </View>
   )
}