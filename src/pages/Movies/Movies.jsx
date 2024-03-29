import { useState, useEffect } from 'react';
import { fetchSearchApi } from 'api/fetchApi';
import { useSearchParams, useLocation } from 'react-router-dom';
import toastr from 'toastr';
import {
  MoviesForm,
  MoviesInput,
  MoviesList,
  MoviesSearchButton,
  MovieTitle,
  LinkItem,
} from '../Pages.styled';
import NoImage from '../../image/NoImage.svg.png';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const inputParam = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!inputParam) {
      return;
    }
    async function fetch() {
      try {
        const { results } = await fetchSearchApi(inputParam);
        if (results.length < 1) {
          toastr.warning("We can't find it, try again");
        }
        setMovies(results);
      } catch (error) {
        toastr.warning('Something wrong, try again please');
      }
    }
    fetch();
  }, [inputParam]);

  const onSubmit = e => {
    if (!input) {
    toastr.warning('Please fill in the gap');
    }
    e.preventDefault();
    setSearchParams(input !== '' ? { filter: input } : {});
    setInput('');
  };

  const onChangeInput = value => {
    setInput(value);
  };

  if (!movies) {
    return null;
  }

  return (
    <>
      <MoviesForm onSubmit={onSubmit}>
        <MoviesInput
          type="text"
          value={input}
          name="input"
          onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
        />
        <MoviesSearchButton type="submit">Search</MoviesSearchButton>
      </MoviesForm>
      {movies && (
        <MoviesList>
          {movies.map(movie => {
            let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath = NoImage;
            }
            return (
              <LinkItem
                key={movie.id}
                to={`${movie.id}`}
                state={{ from: location }}
              >
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
