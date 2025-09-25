import { MovieDetails } from "@/src/types/movie-details"
import { ScrollView, Text, View } from "react-native"

type Props = {
   title: string
   movie: MovieDetails
   keyToMap: keyof Pick<MovieDetails, 'genres' | 'spoken_languages' | 'origin_country'>
}

export const MovieBadgesItems = ({ title, movie, keyToMap }: Props) => {
   return (
      <View className="bg-slate-200 rounded-lg p-4">
         <Text className='text-lg font-bold text-gray-800 mb-2'>
            {title}: </Text>

         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}>
            {movie[keyToMap]?.map((item: any, index: number) => {
               // Para genres e spoken_languages, usar item.name
               // Para origin_country, usar o próprio item (string)
               const displayText = typeof item === 'string' ? item : item.name;
               const keyValue = typeof item === 'string' ? item : item.id || index;

               return (
                  <Text
                     key={keyValue}
                     className='text-blue-600 bg-blue-200 px-4 py-2 rounded-full'>
                     {displayText}
                  </Text>
               );
            })}

         </ScrollView>
      </View>
   )
}