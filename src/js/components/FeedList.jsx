var React = require('react');
var PropTypes = React.PropTypes;
var FeedItem = require('./FeedItem')

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item){
      returnn <FeedItem title={item.description} desc= {item.description}></FeedItem>
    })

    return (
      <ul>
        {feedItems}
      </ul>
    );
  }

});

module.exports = FeedList;
