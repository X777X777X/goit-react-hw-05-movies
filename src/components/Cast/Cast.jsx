import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'Api/fetchApi';
import toastr from 'toastr';
import { Oval } from 'react-loader-spinner';
import NoImage from '../../image/NoImage.svg.png';
import { ActorsCard, ActorsList, ActorsName } from './Cast.styled.jsx';

export const Cast = () => {
  const [loadind, setLoading] = useState(false);
  const { movieId } = useParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    setLoading(true);
    fetchMovieCast(Number(movieId))
      .then(setActors)
      .catch(error => toastr.error('Oops, something broke. Try again. '))
      .finally(setLoading(false));
  }, [movieId]);

  if (!actors) {
    return;
  }
  let posterPath;
  const { cast } = actors;

  return (
    <ActorsList>
      {loadind && (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      {cast.map(actor => {
        if (actor.profile_path) {
          posterPath = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
        } else {
          posterPath = (<img src={NoImage} alt="No Image" />
          );
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
