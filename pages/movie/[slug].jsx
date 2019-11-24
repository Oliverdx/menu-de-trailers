import React from 'react';
import { getMovie } from '../../app/helpers/getMovieList';
import './movie.scss';
import '../style.scss';

class Movie extends React.Component {

  render() {
    let { movieData } = this.props;
    movieData = JSON.parse(movieData);

    return (
      <main>
        <span className="backButton" onClick={() => window.location.href = '/'}></span>
        <section className="movieDesc">
          <h1 className="title">{movieData.name}</h1>
          <img src={movieData.image} alt={`Poster ${movieData.name}`} className="poster" />
          <p className="description">{movieData.description}</p>
          <a href={movieData.potentialAction.target} target="_self" className="watch">Watch Trailer</a>
        </section>
        <aside className="movieInfo">
          <div className="genre">
            <span>Genre</span>
            <p>{movieData.genre}</p></div>
          <div className="country">
            <span>Country</span>
            <p>{movieData.countryOfOrigin}</p></div>
          <div className="year">
            <span>Year</span>
            <p>{movieData.copyrightYear}</p></div>
        </aside>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieData) }} />
      </main>
    );
  }
}

Movie.getInitialProps = async (context) => {
  const { slug } = context.query;
  const movieData = getMovie(`${slug}.json`);
  return { movieData };
}


export default Movie;