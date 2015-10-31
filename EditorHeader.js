var React = require('react');

var EditorHeader = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		creator: React.PropTypes.string.isRequired,
		dateCreated: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired
	},

	render () {
		return (
			<div>
				<div className="clearfix heading">
					<h4 className="pull-left">
						<strong className="title">{ this.props.title }</strong>
					</h4>
				</div>
				<span className="pull-right">
					Updated&ensp;
					<span className="update-date">08-Jul-2015</span>&emsp;by&ensp;
					<span className="updater">Mr. Mister</span>
				</span>
				<span>Created by
					<span className="creator">{ this.props.creator }</span>&emsp;on&ensp;
					<span className="date-created">{ this.props.dateCreated }</span>
				</span>

				<br />

				<div>
					<span className="description">{ this.props.description }</span>
				</div>
			</div>
		);
	}
});

module.exports = EditorHeader;