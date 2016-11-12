var React = require('react');

var shotViews = React.createClass({

  render: function() {

    var panelStyle = {
      padding: 70,
      backgroundColor: "rebeccapurple",
    };

    var centerText = {
      textAlign: "center",
      marginRight: 125,
      marginLeft: 35
    };

    var border = {
      borderRadius: 0
    }

    var rightMargin = {
      marginRight: 48
    }

    return (
      <div className="panel panel-primary" style={border}>
        <div style={panelStyle} className="panel-body">

        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-sm-3" style={centerText}>
              <h4>{this.props.likeNumber}</h4>
              <p>{this.props.likes}</p>
            </div>
            <div className="col-sm-3" style={rightMargin}>
              <h4>{this.props.commentNumber}</h4>
              <p>{this.props.comments}</p>
            </div>
            <div className="col-sm-3">
              <h4>{this.props.shotViewsNumber}</h4>
              <p>{this.props.shotViews}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = shotViews;
