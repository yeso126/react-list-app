var React = require('react');

var FeedItem = React.createClass({

  render: function() {
    return (
      <li>
        <span>{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span>
          <button>&uarr;</button>
          <button>&darr;</button>
        </span>
      </li>
    );
  }

});

module.exports = FeedItem;
