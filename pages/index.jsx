import React from 'react';
import { getMovieList, getMovie } from '../app/helpers/getMovieList';
import './style.scss';

class Index extends React.Component {

    renderList(list){
      return list.map((data, index) => {
          return <div className="movie-single" key={index}>
              <a href={data.url}>
                <img src={data.image} alt={data.name}/>
                <span>{data.name}</span>
                <span>{data.copyrightYear}</span>
              </a>
          </div>
      });
    }

    render() {
        const { moviesData } = this.props;
        return (
            <div className="main">
                <h1>Menu de Filmes</h1>
                <div className="movieList">
                    {this.renderList(moviesData)}
                </div>
            </div>
        );
    }
}

Index.getInitialProps = async () => {
  const movieList = getMovieList();
  let moviesData = movieList.map(movie => {
    return JSON.parse(getMovie(movie));
  });

  return { movieList, moviesData };
}

export default Index;