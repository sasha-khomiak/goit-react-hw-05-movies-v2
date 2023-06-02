import React from 'react';
// import PropTypes from 'prop-types'

import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

import NoPosterPhoto from '../../images/no-photo-poster.png';

import {
  MovieCardContainer,
  ImageContainer,
  Img,
  StyledGoBack,
  StyledGoBackContainer,
  StyledNavLink,
} from './MovieCard.styled';

const MovieCard = ({ movieInfo }) => {
  // console.log('movieInfo', movieInfo);

  const location = useLocation();
  console.log('location', location);

  const backLinkHref = useRef(location.state?.from ?? '/');

  let nameOfMovie = null;
  if (movieInfo.title) {
    nameOfMovie = movieInfo.title;
  } else {
    nameOfMovie = movieInfo.name;
  }

  let userScore = Number(movieInfo.vote_average * 10).toFixed(0);

  let genres = movieInfo.genres.map(genre => genre.name).join(', ');

  let poster = NoPosterPhoto;
  if (movieInfo.poster_path) {
    poster = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
  }

  return (
    <>
      <StyledGoBackContainer>
        <StyledGoBack to={backLinkHref.current}>Go Back</StyledGoBack>
      </StyledGoBackContainer>
      <MovieCardContainer>
        <ImageContainer>
          <Img srcSet={poster} alt={nameOfMovie} />
        </ImageContainer>
        <div>
          <h1>{nameOfMovie}</h1>
          <p>User Score: {userScore} </p>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </MovieCardContainer>
      <h2>Additional Information</h2>
      <div>
        <StyledNavLink to={`/movies/${movieInfo.id}/cast`}>Casts</StyledNavLink>
        <StyledNavLink to={`/movies/${movieInfo.id}/reviews`}>
          Reviews
        </StyledNavLink>
      </div>

      <hr />
      <Outlet />
    </>
  );
};

// MovieCard.propTypes = {}

export default MovieCard;
