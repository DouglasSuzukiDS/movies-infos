import { create } from "zustand"
import { Movie } from "../types/movie"
import { api } from "../utils/api"
import { moviePosterUrl } from "../utils/movie-poster-url"
import { MovieDetails } from "../types/movie-details"
import { server } from "../utils/server"
import { UserMovieWatch } from "../types/user-movie-watch"

type MovieState = {
   movies: Movie[]
   setMovies: (movies: Movie[]) => void

   getMovies: () => void

   getMovieDetails: (id: string) => Promise<MovieDetails | null>

   searchMovies: (search: string) => Promise<Movie | null>

   // Watched 
   moviesWatched: UserMovieWatch[]
   setMoviesWatched: (moviesWatched: UserMovieWatch[]) => void
}

export const useMovieStore = create<MovieState>((set, get) => ({
   movies: [],
   setMovies: (movies) => set({ movies }),



   getMovies: async () => {
      const response = await api.get('/movie/popular');

      const moviesList = response.data.results.map((movie: Movie) => {
         return {
            ...movie,
            poster_path: moviePosterUrl(movie.poster_path || '')
         }
      })

      // console.log(JSON.stringify(moviesList, null, 2));

      set({ movies: moviesList })
   },

   getMovieDetails: async (id: string) => {
      const response = await api.get(`/movie/${id}`)

      const movieDetails: MovieDetails = {
         ...response.data,
         poster_path: moviePosterUrl(response.data.poster_path || '')
      }

      console.log('Movie Details:', JSON.stringify(movieDetails, null, 2))

      return movieDetails
   },

   searchMovies: async (search: string) => {
      const response = await api.get(`/search/movie?query=${search}`)

      const movieDetails: Movie = {
         ...response.data,
         poster_path: moviePosterUrl(response.data.poster_path || '')
      }

      console.log('Movie Details:', JSON.stringify(movieDetails, null, 2))

      return movieDetails
   },

   // Watched
   moviesWatched: [],
   setMoviesWatched: (moviesWatched) => set({ moviesWatched }),

}))