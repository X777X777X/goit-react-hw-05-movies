import { fetchCast } from '../../api/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toastr  from 'toastr';
import { ActorsCard, ActorsList, ActorsName } from './Cast.styled.jsx';
import { Circles } from 'react-loader-spinner';
import NoImage from '../../image/NoImage.svg.png';

export const Cast = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    setLoading(true);
    fetchCast(Number(movieId))
      .then(setActors)
      .catch(error =>
        toastr.error(
          'Ooops, something broke. Try again please.. ',
          error.messages
        )
      )
      .finally(setLoading(false));
  }, [movieId]);
  if (!actors) {
    return null;
  }

  let posterPath;
  const { cast } = actors;

  return (
    <ActorsList>
      {loading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {cast.map(actor => {
        if (actor.profile_path) {
          posterPath = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
        } else {
    posterPath = NoImage;
        }
        return (
          <ActorsCard key={actor.id}>
            <img src={posterPath} width="200" height="300" alt={actor.name} />
            <ActorsName>{actor.name}</ActorsName>
          </ActorsCard>
        );
      })}
    </ActorsList>
  );
};
