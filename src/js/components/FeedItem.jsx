var React = require('react');
var PropTypes = React.PropTypes;

var FeedItem = React.createClass({

  render: function() {
    return (
      <li>
        <span>60</span>
        <h4>Javascript is fun</h4>
        <span>Lexical scopin FTW</span>
        <span>
          <button>&uarr;</button>
          <button>&darr;</button>
        </span>
      </li>
    );
  }

});

module.exports = FeedItem;
