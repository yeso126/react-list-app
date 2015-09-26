var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');

var ShowAddButton = React.createClass({

  render: function() {

    var ClassString, buttonText;

    if (this.props.displayed) {
      ClassString='default',
      buttonText= 'Cancel';
    }
    else{
      ClassString ='success',
      buttonText = 'Create new item'
    }

    return (
      <RaisedButton onClick={this.props.onToggleForm}
                    className={ClassString}
                    label={buttonText}
        />
    );
  }

});

module.exports = ShowAddButton;
