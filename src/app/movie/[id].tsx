import { useLocalSearchParams, router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { MovieDetails } from '@/src/types/movie-details';
import { useMovieStore } from '@/src/store/movies-store';
import { MovieNotFound } from './(item)/movie-not-found';
import { MovieFound } from './(item)/movie-found';

export default function MovieDetailsPage() {
   const { id } = useLocalSearchParams()
   const { getMovieDetails } = useMovieStore()
   const navigation = useNavigation()
   const [movie, setMovie] = useState<MovieDetails | null>(null)

   useEffect(() => {
      getMovieDetails(id as string)
         .then(res => {
            setMovie(res)
            // Atualiza o título do header dinamicamente
            if (res) {
               navigation.setOptions({
                  headerTitle: res.title,
                  headerShown: true,
                  headerBackTitle: 'Voltar',
                  headerTintColor: '#2563eb',
                  headerStyle: {
                     backgroundColor: '#ffffff',
                  },
                  headerTitleStyle: {
                     fontWeight: 'bold',
                     fontSize: 18,
                  }
               })
            }

            console.log('🎬 Movie details loaded:', res)
         })
   }, [id, navigation])

   return (
      movie ? <MovieFound movie={movie} /> : <MovieNotFound />
   )

}