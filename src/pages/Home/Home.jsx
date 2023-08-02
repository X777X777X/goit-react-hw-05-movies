import { fetchTrendingApi } from '../../api/fetchApi';
import { useState, useEffect } from 'react';
import toastr from 'toastr';
import NoImage from '../../image/NoImage.svg.png';

import {
  MoviesList,
  LinkItem,
  MovieTitle,
  TrendingTitle,
} from '../Pages.styled';

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
        toastr.warning('Something wrong, try again');
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
               posterPath = NoImage;
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
