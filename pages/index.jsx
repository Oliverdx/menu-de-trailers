import React from 'react';
import { getMovieList } from '../app/helpers/getMovieList';

class Index extends React.Component {

    renderList(list){
      return list.map((movie, index) => {
          movie = movie.replace(/(.json)/g, '');
          return <li key={index}>
              <a href={`/movie/${movie}`}>{movie.replace(/-/g, ' ')}</a>
          </li>
      });
    }

    render() {
        const { movieList } = this.props;

        return (
            <div className="main">
                <h1>Menu de Filmes</h1>
                <ul>
                    {this.renderList(movieList)}
                </ul>
            </div>
        );
    }
}

Index.getInitialProps = async () => {
  const movieList = getMovieList();
  return { movieList };
}

export default Index;