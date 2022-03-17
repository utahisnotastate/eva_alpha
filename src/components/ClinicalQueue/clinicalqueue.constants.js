import CheckInPatient from './ClinicalQueueActions/CheckInPatient/checkinpatient'
import VerifyInsuranceAction from './ClinicalQueueActions/VerifyInsuranceAction/verifyinsuranceaction'
import MarkNoShow from './ClinicalQueueActions/MarkNoShow/marknoshow'
import React from 'react'

function TodaysAppointmentActions(props) {
	console.log(props.tableMeta)
	return (
		<div style={{ display: 'flex' }}>
			<CheckInPatient appointment={props.tableMeta.rowData[0]} />
			<VerifyInsuranceAction verification={{ status: 'unverified' }} />
			<MarkNoShow />
		</div>
	)
}

export const columns = [
	{
		name: 'id',
		label: 'Appointment ID',
		options: {
			display: false,
		},
	},
	{
		name: 'patient',
		label: 'Patient ID',
		options: {
			display: false,
		},
	},
	{
		name: 'patient_display_name',
		label: 'Name',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'start',
		label: 'Appointment Time',
		options: {
			filter: true,
			sort: false,
		},
	},
	{
		name: 'provider_display_name',
		label: 'Provider',
		options: {
			filter: true,
			sort: false,
		},
	},
	{
		name: 'actions',
		label: 'Actions',
		options: {
			filter: false,
			sort: false,
			empty: true,
			customBodyRender: (value, tableMeta, updateValue) =>
				TodaysAppointmentActions({ value, tableMeta, updateValue }),
		},
	},
]

const options = {
	searchOpen: false,
	serverSide: true,
	textLabels: {
		body: {
			noMatch: 'SORRY NO MATCHES FOUND',
		},
	},
	searchPlaceholder: 'Search by patient name',
	elevation: 0,
	print: false,
	filter: true,
	download: false,
	selectableRows: 'none',
	viewColumns: false,
	onTableInit: () => {
		console.log('Init!')
	},
}

const clinicalqueue = {
	columns,
	options,
}

export default clinicalqueue
