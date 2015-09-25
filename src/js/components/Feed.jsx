var React = require('react');
var ShowAddButton = require('./ShowAddButton.jsx');
var FeedForm = require('./FeedForm.jsx');
var FeedList = require('./FeedList.jsx');

var Feed = React.createClass({

getInitialState: function() {
  var FEED_ITEMS = [
    {key: '1', title: 'Realtime data!', description: 'firebase is cool', voteCount: 49},
    {key: '2', title: 'Javascript is fun', description: 'Lexacal scopin FTW', voteCount: 24},
    {key: '3', title: 'Coffee makes you awake', description: 'drink responsible', voteCount: 15}
  ];
  return{
    items: FEED_ITEMS
  }
},

  render: function() {
    return (
      <div>

        <div>
          <ShowAddButton></ShowAddButton>
        </div>
        <FeedForm></FeedForm>
        <FeedList items={this.state.items}></FeedList>

      </div>
    );
  }

});

module.exports = Feed;
