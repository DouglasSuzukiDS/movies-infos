import { create } from "zustand"
import { Movie } from "../types/movie"
import { api } from "../utils/api"
import { moviePosterUrl } from "../utils/movie-poster-url"
import { MovieDetails } from "../types/movie-details"
import { MovieWatched } from "../types/movie-watched"
import { server } from "../utils/server"

type MovieState = {
   movies: Movie[]
   setMovies: (movies: Movie[]) => void

   moviesWatched: MovieWatched[]
   setMoviesWatched: (moviesWatched: MovieWatched[]) => void

   getMovies: () => void

   getMovieDetails: (id: string) => Promise<MovieDetails | null>

   searchMovies: (search: string) => Promise<Movie | null>

   // Watched 

   getMovieWatched: (movieId: number) => Promise<MovieWatched | null>

   getMoviesWatched: () => void

   verifyMovieWatched: (movieId: number) => void

}

export const useMovieStore = create<MovieState>((set, get) => ({
   movies: [],
   setMovies: (movies) => set({ movies }),

   moviesWatched: [],
   setMoviesWatched: (moviesWatched) => set({ moviesWatched }),

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

   getMovieWatched: async (movieId: number) => {
      const response = await api.get(`/movies?id=${movieId}`)
      console.log(response.data.length)
      if (response) {
         alert(response.data)
         return response.data as MovieWatched
      }

      return null
   },

   getMoviesWatched: async () => {
      const response = await api.get('/movies')

      const moviesWatchedList: MovieWatched[] = response.data

      set({ moviesWatched: moviesWatchedList })
   },

   verifyMovieWatched: async (movieId: number) => {
      const { getMovieWatched, getMoviesWatched } = get()

      const response = await getMovieWatched(movieId)

      if (response) {
         await server.put(`/movies/${movieId.toString()}`, {
            ...response,
            watched: !response.watched
         })
      } else {
         await server.post('/movies', {
            id: movieId.toString(),
            watched: true
         })
      }

      getMoviesWatched()
   },


}))