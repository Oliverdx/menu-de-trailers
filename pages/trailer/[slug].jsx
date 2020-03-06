import React from 'react';
import './style.scss';

class Trailer extends React.Component {

  render() {
    return (
      <div>
        <span className="backButton" onClick={() => window.location.href = '/'}></span>
        <video controls autoPlay>
          <source src={this.props.trailerURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

Trailer.getInitialProps = async (context) => {
  const { slug } = context.query;
  const S3URL = 'https://elasticbeanstalk-us-east-2-292877944260.s3.us-east-2.amazonaws.com'
  const trailerURL = `${S3URL}/trailers/${slug}.mov`;
  return { trailerURL };
}

export default Trailer;