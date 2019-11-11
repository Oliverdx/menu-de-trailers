import React from 'react';
import { getMovie } from '../../app/helpers/getMovieList';

class Movie extends React.Component {

  render() {
    let { movieData } = this.props;
    movieData = JSON.parse(movieData);

    return (
        <div>
          <img src={movieData.image} alt={`Poster ${movieData.name}`} />
          <h1>{movieData.name}</h1>
          <a href={movieData.potentialAction.target} target="_self">Watch Trailer</a>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieData) }} />
        </div>
    );
  }
}

Movie.getInitialProps = async (context) => {
  const { slug } = context.query;
  const movieData = getMovie(slug);
  return { movieData };
}


export default Movie;