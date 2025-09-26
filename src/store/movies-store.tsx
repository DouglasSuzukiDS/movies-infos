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

   searchMovies: (search: string) => Promise<Movie[] | null>

   // Watched 
   userMoviesWatch: UserMovieWatch[]
   setUserMoviesWatch: (moviesWatch: UserMovieWatch[]) => void

   getUserMoviesWatch: () => void

   getUserMovieInfo: (movieId: number) => Promise<UserMovieWatch | null>

   toggleUserMovieWatch: (movieId: number) => void

   toggleUserMovieWillWatch: (movieId: number) => void

   deleteUserMovieWatch: (movieId: number) => void
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

      set({ movies: moviesList })
   },

   getMovieDetails: async (id: string) => {
      const response = await api.get(`/movie/${id}`)

      const movieDetails: MovieDetails = {
         ...response.data,
         poster_path: moviePosterUrl(response.data.poster_path || '')
      }

      return movieDetails
   },

   searchMovies: async (search: string) => {
      const response = await api.get(`/search/movie?query=${search}`)

      const movies = response.data.results.map((movie: Movie) => {
         return {
            ...movie,
            poster_path: moviePosterUrl(movie.poster_path || '')
         }
      })

      return movies
   },

   // Watched
   userMoviesWatch: [],
   setUserMoviesWatch: (userMoviesWatch: UserMovieWatch[]) => set({ userMoviesWatch }),

   getUserMoviesWatch: async () => {
      const response = await server.get('/movies')

      set({ userMoviesWatch: response.data || [] })
   },

   getUserMovieInfo: async (movieId: number) => {
      const { userMoviesWatch } = get()

      const movieInfo = userMoviesWatch.find((movie) => {
         return movie.movieId === movieId
      }) || null

      return movieInfo
   },

   toggleUserMovieWatch: async (movieId: number) => {
      const { getUserMovieInfo, getUserMoviesWatch, deleteUserMovieWatch } = get()

      const movie = await getUserMovieInfo(movieId)

      if (movie !== null) {
         await server.put(`/movies/${movie.id}`, {
            ...movie,
            watched: movie.watched ? false : true,
         })
      } else {
         await server.post('/movies', {
            movieId,
            watched: true,
            willWatch: false
         })
      }

      await getUserMoviesWatch()
      await deleteUserMovieWatch(movieId)
   },

   toggleUserMovieWillWatch: async (movieId: number) => {
      const { getUserMovieInfo, getUserMoviesWatch, deleteUserMovieWatch } = get()

      const movie = await getUserMovieInfo(movieId)

      if (movie !== null) {
         await server.put(`/movies/${movie.id}`, {
            ...movie,
            willWatch: movie.willWatch ? false : true,
         })
      } else {
         await server.post('/movies', {
            movieId,
            watched: false,
            willWatch: true
         })
      }

      await getUserMoviesWatch()
      await deleteUserMovieWatch(movieId)
   },

   deleteUserMovieWatch: async (movieId: number) => {
      const { getUserMovieInfo, getUserMoviesWatch } = get()

      const movie = await getUserMovieInfo(movieId)

      if (movie && movie.watched === false && movie.willWatch == false) {
         await server.delete(`/movies/${movie.id}`)
      }

      await getUserMoviesWatch()
   }

}))