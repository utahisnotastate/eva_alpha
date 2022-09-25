import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridContainer from '../basestyledcomponents/Grid/GridContainer'
import GridItem from '../basestyledcomponents/Grid/GridItem'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Button } from '@mui/material'
import Card from '../basestyledcomponents/Card/Card'
import CardBody from '../basestyledcomponents/Card/CardBody'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import CardIcon from '../basestyledcomponents/Card/CardIcon'
import CardText from '../basestyledcomponents/Card/CardText'
import LanguageIcon from '@material-ui/icons/Language'
import PatientSearch from './PatientSearch/patientsearch'
import { useSelector } from 'react-redux'
import { bulkCreatePatients } from '../../api/utility.api'
import { CollapsibleTable } from '../basestyledcomponents/CollapsibleTable/collapsibletable'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import TextField from '@mui/material/TextField'
import ClinicalQueue from '../ClinicalQueue/clinicalqueue'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import AppointmentsList from './appointments.table'

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

function createData(name, calories, fat, carbs, protein, price) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		history: [
			{
				date: '2020-01-05',
				customerId: '11091700',
				amount: 3,
			},
			{
				date: '2020-01-02',
				customerId: 'Anonymous',
				amount: 1,
			},
		],
	}
}

function Home() {
	const classes = useStyles()
	const [quickactions, setQuickActions] = useState(['Create New Patient'])

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
					</CardFooter>
				</Card>
			</GridItem>
		</GridContainer>
	)
}

export default Home

/*
* 				<Button
					variant="contained"
					color="primary"
					onClick={bulkCreatePatients}>
					Please
				</Button>
*
* */
