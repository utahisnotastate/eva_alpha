import React from 'react'
import NewpatientForm from './schema/newpatient.form'
import Modal from '../basestyledcomponents/Modal/modal'

function addNewPatientButton() {
	return <Modal buttonText="Add New Patient" form={NewpatientForm} />
}

const options = {
	searchOpen: true,
	serverSide: false,
	textLabels: {
		body: {
			noMatch: 'SORRY NO MATCHES FOUND',
		},
	},
	searchPlaceholder: 'Search by patient name',
	print: false,
	filter: false,
	download: false,
	selectableRows: 'none',
	elevation: 0,
	customToolbar: addNewPatientButton,
	viewColumns: false,
	enableNestedDataAccess: '.',
}

export default options
