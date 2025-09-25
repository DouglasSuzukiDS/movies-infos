import { Movie } from "./movie"

export type Genre = {
   id: number
   name: string
}

export type SpokenLanguage = {
   english_name: string
   iso_639_1: string
   name: string
}

/*id: number
adult: boolean
backdrop_path: string | null
original_language: string
original_title: string
popularity: number
overview: string
poster_path: string | null
release_date: string
title: string
video: boolean
vote_average: number
vote_count: number*/

export type MovieDetails = Movie & {
   belongs_to_collection: null | any
   budget: number
   genres: Genre[]
   homepage: string | null
   imdb_id: string | null
   origin_country: string[]
   revenue: number
   runtime: number
   spoken_languages: SpokenLanguage[]
   status: string
   tagline: string | null
}