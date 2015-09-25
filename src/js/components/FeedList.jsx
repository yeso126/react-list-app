var React = require('react');

var FeedItem = require('./FeedItem.jsx')

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item){
      return (

        <FeedItem title={item.description} desc= {item.description} voteCount={item.voteCount}
        ></FeedItem>
      )
    })

    return (
      <ul>
        {feedItems}
      </ul>
    );
  }

});

module.exports = FeedList;
