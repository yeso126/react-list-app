var React = require('react');

var FeedForm = React.createClass({

  handleForm: function(e) {
    e.preventDefault();

    var newItem = {
      title: React.findDOMNode(this.refs.title).value,
      description: React.findDOMNode(this.refs.desc).value,
      voteCount: 0
    };

    React.findDOMNode(this.refs.feedForm).reset();
    this.props.onNewItem(newItem);
  },

  render: function() {
    var display = this.props.displayed ? 'block' : 'none';
    var styles= {
      display: display
    };
    return (
      <form ref="feedForm" style={styles} id ="feedForm" onSubmit={this.handleForm}>
        <div>
          <input ref="title" type="text" placeholder="Title"></input>
          <input ref="desc" type="text" placeholder="Description"></input>
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }

});

module.exports = FeedForm;
