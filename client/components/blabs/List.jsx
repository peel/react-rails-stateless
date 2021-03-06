var React = require('react');
var Blab = require('./Blabs.jsx');

module.exports = React.createClass({
    render: function() {
        var blabs = this.props.data.map(function(blab) {
            return (
                <Blab key={blab.id} content={blab.content} />
            );
        });

        return (
            <ul className="blabs-list">
                {blabs}
            </ul>
        );
    }
})
