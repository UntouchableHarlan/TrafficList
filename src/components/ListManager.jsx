var React = require('react');

var ListManager = React.createClass({

  render: function() {

    var border = {
      borderRadius: 0
    }

    var divStyle = {
      marginTop: 10
    };

    var centerText = {
      textAlign: "center"
    }

    var body = {

    }

    var heading = {

    };

    return (
      <div style={divStyle} className="col-sm-3">
        <div className="panel panel-primary" style={border}>
          <div className="panel-heading">
            <h3>{this.props.heading}</h3>
          </div>
          <div className="row panel-body">
            <h2 style={centerText}>{this.props.body}</h2>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ListManager;
