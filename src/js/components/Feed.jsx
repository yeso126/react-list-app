var React = require('react');
var ShowAddButton = require('./ShowAddButton.jsx');
var FeedForm = require('./FeedForm.jsx');
var FeedList = require('./FeedList.jsx');
var _ =require('lodash');
var Firebase = require('firebase')
var ReactFireMixin = require('reactfire');

var Feed = React.createClass({
mixins: [ReactFireMixin],

getInitialState: function() {
      return{
        items: [],
        formDisplayed: false
      }
    },

componentWillMount: function() {
  var ref = new Firebase("https://react-list-app.firebaseio.com/feed");
  this.bindAsArray(ref, "feed");
},

componentDidMount: function() {
  var ref = new Firebase('https://react-list-app.firebaseio.com/feed');
  ref.on('value', function(snap){
    var items = [];
    snap.forEach(function(itemSnap){
      var item = itemSnap.val();
      item.key = itemSnap.key();
      items.push(item);
    });
    this.setState({
      items: items
    })
  }.bind(this));
},


  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },

  onNewItem: function(newItem) {
  var ref = new Firebase('https://react-list-app.firebaseio.com/feed');
  ref.push(newItem);
  },

  onVote: function(item) {
  var ref = new Firebase('https://react-list-app.firebaseio.com/feed').child(item.key);
  ref.update(item);
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
