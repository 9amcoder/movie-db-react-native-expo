const baseUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w185';

// Use the posterUrl to display the movie poster image
export const posterUrl = `${baseUrl}${posterSize}`;

const API_KEY = '6fb342b86f3dbe8bc8d7518452f7b5f5';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export interface MovieItem {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }