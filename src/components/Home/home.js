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
	const [headers, setHeaders] = useState([
		'header 1',
		'header 2',
		'header 3',
		'header 4',
		'header 5',
	])
	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
		createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
		createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
		createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
	]

	return (
		<GridContainer direction="column" alignContent="center">
			<GridItem xs={12} sm={12} md={4}>
				<Card>
					<TextField fullWidth label="fullWidth" id="fullWidth" />
				</Card>
			</GridItem>

			<GridItem xs={12} sm={12} md={4}>
				<Card>
					<CardHeader icon>
						<CardIcon color="success">
							<LanguageIcon />
						</CardIcon>
					</CardHeader>
					<CardBody>
						<CollapsibleTable headers={headers} rows={rows} />
					</CardBody>
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
