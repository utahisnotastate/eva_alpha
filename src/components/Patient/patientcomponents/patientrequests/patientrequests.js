import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import style from '../../../basestyledcomponents/Table/contentAreas'
import RequestTimeLine from '../../../PatientRequests/TimeLine/timeline'
import Card from '../../../basestyledcomponents/Card/Card'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import CardFooter from '../../../basestyledcomponents/Card/CardFooter'
import { useFormikContext, FieldArray } from 'formik'
import RequestsCollapsibleTable from './requests.collapsibletable'
import Button from '@mui/material/Button'

const useStyles = makeStyles(style)

export default function PatientRequests() {
	const classes = useStyles()

	return (
		<Card>
			<CardHeader color="primary">
				<h4 className={classes.cardTitleWhite}>Requests</h4>
			</CardHeader>
			<CardBody>
				<RequestsCollapsibleTable />
			</CardBody>
			<CardFooter>
				<Button
					color="primary"
					onClick={() => {
						console.log('add request')
					}}>
					Add Request
				</Button>
			</CardFooter>
		</Card>
	)
}
/*
		<GridContainer justifyContent="center">
			<GridItem xs={12} sm={10}>
				<Modal
					buttontext={`New Request`}
					modaltitle={`New Request`}
					patientId={id}
					form={NewRequest}
				/>
			</GridItem>
			<GridItem xs={12} sm={10}>


	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				`http://127.0.0.1:8000/api/patients/${id}/patientrequests`
			)
			return result.data
		}

		fetchData().then((response) => {
			// console.log(response);
			dispatch({
				type: 'load_patient_requests',
				patientrequests: response,
			})
		})
	}, [])

const [requests, setRequests] = useState([]);
    const columnheaders = ["Type", "Status", "Date Opened", "Assigned to", "Last Updated", "Actions"];
    const fillButtons = [
        { color: "success", icon: Person },
    ].map((prop, key) => {
        return (
            <RequestTimeLine />
        );
    });
 */
/*
/*fetchData().then( response => {
            console.log(response);
            dispatch({
                type: 'load_patient_requests',
                clinicalrequests: response,
            })*/
