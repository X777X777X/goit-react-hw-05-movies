import NoImage from '../../image/NoImage.svg.png';
import {
  MovieDetailsImg,
  MovieDetailsAbout,
  MovieDetailsTitle,
  MovieDetailsScore,
  MovieDetailsOverview,
  MovieDetailsOverviewText,
  MovieDetailsCard,
} from './MovieDetailsCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  const { overview, title, release_date, vote_average } = movie;

  let posterPath;
  if (movie.posterPath) {
    posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
  } else {
    posterPath = <img src={NoImage} alt="Sorry,no wiew actor" />;
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
  }),
};
