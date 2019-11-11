import React from 'react';

class Trailer extends React.Component {

  render() {
    return (      
        <video height="720" controls autoPlay>
          <source src={this.props.trailerURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    );
  }
}

Trailer.getInitialProps = async (context) => {
  const { slug } = context.query;
  const trailerURL = `/static/trailers/${slug}.mov`;
  console.log(trailerURL);

  return { trailerURL };
}

export default Trailer;