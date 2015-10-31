var React = require('react');
var SelectBox = require('./SelectBox');

var Criterion = React.createClass({
	propTypes: {
		id: React.PropTypes.number.isRequired,
		criterionData: React.PropTypes.object.isRequired,
		criterionTypes: React.PropTypes.array.isRequired
	},

	render () {
		return (
			<div className="row panel panel-default criterion">
				<div className="panel-body">
					<span className="criterion-number">{ this.props.id }</span>
					<label htmlFor="selector" hidden>Criterion Types</label>
					<SelectBox
						options={ this.props.criterionTypes }
					/>
					<span className="fa fa-remove btn btn-link btn-remove pull-right"></span>
					<div className="row">
						<div className="col-xs-3">
							<span>Patients Found&emsp;</span>
							<span className="criterion-patients-returned">{ this.props.criterionData.returnedResults }</span>
						</div>
						<div className="col-xs-9 criterion-bar"></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Criterion;