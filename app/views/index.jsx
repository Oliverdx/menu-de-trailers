const React = require('react');
const DefaultLayout = require('./layouts/defaultLayout');

class Index extends React.Component {

    CoverRender(){

    }

    RenderList(obj) {
        return obj.map((key, index) => {
            let movieName = key.replace('.json', '');
            return (
                <li key={index}>
                    <a href={`/movie/${movieName}`}>{movieName.replace(/-/g, ' ')}</a>
                </li>
            );
        });
    }

    render() {
        const data = Object.values(this.props.data);
        return (
            <DefaultLayout title={this.props.title}>
                <h1>{this.props.title}</h1>
                <ul>
                    {this.RenderList(data)}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;