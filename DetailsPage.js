var React = require('react');
var EditorHeader = require('./EditorHeader');
var Population = require('./Population');
var SelectBox = require('./SelectBox');
var Criterion = require('./Criterion');

var DetailsPage = React.createClass({
	render () {
		var getPatientsFound = () => {
			var foundPatientsArray = [];
			this.props.data.criteria.returnedPatients.forEach( result => {
				foundPatientsArray.push(result.returnedResults);
			});
			var newArr = foundPatientsArray.reduce( (acc, curr) => acc + curr);
			return newArr;
		}
		return (
			<div className="saved-query">
				<EditorHeader 
					title={ this.props.data.title } 
					creator={ this.props.data.creator } 
					dateCreated={ this.props.data.dateCreated }
					description={ this.props.data.description }
				/>

				<br />

				<div className="query-editor">

					<Population 
						totalPopulation={ this.props.data.totalPatients } 
						patientsFound={ getPatientsFound() }
					/>

					<br />

					<div className="row">
						<label htmlFor="selector" hidden>Conjunct Selector</label>
						<SelectBox 
							className="form-control"
							label="Logic Selector" 
							options={ [
								"Any of the Following",
								"All of the Following"
							] }
						/>
					</div>

					<br />

					<div className="criteria">
						{ 
							this.props.data.criteria.returnedPatients.map( (criterion, i) => {
								return (
									<Criterion 
										key={i}
										id={i + 1}
										criterionData={ criterion }
										criterionTypes={ [
											"Diagnosis",
											"Medication Ordered",
											"Medication Dispensed",
											"Other Orders",
											"Procedure"
										] }
									/>
								);
							})
						}
					</div>

					<div className="row">
						<button className="btn btn-primary">Add Another Criterion</button>
					</div>

					<br />

					<div className="row">
						<button className="btn btn-success bottom-button">Done</button>
						&emsp;
						<button className="btn btn-default bottom-button">Cancel</button>
					</div>

				</div>
			</div>
		);
	}
});

module.exports = DetailsPage;