import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useMovieStore } from "../../store/movies-store"
import { useEffect } from "react"
import { MovieCard } from "./movie-card"

export const MovieList = () => {
   const { movies, getMovies } = useMovieStore()

   useEffect(() => {
      getMovies()
   }, [movies])

   return (
      <SafeAreaView className="flex-1">
         <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            // ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
            contentContainerStyle={{ paddingVertical: 0, gap: 24 }}
         />
      </SafeAreaView>
   )
}