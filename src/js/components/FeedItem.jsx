var React = require('react');

var FeedItem = React.createClass({

  voteUp: function(){
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count + 1;
    this.vote(newCount);
  },

  voteDown: function(){
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count - 1;
    this.vote(newCount);
  },

  vote: function(newCount) {
    this.props.onVote({
      key: this.props.key,
      title: this.props.title,
      description: this.props.desc,
      voteCount: newCount
    });
  },
  render: function() {
    return (
      <li key={this.props.key} >
        <span>{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span>
          <button onClick={this.voteUp}>&uarr;</button>
          <button onClick={this.voteDown}>&darr;</button>
        </span>
      </li>
    );
  }

});

module.exports = FeedItem;
