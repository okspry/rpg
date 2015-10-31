var React = require('react');

var Population = React.createClass({
	render () {
		return (
			<div className="well row">
				<div className="row">
					<div>
						<form className="form-inline col-xs-12">
							<label htmlFor="providers" className="pull-left providers-label"><strong>Institutions&emsp;</strong></label>
							<div className="form-group">
								<label className="form-control">
									<input type="checkbox" />
									Eskenazi
								</label>
							</div>
							<div className="form-group">
								<label className="form-control">
									<input type="checkbox" />
									IU Health
								</label>
							</div>
							<div className="form-group">
								<label className="form-control">
									<input type="checkbox" />
									Community
								</label>
							</div>
							<div className="form-group">
								<label className="form-control">
									<input type="checkbox" />
									St. Vincent
								</label>
							</div>
							<div className="form-group">
								<label className="form-control">
									<input type="checkbox" />
									St. Francis
								</label>
							</div>
						</form>
					</div>
				</div>

				<br />

				<div className="row">
					<form className="form-inline col-xs-7">
						<label htmlFor="providers" className="pull-left providers-label"><strong>Providers&emsp;</strong></label>
						<radiogroup>
							<div className="form-group">
								<label className="form-control">
									<input type="radio" />
									All providers
								</label>
							</div>
							<div className="form-group">
								<label className="form-control">
									<input type="radio" />
									Me
								</label>
							</div>
							<div className="form-group">
								<label className="form-control">
									<input type="radio" />
									Search Providers
								</label>
							</div>
						</radiogroup>
					</form>
				</div>
				<div className="row">
					<div className="col-xs-3">
						<div>
							<span>Total Population&ensp;</span>
							<span className="total-patients">{ this.props.totalPopulation }</span>
						</div>
					</div>

					<div className="population-bar bar col-xs-9"></div>

				</div>
				<div className="row">
					<div className="col-xs-3">
						<div>
							<span>Patients Found&ensp;</span>
							<span className="patients-found patients-ticker">{ this.props.patientsFound }</span>
						</div>
					</div>

					<div className="patients-found-bar bar col-xs-9"></div>

				</div>
			</div> //All's well that ends well
		);
	}
});

module.exports = Population;