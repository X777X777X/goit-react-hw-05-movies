import { fetchTrendingApi } from '../../api/fetchApi';
import { useState, useEffect } from 'react';
import toastr from 'toastr';

import {
  MoviesList,
  LinkItem,
  MovieTitle,
  TrendingTitle,
} from '../Pages.styled';

// import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    async function moviesFetch() {
      try {
        const { results } = await fetchTrendingApi();
        if (results < 1) {
          toastr.warning("We can't find it, try again");
        }
        setTrendings(results);
      } catch {
        toastr.warning('Something wrong, try again please');
      }
    }
    moviesFetch();
  }, []);

  return (
    <>
      <TrendingTitle>Trending movies</TrendingTitle>
      {trendings && (
        <MoviesList>
          {trendings.map(movie => {
            let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath =
                'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';
            }

            return (
              <LinkItem key={movie.id} to={`/movies/${movie.id}`}>
                <img src={posterPath} width="400" alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
              </LinkItem>
            );
          })}
        </MoviesList>
      )}
    </>
  );
};