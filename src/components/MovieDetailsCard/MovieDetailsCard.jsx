import {
  MovieDetailsImg,
  MovieDetailsAbout,
  MovieDetailsTitle,
  MovieDetailsScore,
  MovieDetailsOverview,
  MovieDetailsOverviewText,
  MovieDetailsGenres,
  MovieDetailsGenresText,
  MovieDetailsCard,
} from './MovieDetailsCard.styled';
import PropTypes from 'prop-types';
import NoImage from '../../image/NoImage.svg.png';

export const MovieCard = ({ movie }) => {
  const { overview, title, release_date, genres, vote_average } = movie;

  let posterPath;
  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
  } else {
  posterPath = NoImage;

  }
  return (
    <MovieDetailsCard>
      <MovieDetailsImg src={posterPath} alt={title} />
      <MovieDetailsAbout>
        <MovieDetailsTitle>
          "{title}"({new Date(release_date).getFullYear()})
        </MovieDetailsTitle>
        <MovieDetailsScore>
          User Score: {Math.round(vote_average * 10)}%
        </MovieDetailsScore>
        <MovieDetailsOverview>Overview</MovieDetailsOverview>
        <MovieDetailsOverviewText>{overview}</MovieDetailsOverviewText>
        <MovieDetailsGenres>Genres</MovieDetailsGenres>
        <MovieDetailsGenresText>
          {genres.map(genre => genre.name).join(', ')}
        </MovieDetailsGenresText>
      </MovieDetailsAbout>
    </MovieDetailsCard>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
