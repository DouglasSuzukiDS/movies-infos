import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'
import { InputSearch } from '../components/input-search';
import { MovieList } from '../components/movie/movie-list';


export default function HomePage() {

   return (
      <View className="flex-1 px-6 bg-[#C6C6C7]">
         <StatusBar style="dark" />

         {/* Header */}
         <View className="pt-12 pb-4 shadow-sm">
            <Text className="text-2xl font-bold text-gray-800">
               🎬 Movies Info
            </Text>

            <Text className="text-gray-600 mt-1">Filmes populares</Text>
         </View>

         <InputSearch />

         {/* Movies List */}
         <MovieList />
      </View >
   );
}