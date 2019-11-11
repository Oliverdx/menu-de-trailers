var React = require('react');
class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                </head>
                <body>{this.props.children}</body>
            </html>
        );
    }
}

module.exports = DefaultLayout;
