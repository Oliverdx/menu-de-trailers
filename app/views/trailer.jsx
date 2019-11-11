const React = require('react');
const DefaultLayout = require('./layouts/defaultLayout');

class Movie extends React.Component {

  render() {
    return (      
      <DefaultLayout title={this.props.title}>
        <video height="720" controls autoPlay>
          <source src={this.props.trailerURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </DefaultLayout>
    );
  }
}

module.exports = Movie;