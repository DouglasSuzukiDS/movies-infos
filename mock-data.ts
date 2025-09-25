import { Movie } from "./src/types/movie";

type genreIds = {
   genre_ids: number[]
}
export const mockMovie: Movie & genreIds = {
   "adult": false,
   "backdrop_path": "/an5wpqvDiEz4LGVLLnfnGFoVqOt.jpg",
   "genre_ids": [
      28,
      16,
      35,
      14,
      12
   ],
   "id": 116315,
   "original_language": "ja",
   "original_title": "ワンピース 倒せ！海賊ギャンザック",
   "overview": "While Luffy and his crew of Zoro and Nami are starving on their small boat, they are attacked by a large monster. Nami is taken away, while Luffy and Zoro wash up on shore. There they meet a young girl, Medaka, and learn of the sad history of the island. The evil Pirate Ganzack has taken away all the men in the village and enslaved them, including Medaka's father. Now Luffy, Zoro, and Medaka must infiltrate Ganzack's base in order to rescue the villagers and Nami.",
   "popularity": 3.1328,
   "poster_path": "/98ZSnYpfltah6YuJTkiwHV0O739.jpg",
   "release_date": "1998-07-26",
   "title": "One Piece: Defeat the Pirate Ganzack!",
   "video": false,
   "vote_average": 6.6,
   "vote_count": 57
}