const React = require('react');
const DefaultLayout = require('./layouts/defaultLayout');

class HelloMessage extends React.Component {

    render() {
        const data = this.props.data;
        console.log(data);
        return (
            <DefaultLayout title={this.props.title}>
                <ul>
                    <li>{data[0]}</li>
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = HelloMessage;