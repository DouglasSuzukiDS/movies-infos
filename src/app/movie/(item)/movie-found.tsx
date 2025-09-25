import { MovieDetails } from "@/src/types/movie-details"
import { moviePosterUrl } from "@/src/utils/movie-poster-url"
import { Image, ScrollView, Text, View } from "react-native"
import { MovieInfoCard } from "../../../components/movie/movie-info-card"
import { MovieBadgesItems } from "./movie-badges-items"
import { formatMoney } from "@/src/utils/format-money"

type Props = {
   movie: MovieDetails
}
export const MovieFound = ({ movie }: Props) => {
   return (
      <ScrollView className="flex-1 gap-6 bg-[#C6C6C7]">
         <Image
            source={{ uri: moviePosterUrl(movie.backdrop_path!) }}
            className="w-full h-96 object-cover"
         />

         {/* Content Area */}
         <View className='gap-6 px-6 mt-6'>
            <MovieInfoCard movie={movie} />

            {/* Genres */}
            <MovieBadgesItems title="Gêneros" movie={movie} keyToMap="genres" />

            {/* Language */}
            <MovieBadgesItems title="Idiomas" movie={movie} keyToMap="spoken_languages" />

            {/* Overview */}
            <View className="bg-slate-200 rounded-lg p-4">
               <Text className="text-lg font-bold text-gray-800 mb-2">Sinopse</Text>

               <Text className='text-lg'>
                  {movie.overview}
               </Text>
            </View>

            {/* Infos */}
            <View className="bg-slate-200 rounded-lg p-4">
               <Text className="text-lg font-bold text-gray-800 mb-2">Informações</Text>

               {/* Original Title */}
               <View className="mb-3">
                  <Text className='text-lg font-bold mb-1'>
                     Título original:
                  </Text>
                  <Text className="text-lg" numberOfLines={0}>
                     {movie.original_title}
                  </Text>
               </View>

               {/* Budget */}
               <View className='justify-between flex-row'>
                  <Text className='text-lg font-bold'>
                     Orçamento: </Text>

                  <Text>
                     {formatMoney(movie.budget)}
                  </Text>
               </View>

               {/* Revenue */}
               <View className='justify-between flex-row'>
                  <Text className='text-lg font-bold'>
                     Receita:</Text>

                  <Text>
                     {formatMoney(movie.revenue)}
                  </Text>
               </View>

            </View>
         </View>


      </ScrollView>
   )
}