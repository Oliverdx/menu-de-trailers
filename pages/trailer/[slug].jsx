import React from 'react';
import './style.scss';

class Trailer extends React.Component {

  render() {
    return (
      <video controls autoPlay>
        <source src={this.props.trailerURL} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    );
  }
}

Trailer.getInitialProps = async (context) => {
  const { slug } = context.query;
  const trailerURL = `/movietrailers/${slug}.mov`;
  console.log(trailerURL);

  return { trailerURL };
}

export default Trailer;