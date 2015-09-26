var React = require('react');

var FeedItem = require('./FeedItem.jsx')

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item){
      return (

        <FeedItem key =  {item.key}
                  id= {item.key}
                  title = {item.title}
                  desc = {item.description}
                  voteCount= {item.voteCount}
                  onVote = {this.props.onVote}/>
              )
    }.bind(this));
    return (
      <ul>
        {feedItems}
      </ul>
    );
  }

});

module.exports = FeedList;
