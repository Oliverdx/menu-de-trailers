const React = require('react');
const DefaultLayout = require('./layouts/defaultLayout');

class Movie extends React.Component {

  render() {
    const data = this.props.data;

    return (      
      <DefaultLayout title={this.props.title}>
        <img src={data.image} alt={`Poster ${data.name}`} />
        <h1>{data.name}</h1>
        <a href={data.potentialAction.target} target="_self">Watch Trailer</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      </DefaultLayout>
    );
  }
}

module.exports = Movie;