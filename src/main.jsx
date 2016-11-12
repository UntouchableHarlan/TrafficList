var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var Long = require('./components/ShotViews.jsx');

ReactDOM.render(<ListManager heading="How Many Followers I Got This Week" body="20" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager heading="How Much Money I Made This Week" body="$1220" />, document.getElementById('monthly-income'));
ReactDOM.render(<ListManager heading="How Much Money I Made This Week" body="$1220" />, document.getElementById('monthly-income2'));
ReactDOM.render(<ListManager heading="How Much Money I Made This Week" body="$1220" />, document.getElementById('monthly-income3'));
ReactDOM.render(<ListManager heading="How Much Money I Made This Week" body="$1220" />, document.getElementById('monthly-income4'));
ReactDOM.render(<ListManager heading="How Much Money I Made This Week" body="$1220" />, document.getElementById('monthly-income5'));
ReactDOM.render(<Long likeNumber="12000" likes="Likes" shotViewsNumber="15080" shotViews="Shot Views" commentNumber="5100" comments="Comments" />, document.getElementById('shotViews'))
ReactDOM.render(<Long likeNumber="12000" likes="Likes" shotViewsNumber="15080" shotViews="Shot Views" commentNumber="5100" comments="Comments" />, document.getElementById('shotViews2'))
