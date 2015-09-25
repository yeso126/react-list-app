var React = require('react');
var ShowAddButton = require('./ShowAddButton.jsx');
var FeedForm = require('./FeedForm.jsx');
var FeedList = require('./FeedList.jsx');
var _ =require('lodash');


var Feed = React.createClass({

getInitialState: function() {
  var FEED_ITEMS = [
    {key: '1', title: 'Realtime data!', description: 'firebase is cool', voteCount: 49},
    {key: '2', title: 'Javascript is fun', description: 'Lexacal scopin FTW', voteCount: 24},
    {key: '3', title: 'Coffee makes you awake', description: 'drink responsible', voteCount: 15}
  ];
    return{
      items: FEED_ITEMS,
      formDisplayed: false
    }
  },

  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },

  onNewItem: function(newItem) {
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false,
      key: this.state.items.lentgh
    });
  },

  onVote: function(item) {
    console.log(item);
  },

  render: function() {
    return (
      <div>
        <div>
          <ShowAddButton onToggleForm= {this.onToggleForm}
                         displayed= {this.state.formDisplayed}/>
        </div>
        <FeedForm displayed={this.state.formDisplayed}
                  onNewItem={this.onNewItem}/>
        <FeedList items={this.state.items}
                  onVote={this.onVote}/>
      </div>
    );
  }

});

module.exports = Feed;
