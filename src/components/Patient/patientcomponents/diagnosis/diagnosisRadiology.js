import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import MUIDataTable from 'mui-datatables'
import Button from '../../../basestyledcomponents/Table/Button'

export default function DiagnosisRadiology(props) {
	const columns = [
		{ label: 'Test Description', name: 'diagnosis_icd_code' },
		{ label: 'Date Ordered', name: 'diagnosis_description' },
		{ label: 'Completed', name: 'strength' },
		{ label: 'Results', name: 'frequency' },
		{ label: 'Reviewed By Provider?', name: 'frequency' },
		{
			name: 'id',
			label: 'Reactivate Diagnoses',
			options: {
				customBodyRender: (value, tableMeta, updateValue) => (
					<div>
						<Button
							variant="contained"
							color="primary"
							onClick={() => props.setDiagnosisActive(value)}>
							Reactive Dx
						</Button>
					</div>
				),
			},
		},
	]

	const data = [
		['Joe James', 'Test Corp', 'Yonkers', 'NY'],
		['John Walsh', 'Test Corp', 'Hartford', 'CT'],
		['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
		['James Houston', 'Test orp', 'Dallas', 'TX'],
	]
	useEffect(() => {}, [props.medications])
	return (
		<Grid container direction="column">
			<Grid item>
				<MUIDataTable
					title={'Resolved Diagnoses'}
					data={data}
					columns={columns}
				/>
			</Grid>
		</Grid>
	)
}
