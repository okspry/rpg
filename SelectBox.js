var React = require('react');

var SelectBox = React.createClass({
	propTypes: {
		label: React.PropTypes.string,
		options: React.PropTypes.array
	},

	render () {
		return (
			<select className={ this.props.className }>
				{
					this.props.options.map( (option, i) => {
						return <option key={i}>{ option }</option>
					})
				}
			</select>
		);
	}
});

module.exports = SelectBox;