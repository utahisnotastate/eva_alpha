import React from 'react'
import { Grid } from '@material-ui/core'
import MUIDataTable from 'mui-datatables'
import NewAuthorization from './newauthorization'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import CancelIcon from '@material-ui/icons/Cancel'

export default function MedicationAuthorizations(props) {
	const columns = [
		{
			label: 'Authorization Id',
			name: 'id',
			options: { display: 'excluded' },
		},
		{
			label: 'medication Id',
			name: 'medication',
			options: { display: 'excluded' },
		},
		{
			label: 'Authorized',
			name: 'authorized',
			options: {
				customBodyRender: (value, tableMeta, updateValue) => (
					<div>{value ? <DoneOutlineIcon /> : <CancelIcon />}</div>
				),
			},
		},
		{ label: 'Contact Method', name: 'contact_method' },
		{ label: 'Date started', name: 'authorized_on' },
		{
			label: 'Next authorization due on',
			name: 'date_of_next_authorization',
		},
	]
	const options = {
		elevation: 0,
	}
	const data = [
		['Joe James', 'Test Corp', 'Yonkers', 'NY'],
		['John Walsh', 'Test Corp', 'Hartford', 'CT'],
		['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
		['James Houston', 'Test Corp', 'Dallas', 'TX'],
	]
	console.log(props)
	return (
		<Grid container direction="column">
			<Grid item>
				<MUIDataTable
					title={'Authorization History'}
					data={props.prescription.medication_authorizations}
					columns={columns}
					options={options}
				/>
			</Grid>
			<Grid item>
				<NewAuthorization prescription={props.prescription} />
			</Grid>
		</Grid>
	)
}
