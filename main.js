var React = require('react');
var ReactDOM = require('react-dom');
var DetailsPage = require('./DetailsPage');

var queryData = {
	"title": "Query Title",
	"creator": "John Hamm",
	"dateCreated": "01-Jun-2015",
	"updates": [
		{
			"updater": "Mike Magic",
			"dateUpdated": "21-Aug-2015"
		}
	],
	"description": "The greatest and best query in the World",
	"totalPatients":  890032,
	"criteria": {
		"conjunction": "AND",
		"returnedPatients": [
			{
				"criterionId": 1,
				"criterionType": "Problem",
				"returnedResults": 99678
			},
			{
				"criterionId": 2,
				"criterionType": "Medication",
				"returnedResults": 34543
			},
			{
				"criterionId": 3,
				"criterionType": "Test/Laboratory",
				"returnedResults": 78878
			}
		]
	}
};

ReactDOM.render(<DetailsPage data={ queryData } />, document.getElementById('main'));