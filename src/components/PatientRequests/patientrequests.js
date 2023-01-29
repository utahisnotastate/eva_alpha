import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import style from '../basestyledcomponents/Table/contentAreas'
import CustomTabs from '../basestyledcomponents/CustomTabs/CustomTabs'
import GridContainer from '../basestyledcomponents/Grid/GridContainer'
import GridItem from '../basestyledcomponents/Grid/GridItem'
import Person from '@material-ui/icons/Person'
import { useDispatch, useSelector } from 'react-redux'
import columns from './patientrequests.columns'
import { getAllRequests } from '../../api/requests.api'

const useStyles = makeStyles(style)

export default function PatientRequests() {
	// const [activePatientRequests, setActivePatientRequests] = useState();
	const requests = useSelector((state) => state.requests)
	const dispatch = useDispatch()

	const options = {
		elevation: 0,
	}

	useEffect(() => {
		getAllRequests()
			.then((requests) => {
				dispatch({ type: 'LOAD_REQUESTS', requests })
			})
			.catch((err) => console.log(err))
	})

	return (
		<GridContainer justify="center">
			<GridItem xs={12} sm={10}>
				<CustomTabs
					headerColor="primary"
					tabs={[
						{
							tabName: 'Active',
							tabIcon: Person,
							tabContent: (
								<MUIDataTable
									title={`Active Requests`}
									data={requests}
									columns={columns}
									options={options}
								/>
							),
						},
						{
							tabName: 'Recently Completed',
							tabIcon: Person,
							tabContent: (
								<MUIDataTable
									title={`Recently Completed`}
									data={requests}
									columns={columns}
									options={options}
								/>
							),
						},
					]}
				/>
			</GridItem>
		</GridContainer>
	)
}

/*
<MUIDataTable
									title={`Active Requests`}
									data={
										requests
											? requests.filter(
													(patientrequest) =>
														patientrequest.status ===
														'active'
											  )
											: []
									}
									columns={columns}
									options={options}
								/>



* const fetchData = async () => {
			const result = await axios(
				`http://127.0.0.1:8000/api/clinicalrequests`
			)
			return result.data
		}
		fetchData().then((response) => {
			console.log(response)
			dispatch({
				type: 'load_patient_requests',
				patientrequests: response,
			})
		})
*
*
* */

/*function viewRequestColumn(tableMeta) {
	return (
		<RequestTimeLine
			requestId={tableMeta.rowData[0]}
			request_description={tableMeta.rowData[4]}
		/>
	)
}

function NameColumn(tableMeta) {
	return (
		<Typography>
			{tableMeta.rowData[2].first_name} {tableMeta.rowData[2].last_name}
		</Typography>
	)
}*/

/*const columns = [
	{
		name: 'id',
		label: 'Request ID',
		options: {
			display: false,
		},
	},
	{
		name: 'type',
		label: 'Type',
		options: {
			filter: true,
			sort: false,
		},
	},
	{
		name: 'patient',
		label: 'Name',
		options: {
			filter: true,
			sort: true,
			empty: true,
			customBodyRender: (value, tableMeta, updateValue) =>
				NameColumn(tableMeta),
		},
	},
	{
		name: 'status',
		label: 'Status',
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: 'request_description',
		label: 'Request Description',
		options: {
			display: false,
		},
	},
	{
		name: 'patient_request_updates',
		label: 'Request Updates',
		options: {
			display: false,
			empty: true,
		},
	},
	{
		name: 'viewrequest',
		label: 'View Request',
		options: {
			filter: false,
			sort: false,
			empty: true,
			customBodyRender: (value, tableMeta, updateValue) =>
				viewRequestColumn(tableMeta),
		},
	},
]*/
