var React = require('react');

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
      <button onClick={this.props.onToggleForm}
              className={ClassString}
        >{buttonText}</button>
    );
  }

});

module.exports = ShowAddButton;
