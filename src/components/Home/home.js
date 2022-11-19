import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridContainer from '../basestyledcomponents/Grid/GridContainer'
import GridItem from '../basestyledcomponents/Grid/GridItem'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import Card from '../basestyledcomponents/Card/Card'
import CardBody from '../basestyledcomponents/Card/CardBody'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import ClinicalQueue from '../ClinicalQueue/clinicalqueue'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import { getAllForms } from '../../api/forms.api'
import { getAllInitDataOnLoad } from '../../api/utility.api'
import { bulkCreateItems } from '../../api/utility.api'
import mockappointments from '../../api/mockappointments'

const styles = {
	cardTitle: {
		marginTop: '0',
		minHeight: 'auto',
		fontWeight: '300',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
	},
}
const useStyles = makeStyles(styles)

function Home() {
	const classes = useStyles()
	const [quickactions, setQuickActions] = useState(['Create New Patient'])
	const dispatch = useDispatch()

	useEffect(() => {
		getAllInitDataOnLoad()
			.then((data) => {
				dispatch({ type: 'LOAD_PATIENTS', patients: data.patients })
				dispatch({
					type: 'LOAD_APPOINTMENTS',
					appointments: data.appointments,
				})
				dispatch({ type: 'LOAD_FORMS', forms: data.forms })
				dispatch({ type: 'LOAD_EDITFORM', editform: data.forms[0] })
				dispatch({ type: 'LOAD_REQUESTS', requests: data.requests })
			})
			.catch((err) => console.log(err))
	})

	return (
		<GridContainer direction="column" alignContent="center">
			<GridItem xs={12} sm={12} md={12}>
				<Card>
					<CardBody>
						<ClinicalQueue />
					</CardBody>
					<CardFooter>
						{quickactions.map((action, index) => {
							return (
								<Button
									key={index}
									variant="contained"
									color="primary"
									style={{ margin: '10px' }}>
									{action}
								</Button>
							)
						})}
						<Button
							variant="contained"
							color="primary"
							style={{ margin: '10px' }}
							onClick={() =>
								bulkCreateItems(
									mockappointments,
									'appointments'
								)
							}>
							Bulk Add Appointments
						</Button>
					</CardFooter>
				</Card>
			</GridItem>
		</GridContainer>
	)
}

export default Home

/*

onClick={() =>
								bulkCreateItems(
									mockappointments,
									'appointments'
								)
							}
* 				<Button
					variant="contained"
					color="primary"
					onClick={bulkCreatePatients}>
					Please
				</Button>
*
* */
