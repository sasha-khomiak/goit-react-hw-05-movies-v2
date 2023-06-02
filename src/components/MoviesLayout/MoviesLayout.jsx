// import PropTypes from 'prop-types'

import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

import {
  Ul,
  Li,
  ImageThumb,
  Img,
  StyledNavLink,
  TextBlock,
} from './MoviesLayout.styled';

import NoPosterPhoto from '../../images/no-photo-poster.png';

const MoviesLayout = ({ arrayOfMovies }) => {
  //   console.log('arrayOfMovies', arrayOfMovies);

  const location = useLocation();
  // console.log('location', location);

  return (
    <Ul>
      {arrayOfMovies.map(movie => {
        let nameOfMovie = null;
        if (movie.title) {
          nameOfMovie = movie.title;
        } else {
          nameOfMovie = movie.name;
        }

        let poster = NoPosterPhoto;
        if (movie.poster_path) {
          poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        }
        return (
          <Li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <ImageThumb>
                <Img srcSet={poster} />
              </ImageThumb>
            </Link>

            <TextBlock>
              <StyledNavLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {nameOfMovie}
              </StyledNavLink>
            </TextBlock>
          </Li>
        );
      })}
    </Ul>
  );
};

// MoviesLayout.propTypes = {}

export default MoviesLayout;
